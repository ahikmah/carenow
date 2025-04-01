import { useMutation } from "@tanstack/react-query";

import { toast } from "src/hooks/use-toast";

import type { PatientVisit } from "src/types/patient-form";

import { fetcher } from "./api";

export function useSubmitMcu() {
  return useMutation({
    mutationFn: async (payload: PatientVisit) => {
      return await fetcher("mcu", {
        method: "POST",
        body: payload,
      });
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Form submitted successfully",
        variant: "success",
      });
    },
    onError: (error: unknown) => {
      const errorMessage =
        error && typeof error === "object" && "message" in error
          ? (error as { message: string }).message
          : "Failed to submit form";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });
}
