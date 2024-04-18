import { Router } from "express";
import { getAppointmentsController, getAppointmentByIdController, createAppointmentController, cancelAppointmentController } from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule/", createAppointmentController);
appointmentsRouter.put("/cancel/:id", cancelAppointmentController);


export default appointmentsRouter;