export interface IOperator {
  employee_id: string;
  operator_name: string;
  picture_url: string;
  rfid_tag: string;
  position: string;
  operator_id?: number; // auto assigned by DB or code
  createdAt?: Date;
  updatedAt?: Date;
}