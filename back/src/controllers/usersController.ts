import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, createUserWithCredentialsService } from "../services/usersService";


export const getUserController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal get user" });
    }
};

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.body.id);
        const user = await getUserByIdService(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    
    }
};

export const createUserController = async (req: Request, res: Response) => {
    try {
        const newUser = req.body;
        const id = await createUserWithCredentialsService(newUser);
        if (id) {
            res.status(201).json({ message: "User created", id });
        } else {
            res.status(400).json({ message: "User already exists" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }

    //vamos atomar los de datos del usuario del body de la request
    //vamos a llamar a la funcion correspondiente del servicio de usuarios
    //para la creacion de un nuevo usuario
    //id, name, email, birthate, address
    //el password debera ser referencia del id del usuario
    //la fecha de creacion sera la fecha actual''''
    //la fecha de actualizacion sera la fecha actual
    //la fecha de eliminacion sera null
    //si el usuario ya existe, devolver un error 400
    //si el usuario se ha creado correctamente, devolver un 201


};

export const loginController = async (req: Request, res: Response) => {
    res.send("POST /users/login => Login del usuario a la aplicación");
};
