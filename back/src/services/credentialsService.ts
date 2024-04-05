import CredentialDto from "../dto/CredentialDto";
import ICredentianls from "../interfaces/ICredential"

let credentials: ICredentianls[] = [
    {
        id: 1,
        username: 'admin',
        password: 'admin'
    },

    {
        id: 2,
        username: 'user',
        password: 'user'
    },
    {
        id: 3,
        username: 'user2',
        password: 'user2'
    },
    {
        id: 4,
        username: 'user3',
        password: 'user3'
    }
];

export const createCredentialService = async (userData: CredentialDto): Promise<number> => {

    const newId = credentials.length > 0 ? credentials[credentials.length - 1].id + 1 : 1;
    
    const newCredential: ICredentianls = {
        id: newId,
        username: userData.username,
        password: userData.password
    };
    credentials.push(newCredential);
    return newId;
}


export const validateCredentialService = async (userData: CredentialDto): Promise<number | undefined> => {
    const credential = credentials.find(credential => credential.username === userData.username);
    if (credential) {
        if (credential.password === userData.password){
            return credential.id;
        }
    }
    return undefined;
}
        