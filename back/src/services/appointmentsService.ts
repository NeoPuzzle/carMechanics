import { Appointment } from "../entities/Appointment";  
import { AppointmentModel, UserModel } from "../config/data-source";
import Status from "../enum/enumStatus";
import AppointmentDto from "../dto/AppoinmentDto";

export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments = await AppointmentModel.find({
        relations: {
            user: true
        }
    
    });
    return allAppointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | undefined>  => {
    const appointmentById = await AppointmentModel.findOneBy({id});
    if (!appointmentById) {
        return undefined;
    }
    return appointmentById;
};  

export const createAppointmentService = async (appointment: AppointmentDto): Promise<Appointment | null> => {
    const user = await UserModel.findOneBy({
        id: appointment.userId
    });

    if (!user) {
        return null;
    }

    const newAppointment = await AppointmentModel.create(appointment);
    await AppointmentModel.save(newAppointment);

    if (user) {
        newAppointment.user = user;
        AppointmentModel.save(newAppointment);
    }

    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<Appointment | undefined> => {
    const appointmentCancel = await AppointmentModel.findOneBy({id});
    if(appointmentCancel){
        appointmentCancel.status = Status.CANCELLED;
        await AppointmentModel.save(appointmentCancel);
        return appointmentCancel;
    }
    return undefined;
};