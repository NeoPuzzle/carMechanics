import { Request, Response } from 'express';
import { Appointment } from '../entities/Appointment';
import { getAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from '../services/appointmentsService';
import AppointmentDto from '../dto/AppoinmentDto';

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({ message: 'Appointments not found'});
    }
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const appointment: Appointment | undefined = await getAppointmentByIdService(id);
        if (appointment) {
        res.status(200).json(appointment);
        } 
    } catch (error) {
        res.status(404).json({ message: 'Appointment not found'});
    }
};  

export const createAppointmentController = async (req: Request, res: Response) => {
    try {
        const {date, time,description, user}: AppointmentDto = req.body;
        const newAppointment: Appointment | null = await createAppointmentService({date, time, description, user});
        if (newAppointment) {
            res.status(201).send(newAppointment);
        }
    } catch (error) {
        res.status(400).json({ message: 'User ID valid is required'});
    }
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id);
        const appointment: Appointment | undefined = await cancelAppointmentService(id);
        if (appointment) {
            res.status(200).json(appointment);
        }
    } catch (error) {
        res.status(404).json({ message: 'Appointment not found'});
    }
};