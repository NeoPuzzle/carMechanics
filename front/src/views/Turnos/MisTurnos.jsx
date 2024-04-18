import Turn from "../../components/Turn/Turn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserAppointments } from "../../redux/reducer";
import { useEffect } from "react";
import styles from "../../styles/Turn/MisTurnos.module.css";

const MisTurnos = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.userActive);
    const dispatch = useDispatch();
    const Appointments = useSelector((state) => state.userAppointments);

    useEffect(() => {
        !user.name && navigate("/")
    }
    , []);

    

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`http://localhost:3000/users/${user.id}`);
            dispatch(setUserAppointments(response.data.appointments));
            } catch(error){
            throw Error("Hubo un error al cargar datos", error);
            }
        }
        user.name && fetchData();
    }, []);


    return (
        <>
        {!user.name ? (
            <div>Loading</div>
        ): (
        <div className={styles.container}>
            <h1>Mis turnos</h1>
            <div className={styles.containerTurns} >
            {!Appointments.length ? (
            <p>No hay turnos</p>
            ) : (
                Appointments?.map((appointment) => {
                    const dateObject = new Date(appointment.date);
                    const formattedDate = dateObject.toLocaleDateString().slice(0,10).split("-").reverse().join("-");
                    return <Turn 
                    key={appointment.id}
                    date={formattedDate}
                    time={appointment.time}
                    description={appointment.description}
                    status={appointment.status}
                    id={appointment.id} />
                })
            )}
            
            </div>
        </div>
        )}
        </>
    )
}

export default MisTurnos;