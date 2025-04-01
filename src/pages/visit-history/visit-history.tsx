import { useGetData } from "src/service/useGetData";

import { LoadingScreen } from "src/components/loading-screen";
import { Alert } from "src/components/ui/alert";
import { Badge } from "src/components/ui/badge";
import { Card } from "src/components/ui/card";

import { Mcu } from "src/types/patient-form";

export default function VisitHistory() {
  const { visits, visitError, isVisitsFetching } = useGetData();

  if (isVisitsFetching) {
    return <LoadingScreen />;
  }

  if (visitError) {
    return (
      <Alert title="Error" variant="destructive">
        Something went wrong while fetching visit history. Please try again
        later.
        <br />
        <span className="font-bold text-sm">{visitError?.message}</span>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-2xl font-bold mb-2">Visit History</p>
      {visits?.map((visit: Mcu) => (
        <Card key={visit.visit_id} className="p-4">
          <p className="font-semibold text-lg">
            {visit.user_info.patient_name}
          </p>
          <p className="text-sm text-gray-500">
            Patient ID: {visit.user_info.patient_id}
          </p>
          <p className="text-sm text-gray-500">
            Visit Date: {new Date(visit.visit_date).toLocaleDateString()}
          </p>

          <div className="space-y-2">
            <div>
              <h3 className="font-medium">Doctor</h3>
              <p>
                {visit.doctor_info.doctor_name} -{" "}
                {visit.doctor_info.specialization}
              </p>
            </div>

            <div>
              <h3 className="font-medium">Treatment Details</h3>
              <ul className="list-disc pl-5">
                {visit.treatment_detail.map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Medication Details</h3>
              <ul className="list-disc pl-5">
                {visit.medication_detail.map((medication, index) => (
                  <li key={index}>{medication}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Cost of Treatment</h3>
              <p>
                $
                {visit.cost_of_treatment
                  ? visit.cost_of_treatment.toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Badge variant="outline">Visit ID: {visit.visit_id}</Badge>
          </div>
        </Card>
      ))}
    </div>
  );
}
