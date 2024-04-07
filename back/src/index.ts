import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize()
.then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
        });
    })
.catch((error) => {
    console.log("Error connecting to the database", error);
});   

