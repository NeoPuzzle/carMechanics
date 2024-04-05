import IAppointment from "../interfaces/IAppointment";  
import Status from "../enum/enumStatus";
import AppointmentDto from "../dto/AppoinmentDto";


const appointments: IAppointment[] = [
    {
        id: 1,
        date: '2022-01-01',
        time: '09:00',
        userId: 1,
        status: Status.PENDING
    },
    {
        id: 2,
        date: '2022-01-01',
        time: '10:00',
        userId: 2,
        status: Status.PENDING
    },
    {
        id: 3,
        date: '2022-01-01',
        time: '11:00',
        userId: 3,
        status: Status.PENDING   
    }
];

let id: number = 4;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointments;
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined>  => {
    return appointments.find(appointment => appointment.id === id);
};  

export const createAppointmentService = async (appointment: AppointmentDto): Promise<IAppointment | null> => {
    
    if(!appointment.userId){
        console.log('User ID is required');
        
        return null;
    }

    const newId = appointments.length > 0 ? appointments[appointments.length - 1].id + 1 : 1;

    const newAppointment: IAppointment = {
        id: newId,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: Status.PENDING
    };
    appointments.push(newAppointment);
    return newAppointment;
};

export const cancelAppointmentService = async (id: number): Promise<IAppointment | undefined> => {
    const appointment = appointments.findIndex(appointment => appointment.id === id);
    if (appointment !== -1) {
        appointments[appointment].status = Status.CANCELLED;
        return appointments[appointment];
    }
    return undefined;
};