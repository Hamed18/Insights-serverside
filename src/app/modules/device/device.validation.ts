import { z } from "zod";

const createDeviceZodSchema = z.object({
  body: z.object({
    machine_id: z.string({ required_error: "machine_id is required" }),
    location_id: z.number({ required_error: "location_id is required" }),
    status: z.enum(["active", "inactive"], { required_error: "status is required" }),
  }),
});

export const DeviceValidation = {
  createDeviceZodSchema,
};