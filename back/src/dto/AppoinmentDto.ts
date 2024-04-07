import  Status  from "../enum/enumStatus";

export interface AppointmentDto {
    date: Date;
    time: string;
    status: Status;
    userId: number;
}

export default AppointmentDto;