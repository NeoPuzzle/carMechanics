import UserRepository from "../repositories/UserRepository";
import userDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import {User} from "../entities/User";
import { createCredentialService, validateCredentialService } from "./credentialsService";
import CredentialRepository from "../repositories/CredentialRepository";


export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await UserRepository.find({
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

    const user = await UserRepository.getUserByIdWhithAppointments(id);

    return user;
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

    await UserRepository.save(newUser);
    return newUser;
    } 



export const loginService = async (username: string, password: string): Promise<{login: boolean, user:User}> => {
    try {
        const credentialsId = await validateCredentialService({ username, password});

        if(credentialsId) {
            const user = await UserRepository.findOne({
            where: {
                credentials: credentialsId
            }
            });

            if(user) {
                return {login: true, user};
                } else {
                    throw Error('User not found');
                }
            } else {
                throw Error('User not found');
            }
    } catch (error) {
        throw  Error('User not found');
    }

}
    


    
    
    
    
    // const userLogin = await CredentialRepository.findOne({
    //     where: {
    //         username: username,
    //         password: password
    //     },
    //     relations: ['users']
    // });

    // if (!userLogin) {
    //     return {login: false}
    // } else {
    //     return {login: true, user: userLogin.users};
    // }

