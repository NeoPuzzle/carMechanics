//GET /users => Obtener todos los usuarios
//GET /users/:id => Obtener un usuario por id

//POST /users/register  => Crear un usuario
//POST /users/login => Login del usuario a la aplicación

import { getUserController, getUserByIdController, createUserController, loginController } from "../controllers/usersController";
import { Router } from "express";

const usersRouter: Router = Router();

usersRouter.get("/", getUserController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register/", createUserController);
usersRouter.post("/login/", loginController);

export default usersRouter;