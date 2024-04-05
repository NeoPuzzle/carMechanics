import userDto from "../dto/UserDto";
import  IUser from "../interfaces/IUser"
import { createCredentialService } from "./credentialsService";


const users: IUser[] = [
    {
        id: 1,
        name: 'admin',
        email: 'mail.com',
        birthdate: '2022-01-01',
        nDni: 12345678,
        crendentialsId: 1
    },
    {
        id: 2,
        name: 'user',
        email: 'mail.com',
        birthdate: '2022-01-01',
        nDni: 12345678,
        crendentialsId: 2
    }
];


export const getAllUsersService = async (): Promise<IUser[]> => {
    return users;
}

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    return users.find(user => user.id === id);
}

export const createUserWithCredentialsService = async (userData: userDto): Promise<number | null> => {
    try {
        const credentialsId = await createCredentialService(userData.crendentialsId);

        const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        
    const newUser: IUser = {
        id: newId,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        crendentialsId: credentialsId
    }
    users.push(newUser);
    return newId;
    } catch (error) {
        console.error('Error en la creación de usuario con credenciales:', error);
        
        return null;
    }
}