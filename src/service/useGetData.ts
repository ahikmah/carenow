import { useQuery } from "@tanstack/react-query";

import { toast } from "src/hooks/use-toast";

import type { Option, Doctor, ReturnObject, Mcu } from "src/types/patient-form";

import { fetcher } from "./api";

export const useGetData = () => {
  const {
    data: treatments,
    error: treatmentsError,
    isFetching: isTreatmentsFetching,
  } = useQuery<Option[]>({
    queryKey: ["treatments"],
    queryFn: async () => {
      try {
        const data = await fetcher<ReturnObject>("treatment");
        return data.responseObject as Option[];
      } catch (error) {
        toast({
          title: "Error fetching treatments",
          description: error instanceof Error ? error.message : String(error),
          variant: "destructive",
        });
        throw error;
      }
    },
    retry: false,
  });

  const {
    data: medications,
    error: medicationsError,
    isFetching: isMedicationsFetching,
  } = useQuery<Option[]>({
    queryKey: ["medications"],
    queryFn: async () => {
      try {
        const data = await fetcher<ReturnObject>("medication");
        return data.responseObject as Option[];
      } catch (error) {
        toast({
          title: "Error fetching medications",
          description: error instanceof Error ? error.message : String(error),
          variant: "destructive",
        });
        throw error;
      }
    },
    retry: false,
  });

  const {
    data: doctors,
    error: doctorError,
    isFetching: isDoctorsFetching,
  } = useQuery<Doctor[]>({
    queryKey: ["doctor"],
    queryFn: async () => {
      try {
        const data = await fetcher<ReturnObject>("doctor");
        return data.responseObject as Doctor[];
      } catch (error) {
        toast({
          title: "Error fetching doctors",
          description: error instanceof Error ? error.message : String(error),
          variant: "destructive",
        });
        throw error;
      }
    },
    retry: false,
  });

  const {
    data: visits,
    error: visitError,
    isFetching: isVisitsFetching,
  } = useQuery<Mcu[]>({
    queryKey: ["mcu"],
    queryFn: async () => {
      try {
        const data = await fetcher<ReturnObject>("mcu");
        return data.responseObject as unknown as Mcu[];
      } catch (error) {
        toast({
          title: "Error fetching visits",
          description: error instanceof Error ? error.message : String(error),
          variant: "destructive",
        });
        throw error;
      }
    },
    retry: false,
  });

  return {
    treatments,
    treatmentsError,
    isTreatmentsFetching,
    medications,
    medicationsError,
    isMedicationsFetching,
    doctors,
    doctorError,
    isDoctorsFetching,
    visits,
    visitError,
    isVisitsFetching,
  };
};
