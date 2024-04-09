import CredentialDto from "../dto/CredentialDto";
import CredentialRepository from "../repositories/CredentialRepository";
import { Credential } from "../entities/Credential";


export const createCredentialService = async (userData: CredentialDto): Promise<Credential> => {
    const newCredential = await CredentialRepository.create(userData);
    await CredentialRepository.save(newCredential);
//     const user = await UserModel.findOneBy({
//         id: newCredential.id
//     });

// if (user) {
//     user.credentials = newCredential;
//     await UserModel.save(user);
// };

    return newCredential;
}


export const validateCredentialService = async (userData: CredentialDto): Promise<Credential | null> => {
    const credentials = await CredentialRepository.findOneBy({username: userData.username, password: userData.password});
    return credentials;
}
        