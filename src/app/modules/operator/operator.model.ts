import { model, Schema } from "mongoose";
import { IOperator } from "./operator.interface";

const operatorSchema = new Schema<IOperator>(
  {
    employee_id: { type: String, required: true },
    operator_name: { type: String, required: true },
    picture_url: { type: String, required: true },
    rfid_tag: { type: String, required: true },
    position: { type: String, required: true },
    operator_id: { type: Number, default: 0 }, // Optional: auto-increment logic handled elsewhere
  },
  { timestamps: true }
);

const Operator = model<IOperator>("Operator", operatorSchema);

export default Operator;