// import turns from "../helpers/miTurns";
import { useState, useEffect } from "react";
import Turn from "../components/Turn/Turn";
import axios from "axios";

const MisTurnos = () => {

    const[turnos, setTurnos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4040/appointments/")
        .then((response) => {
            setTurnos(response.data);
        })
        .catch((error) => {
            throw Error("Hubo un error al cargar datos", error);
        })
    }, []);


    return (
        <>
        <h1>Mis turnos</h1>
        <div>
            {turnos.map(({id, date, time, description, status}) => {
                return <Turn 
                key={id}
                date={date}
                time={time}
                description={description}
                status={status}
                setTurnos={setTurnos} />
            })}
        </div>
        </>
    )
}

export default MisTurnos;