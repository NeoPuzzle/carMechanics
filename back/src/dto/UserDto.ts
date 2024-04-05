import CredentialDto from './CredentialDto';

export interface userDto {
    name: string;
    email: string;
    birthdate: string;
    nDni: number;
    crendentialsId: CredentialDto;
}

export default userDto; 
