//GET /appointments => Obtener todos los turnos
//GET /appointments/:id => Obtener un turno por id

//POST /appointments/schedule => Crear un turno

//PUT /appointments/cancel => Cancelar un turno

import { Router } from "express";
import { getAppointmentsController, getAppointmentByIdController, createAppointmentController, cancelAppointmentController } from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentByIdController);
appointmentsRouter.post("/schedule/", createAppointmentController);
appointmentsRouter.put("/cancel/", cancelAppointmentController);


export default appointmentsRouter;