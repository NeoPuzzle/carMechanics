import  Status  from "../enum/enumStatus";

export interface AppointmentDto {
    date: Date;
    time: string;
    description: string;
    userId: number;
}

export default AppointmentDto;