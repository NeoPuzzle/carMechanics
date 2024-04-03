import express from "express";
const morgan = require("morgan");
import router from "./routes/index";

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router)


export default server;

