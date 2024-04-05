import { Request, Response } from 'express';
import IAppointment from '../interfaces/IAppointment';
import { getAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from '../services/appointmentsService';

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments: IAppointment[] = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const appointment: IAppointment | undefined = await getAppointmentByIdService(id);
        if (appointment) {
        res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: 'Appointment not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};  

export const createAppointmentController = async (req: Request, res: Response) => {
    try {
        const appointment: IAppointment = req.body;
        const newAppointment: IAppointment | null = await createAppointmentService(appointment);
        if (newAppointment) {
            res.status(201).json(newAppointment);
        } else {
            res.status(400).json({ message: 'User ID is required'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const appointment: IAppointment | undefined = await cancelAppointmentService(id);
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: 'Appointment not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};