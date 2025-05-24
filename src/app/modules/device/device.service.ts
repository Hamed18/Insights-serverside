import Device from "./device.model";
import { IDevice } from "./device.interface";

const createDevice = async (data: IDevice): Promise<IDevice> => {
  const device = await Device.create({ ...data, device_id: 0 });
  return device;
};

const getDevices = async () => {
  return Device.find();
};

const getSingleDevice = async (id: string) => {
  return Device.findById(id);
};

const updateDevice = async (id: string, data: Partial<IDevice>) => {
  data.device_id = 0;
  return Device.findByIdAndUpdate(id, data, { new: true });
};

const deleteDevice = async (id: string) => {
  return Device.findByIdAndDelete(id);
};

export const deviceService = {
  createDevice,
  getDevices,
  getSingleDevice,
  updateDevice,
  deleteDevice,
};