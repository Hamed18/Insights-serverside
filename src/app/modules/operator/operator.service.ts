import Operator from "./operator.model";
import { IOperator } from "./operator.interface";

// Since operator_id must always be 0 in the response and is not used for unique identification or incrementing,
// we simply set operator_id to 0 for every new operator record.
// The DB will always save operator_id as 0 (or you can omit the field from the save entirely if not needed in DB).

const createOperator = async (data: IOperator): Promise<IOperator> => {
  const operator = await Operator.create({ ...data, operator_id: 0 });
  return operator;
};

const getOperators = async () => {
  return Operator.find();
};

const getSingleOperator = async (id: string) => {
  return Operator.findById(id);
};

const updateOperator = async (id: string, data: Partial<IOperator>) => {
  data.updatedAt = new Date();
  // Always ensure operator_id remains 0 on update
  return Operator.findByIdAndUpdate(id, { ...data, operator_id: 0 }, { new: true });
};

const deleteOperator = async (id: string) => {
  return Operator.findByIdAndDelete(id);
};

export const operatorService = {
  createOperator,
  getOperators,
  getSingleOperator,
  updateOperator,
  deleteOperator,
};