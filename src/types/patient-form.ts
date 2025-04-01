export interface Option {
  id: string;
  name: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  phone_number: string;
  email: string;
  address: string;
  avaibility: string;
  yoe: number;
  license_number: string;
  notes: string;
}

export interface Patient {
  id: string;
  nik: string;
  name: string;
  gender: string;
  dob: string;
  height: 0;
  weight: 0;
  phone_number: string;
  address: string;
}

export interface Mcu {
  visit_id: string;
  visit_date: string;
  user_info: {
    patient_id: string;
    patient_name: string;
  };
  doctor_info: {
    doctor_id: string;
    doctor_name: string;
    specialization: string;
  };
  treatment_detail: string[];
  medication_detail: string[];
  cost_of_treatment: number;
}

export interface PatientVisit {
  patient_name: string;
  patient_id: string;
  date_of_treatment: string;
  treatment_description: string[];
  medication_prescribed: string[];
  cost_of_treatment: number;
  doctor_id: string;
}

export interface ReturnObject {
  success: boolean;
  message: string;
  responseObject: Doctor[] | Option[];
  statusCode: number;
}
