import { Router } from "express";
import { USER_ROLE } from "../user/user.constants";
import auth from "../../middleeatres/auth";
import { operatorController } from "./operator.controller";
import validateRequest from "../../middleeatres/validateRequest";
import { OperatorValidation } from "./operator.validation";

const operatorRouter = Router();

// operatorRouter.post(
//   "/operators",
//   auth(USER_ROLE.operator),
//   validateRequest(OperatorValidation.operatorValidationSchema),
//   operatorController.createOperator
// );
operatorRouter.post(
  "/operators",
  validateRequest(OperatorValidation.operatorValidationSchema),
  operatorController.createOperator
);

operatorRouter.get("/operators", operatorController.getOperators);

// operatorRouter.get("/operators/:employee_id", operatorController.getSingleOperator);

// operatorRouter.put(
//   "/operators/employee_id",
//   operatorController.updateOperator 
// );

// operatorRouter.delete(
//   "/operators/employee_id",
//   operatorController.deleteOperator 
// );

// operatorRouter.put(
//   "/operators/:employee_id",
//   auth(USER_ROLE.operator),
//   operatorController.updateOperator
// );
// operatorRouter.delete(
//   "/operators/:employee_id",
//   auth(USER_ROLE.operator),
//   operatorController.deleteOperator
// );

export default operatorRouter;