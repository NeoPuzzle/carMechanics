import express from "express";
const morgan = require("morgan");
import router from "./routes/index";
import cors from "cors";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router)



export default server;

