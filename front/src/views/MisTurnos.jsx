import turns from "../helpers/miTurns";
import { useState } from "react";
import Turn from "../components/Turn";

const MisTurnos = () => {

    const[turnos, setTurnos] = useState(turns);

    console.log(turnos);

    return (
        <div>
            <h1>Mis turnos</h1>
            {turnos.map((turno, index) => {
                return <Turn key={index} date={turno.date} userId={turno.userId} />
            })}
        </div>
    )
}

export default MisTurnos;