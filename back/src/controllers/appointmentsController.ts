import { Request, Response } from 'express';
import { Appointment } from '../entities/Appointment';
import { getAppointmentsService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from '../services/appointmentsService';
import AppointmentDto from '../dto/AppoinmentDto';

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const appointment: Appointment | undefined = await getAppointmentByIdService(id);
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
        const appointmentDto: AppointmentDto = req.body;
        const newAppointment: Appointment | null = await createAppointmentService({
            date: appointmentDto.date,
            time: appointmentDto.time,
            status: appointmentDto.status,
            userId: appointmentDto.userId
        });
        if (newAppointment) {
            res.status(201).json(newAppointment);
        } else {
            res.status(400).json({ message: 'User ID valid is required'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const appointment: Appointment | undefined = await cancelAppointmentService(id);
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: 'Appointment not found'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
    }
};