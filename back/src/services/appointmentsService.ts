import { Appointment } from "../entities/Appointment";  
import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";
import Status from "../enum/enumStatus";
import AppointmentDto from "../dto/AppoinmentDto";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments = await AppointmentRepository.find({
        relations: {
            user: true
        }
    
    });
    return allAppointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | undefined>  => {
    const appointmentById = await AppointmentRepository.findOneBy({id});
    if (appointmentById) {
        return appointmentById;
    } else {
        throw Error('Appointment not found');
    }
};  

export const createAppointmentService = async (appointment: AppointmentDto): Promise<Appointment | null> => {
    const user = await UserRepository.findOneBy({
        id: appointment.userId
    });

    if (!user) {
        return null;
    }

    const newAppointment = await AppointmentRepository.create({
        date: appointment.date,
        time: appointment.time,
        status: Status.ACCEPTED,
        user: user
    });
    await AppointmentRepository.save(newAppointment);

    if (user) {
        newAppointment.user = user;
        AppointmentRepository.save(newAppointment);
    }

    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<Appointment | undefined> => {
    try {
        const appointmentCancel = await AppointmentRepository.findOneBy({id});
        if(appointmentCancel){
            appointmentCancel.status = Status.CANCELLED;
            await AppointmentRepository.save(appointmentCancel);
            return appointmentCancel;
        } else {
            throw Error('Appointment not found');
        }
    
    } catch (error) {
        throw Error('Appointment not found');
    }

    return undefined;
};