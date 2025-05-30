import { Request, Response } from "express";
 import { userService } from "./user.service";
 import sendResponse from "../../utils/sendResponse";
 import { StatusCodes } from "http-status-codes";
 import catchAsync from "../../utils/catchAsync";
 
 const createAdmin = catchAsync(async (req: Request, res: Response)=>{
   const payload = req.body
   const result = await userService.createAdmin(payload)
   
   sendResponse(res, {
     statusCode: StatusCodes.CREATED,
     message: 'Admin created successfully',
     data: result,
   })
 })

 const getUser = async (req: Request, res: Response) => {
       const result = await userService.getUser()
       sendResponse(res, {
         statusCode: StatusCodes.OK,
         message: 'User get successfully',
         data: result,
       })
   }
 
   const getSingleUser = async (req: Request, res: Response) => {
       const userId = req.params.userId
       const result = await userService.getSingleUser(userId)
   
       sendResponse(res, {
         statusCode: StatusCodes.OK,
         message: 'User get successfully',
         data: result,
       })
   }
   
   const updateUser = async (req: Request, res: Response) => {
       const userId = req.params.userId
       const body = req.body
       const result = await userService.updateUser(userId, body)
   
       sendResponse(res, {
         statusCode: StatusCodes.OK,
         message: 'User update successfully',
         data: result,
       })
   }
   
  // update password
  
   const deleteUser = async (req: Request, res: Response) => {
       const userId = req.params.userId
       await userService.deleteUser(userId)
       sendResponse(res, {
         statusCode: StatusCodes.OK,
         message: 'User deleted successfully',
         data: {},
       })
   }
 
 export const userController ={
     createAdmin,
     getUser,
     getSingleUser,
     updateUser,
     deleteUser,
 }