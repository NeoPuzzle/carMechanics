import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, createUserWithCredentialsService, loginService } from "../services/usersService";
import { User } from "../entities/User";


export const getUserController = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: "Internal get user" });
    }
};

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const userById: User = await getUserByIdService(id);
        if (userById) {
            res.status(200).json(userById);
        }
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    
    }
};

export const createUserController = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni} = req.body;
        const user:User = await createUserWithCredentialsService({name, email, username, password, birthdate, nDni});
        if (user) {
            res.status(201).json({ message: "User created", user });
        } 
    } catch (error) {
        res.status(400).json({ message: "Incorrect Data" });
    }

};

export const loginController = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const user = await loginService(username, password);
        if (user) {
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(404).json({ message: "User not found" });
    }
};
