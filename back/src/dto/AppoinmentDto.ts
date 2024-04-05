import  Status  from "../enum/enumStatus";
import IUser from "../interfaces/IUser";
import userDto from "./UserDto";

export interface AppointmentDto {
    id: number;
    date: string;
    time: string;
    userId: IUser["id"];
    status: Status;
}

export default AppointmentDto;