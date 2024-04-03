import { Request, Response } from 'express';

export const getAppointmentsController = (req: Request, res: Response) => {
    res.send(
        'GET /appointments => Obtener todos los turnos'
    );
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    res.send(
        'GET /appointments/:id => Obtener un turno por id');
};

export const createAppointmentController = async (req: Request, res: Response) => {
    res.send(
        'POST /appointments => Crear un turno'
    );
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
    res.send(
        'PUT /appointments/:id => Cancelar un turno'
    );
};