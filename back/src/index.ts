import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    });

    


// interface IPasswd {
//     passwd: string;
//     passwdRepeat: string;
// }

// interface IUser extends IPasswd {
//     id: string;
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
// }


// enum EStatusTurn {
//     PENDING = 'pending',
//     ACCEPTED = 'accepted',
//     REJECTED = 'rejected'
// }

// interface ITurn {
//     id: string;
//     date: string;
//     status: EStatusTurn;
//     user: IUser;
// } 

// const usuario1: IUser = {
//     id: '1',
//     name: 'Juan',
//     email: "juanPerez@mail.com",
//     phone: "123456789",
//     address: "Calle falsa 123",
//     passwd: "1234",
//     passwdRepeat: "1234"
// }

// const turnUser1: ITurn = {
//     id: '1',
//     date: '2021-09-01',
//     status: EStatusTurn.PENDING,
//     user: usuario1
// }


//console.log(turnUser1);