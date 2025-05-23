import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { operatorService } from "./operator.service";

const createOperator = catchAsync(async (req, res) => {
  const operatorData = req.body;
  const result = await operatorService.createOperator(operatorData);
  const responsePayload = {
    employee_id: result.employee_id,
    operator_name: result.operator_name,
    picture_url: result.picture_url,
    rfid_tag: result.rfid_tag,
    position: result.position,
    operator_id: 0,  // default always 0
  };
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Operator created successfully",
    data: responsePayload,
  });
});

const getOperators = catchAsync(async (req, res) => {
  const result = await operatorService.getOperators();
  const responsePayload = result.map((op) => ({
    employee_id: op.employee_id,
    operator_name: op.operator_name,
    picture_url: op.picture_url,
    rfid_tag: op.rfid_tag,
    position: op.position,
    operator_id: 0,
  }));
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Operators retrieved successfully",
    data: responsePayload,
  });
});

const getSingleOperator = catchAsync(async (req, res) => {
  const id = req.params.operatorId;
  const result = await operatorService.getSingleOperator(id);
  const responsePayload = result && {
    employee_id: result.employee_id,
    operator_name: result.operator_name,
    picture_url: result.picture_url,
    rfid_tag: result.rfid_tag,
    position: result.position,
    operator_id: 0,
  };
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Operator retrieved successfully",
    data: responsePayload,
  });
});

const updateOperator = catchAsync(async (req, res) => {
  const id = req.params.operatorId;
  const body = req.body;
  const result = await operatorService.updateOperator(id, body);
  const responsePayload = result && {
    employee_id: result.employee_id,
    operator_name: result.operator_name,
    picture_url: result.picture_url,
    rfid_tag: result.rfid_tag,
    position: result.position,
    operator_id: 0,
  };
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Operator updated successfully",
    data: responsePayload,
  });
});

const deleteOperator = catchAsync(async (req, res) => {
  const id = req.params.operatorId;
  await operatorService.deleteOperator(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Operator deleted successfully",
    data: {},
  });
});

export const operatorController = {
  createOperator,
  getOperators,
  getSingleOperator,
  updateOperator,
  deleteOperator,
};