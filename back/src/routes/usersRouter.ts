import { getUserController, getUserByIdController, createUserController, loginController } from "../controllers/usersController";
import { Router } from "express";

const usersRouter: Router = Router();

usersRouter.get("/", getUserController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register/", createUserController);
usersRouter.post("/login/", loginController);

export default usersRouter;