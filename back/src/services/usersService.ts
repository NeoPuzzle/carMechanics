import { UserModel } from "../config/data-source";
import userDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import {User} from "../entities/User";
import { createCredentialService } from "./credentialsService";


export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await UserModel.find({
        relations: {
            credentials: true,
            appointments: true
        }
    });
    if(!allUsers){
        throw new Error('No users found');
    } else {
        return allUsers;
    }
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser = await UserModel.findOneBy({id});
    if (!foundUser) throw new Error('User not found');
    return foundUser;
}

export const createUserWithCredentialsService = async (userData: userDto): Promise<User> => {

        const newCredentialId: Credential = await createCredentialService({
            username: userData.username,
            password: userData.password
        });

    const newUser = new User();
    newUser.name = userData.name;
    newUser.email = userData.email;
    newUser.birthdate = userData.birthdate;
    newUser.nDni = userData.nDni;
    newUser.credentials = newCredentialId;

    await UserModel.save(newUser);
    return newUser;
    } 