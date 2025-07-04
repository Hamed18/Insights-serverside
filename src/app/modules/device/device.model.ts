import { Schema, model } from "mongoose";
import { IDevice } from "./device.interface";

const deviceSchema = new Schema<IDevice>(
  {
    machine_id: { type: String, required: true },
    location_id: { type: Number, required: true },
    status: { type: String, required: true, enum: ["active", "inactive", "not functional"], default: "active" },
    device_id: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model<IDevice>("Device", deviceSchema);