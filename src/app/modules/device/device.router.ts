import { Router } from "express";
import { deviceController } from "./device.controller";

const deviceRouter = Router();

deviceRouter.post("/devices", deviceController.createDevice);
deviceRouter.get("/devices", deviceController.getDevices);
deviceRouter.get("/devices/:deviceId", deviceController.getSingleDevice);
deviceRouter.put("/devices/:deviceId", deviceController.updateDevice);
deviceRouter.delete("/devices/:deviceId", deviceController.deleteDevice);

export default deviceRouter;