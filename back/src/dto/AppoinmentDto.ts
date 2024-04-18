import  Status  from "../enum/enumStatus";

export interface AppointmentDto {
    date: Date;
    time: string;
    description: string;
    user: number;
}

export default AppointmentDto;