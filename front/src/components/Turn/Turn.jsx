import styles from '../../styles/Turn/Turno.module.css';

const Turno = ({date, time, description, status}) => {
    return(
        <div className={styles.container}>
            <p className={styles.date}>{date}</p>
            <p>{time}</p>
            <p>{description}</p>
            <p> {status}</p>
            <button disabled={status == "CANCELLED"}>Cancelar</button>
        </div>
    );
}

export default Turno;