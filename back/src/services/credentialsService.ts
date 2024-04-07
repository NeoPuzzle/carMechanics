import CredentialDto from "../dto/CredentialDto";
import { CredentialModel, UserModel } from "../config/data-source";
import { Credential } from "../entities/Credential";


export const createCredentialService = async (userData: CredentialDto): Promise<Credential> => {
    const newCredential = await CredentialModel.create(userData);
    await CredentialModel.save(newCredential);
//     const user = await UserModel.findOneBy({
//         id: newCredential.id
//     });

// if (user) {
//     user.credentials = newCredential;
//     await UserModel.save(user);
// };

    return newCredential;
}


export const validateCredentialService = async (userData: CredentialDto): Promise<number | undefined> => {
    const credentials = await CredentialModel.findOneBy({username: userData.username, password: userData.password});
    if (credentials) {
        return credentials.id;
    }
    return undefined;
}
        