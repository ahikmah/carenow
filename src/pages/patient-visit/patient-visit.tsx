"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import { useGetData } from "src/service/useGetData";
import { useSubmitMcu } from "src/service/useSubmitMcu";

import { LoadingScreen } from "src/components/loading-screen";
import { Alert } from "src/components/ui/alert";
import { Button } from "src/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { MultiSelect } from "src/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";

import type { PatientVisit } from "src/types/patient-form";

const formSchema = z.object({
  patient_name: z.string().min(2, "Name must be at least 2 characters"),
  patient_id: z
    .string()
    .length(16, "Patient ID must be exactly 16 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Invalid Patient ID"),
  date_of_treatment: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid Date",
  }),
  treatment_description: z
    .array(z.string())
    .min(1, "Select at least one treatment"),
  medication_prescribed: z
    .array(z.string())
    .min(1, "Select at least one medication"),
  cost_of_treatment: z.preprocess(
    (val) => parseFloat(val as string),
    z.number().positive("Cost must be greater than 0")
  ),
  doctor_id: z.string().nonempty("Doctor selection is required"),
});

export default function PatientVisit() {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patient_name: "",
      patient_id: "",
      date_of_treatment: "",
      treatment_description: [],
      medication_prescribed: [],
      cost_of_treatment: undefined,
      doctor_id: "",
    },
  });

  // ✅ Fetch Options from API
  const {
    treatments,
    medications,
    doctors,
    isDoctorsFetching,
    isMedicationsFetching,
    isTreatmentsFetching,
    doctorError,
    medicationsError,
    treatmentsError,
  } = useGetData();

  // ✅ Submit Mutation
  const submitMutation = useSubmitMcu();

  // ✅ Handle Form Submission
  const onSubmit = (values: PatientVisit) => {
    submitMutation.mutate(values, {
      onSuccess: () => {
        form.reset();
        form.setValue("doctor_id", "");
        form.setValue("cost_of_treatment", 0);
      },
    });
  };

  if (isDoctorsFetching || isMedicationsFetching || isTreatmentsFetching) {
    return <LoadingScreen />;
  }

  if (doctorError || medicationsError || treatmentsError) {
    return (
      <Alert title="Error" variant="destructive">
        Something went wrong. Please try again later.
        <br />
        <span className="font-bold text-sm">
          {doctorError?.message ||
            medicationsError?.message ||
            treatmentsError?.message}
        </span>
      </Alert>
    );
  }

  return (
    <>
      <div className="flex items-end">
        <p className="text-2xl font-bold mb-2">Patient Visit Form</p>

        <Button
          className="ml-auto"
          onClick={() => {
            navigate("/visit-history");
          }}
        >
          Show Record
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Patient Name */}
          <FormField
            control={form.control}
            name="patient_name"
            render={({ field }) => (
              <FormItem>
                <Label>Patient Name</Label>
                <Input {...field} placeholder="Enter patient name" />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Patient ID */}
          <FormField
            control={form.control}
            name="patient_id"
            render={({ field }) => (
              <FormItem>
                <Label>Patient ID (NIK)</Label>
                <Input {...field} placeholder="Enter patient NIK" />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Doctor Selection */}
          <FormField
            control={form.control}
            name="doctor_id"
            render={({ field }) => (
              <FormItem>
                <Label>Select Doctor</Label>
                <Select
                  key={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {doctors?.map((doctor) => (
                      <SelectItem key={doctor.id} value={doctor.id}>
                        {doctor.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date of Treatment */}
          <FormField
            control={form.control}
            name="date_of_treatment"
            render={({ field }) => (
              <FormItem>
                <Label>Date of Treatment</Label>
                <Input type="date" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Treatment Description (Multi-Select) */}

          <FormField
            control={form.control}
            name="treatment_description"
            render={({ field }) => (
              <FormItem>
                <Label>Treatment Description</Label>
                <MultiSelect
                  options={
                    treatments?.map((t) => ({ id: t.id, name: t.name })) || []
                  }
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select treatments"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Medications Prescribed (Multi-Select) */}
          <FormField
            control={form.control}
            name="medication_prescribed"
            render={({ field }) => (
              <FormItem>
                <Label>Medications Prescribed</Label>
                <MultiSelect
                  options={
                    medications?.map((m) => ({ id: m.id, name: m.name })) || []
                  }
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select medications"
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Cost of Treatment */}
          <FormField
            control={form.control}
            name="cost_of_treatment"
            render={({ field }) => (
              <FormItem>
                <Label>Cost of Treatment</Label>
                <Input
                  type="number"
                  {...field}
                  placeholder="Enter cost"
                  onChange={(e) => {
                    const value = e.target.value.replace(/^0+(?=\d)/, "");
                    field.onChange(value || "0");
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" disabled={submitMutation.isPending}>
            {submitMutation.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </>
  );
}
