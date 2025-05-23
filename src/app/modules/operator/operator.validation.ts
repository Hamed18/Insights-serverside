import { z } from "zod";

const operatorValidationSchema = z.object({
  body: z.object({
    employee_id: z.string().min(1, "Employee ID is required"),
    operator_name: z.string().min(1, "Operator name is required"),
    picture_url: z.string().url("Must be a valid URL"),
    rfid_tag: z.string().min(1, "RFID tag is required"),
    position: z.string().min(1, "Position is required"),
  }),
});

export const OperatorValidation = {
  operatorValidationSchema,
};