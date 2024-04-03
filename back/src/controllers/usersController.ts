import { Request, Response } from "express";


export const getUserController = async (req: Request, res: Response) => {
    res.send("GET /users => Obtener todos los usuarios");
};

export const getUserByIdController = async (req: Request, res: Response) => {
    res.send("GET /users/:id => Obtener un usuario por id");
};

export const createUserController = async (req: Request, res: Response) => {
    res.send("POST /users/register => Crear un usuario");
};

export const loginController = async (req: Request, res: Response) => {
    res.send("POST /users/login => Login del usuario a la aplicación");
};
