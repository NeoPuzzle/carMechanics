"use strict";
var EStatusTurn;
(function (EStatusTurn) {
    EStatusTurn["PENDING"] = "pending";
    EStatusTurn["ACCEPTED"] = "accepted";
    EStatusTurn["REJECTED"] = "rejected";
})(EStatusTurn || (EStatusTurn = {}));
const usuario1 = {
    id: '1',
    name: 'Juan',
    email: "juanPerez@mail.com",
    phone: "123456789",
    address: "Calle falsa 123",
    passwd: "1234",
    passwdRepeat: "1234"
};
const turnUser1 = {
    id: '1',
    date: '2021-09-01',
    status: EStatusTurn.PENDING,
    user: usuario1
};
console.log(turnUser1);
