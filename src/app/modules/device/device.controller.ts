import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { deviceService } from "./device.service";

const createDevice = catchAsync(async (req, res) => {
  const deviceData = req.body;
  const result = await deviceService.createDevice(deviceData);
  const responsePayload = {
    machine_id: result.machine_id,
    location_id: result.location_id,
    status: result.status,
    device_id: 0,
  };
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Device created successfully",
    data: responsePayload,
  });
});

const getDevices = catchAsync(async (req, res) => {
  const result = await deviceService.getDevices();
  const responsePayload = result.map((dev) => ({
    machine_id: dev.machine_id,
    location_id: dev.location_id,
    status: dev.status,
    device_id: 0,
  }));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Devices retrieved successfully",
    data: responsePayload,
  });
});

const getSingleDevice = catchAsync(async (req, res) => {
  const id = req.params.deviceId;
  const result = await deviceService.getSingleDevice(id);
  const responsePayload = result && {
    machine_id: result.machine_id,
    location_id: result.location_id,
    status: result.status,
    device_id: 0,
  };
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Device retrieved successfully",
    data: responsePayload,
  });
});

const updateDevice = catchAsync(async (req, res) => {
  const id = req.params.deviceId;
  const body = req.body;
  const result = await deviceService.updateDevice(id, body);
  const responsePayload = result && {
    machine_id: result.machine_id,
    location_id: result.location_id,
    status: result.status,
    device_id: 0,
  };
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Device updated successfully",
    data: responsePayload,
  });
});

const deleteDevice = catchAsync(async (req, res) => {
  const id = req.params.deviceId;
  await deviceService.deleteDevice(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Device deleted successfully",
    data: {},
  });
});

export const deviceController = {
  createDevice,
  getDevices,
  getSingleDevice,
  updateDevice,
  deleteDevice,
};