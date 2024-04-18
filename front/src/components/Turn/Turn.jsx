import { cancelAppointmentAction } from '../../redux/reducer';
import styles from '../../styles/Turn/Turno.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Turno = ({id,date, time, description, status}) => {

    const dispatch = useDispatch();
    
        const cancelAppointment = async () => {
            try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            dispatch(cancelAppointmentAction(id));
            } catch(error){
            throw Error("Hubo un error al cargar datos", error);
            }
        }

        const handleCancel = () => {
            cancelAppointment();
        }
    
    return(
        <div className={styles.container}>
            <p className={styles.date}>{date}</p>
            <p>{time}</p>
            <p>{description}</p>
            <p> {status}</p>
            <button disabled={status == 'CANCELLED'} onClick={handleCancel}>Cancelar</button>
        </div>
    );
}

export default Turno;