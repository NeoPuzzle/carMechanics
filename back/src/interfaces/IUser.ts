import ICredentianls from "./ICredential";

interface IUser {
    id: number;
    name: string;
    email: string;
    birthdate: string;
    nDni: number;
    crendentialsId: ICredentianls['id'];
}


export default IUser;