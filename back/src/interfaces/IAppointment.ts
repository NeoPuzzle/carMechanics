import IUser from "./IUser";
import Status from "../enum/enumStatus";

interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: IUser['id'];
    status: Status;
} 

export default IAppointment;