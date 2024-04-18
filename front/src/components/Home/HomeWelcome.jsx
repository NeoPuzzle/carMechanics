import styles from '../../styles/Home/ImageWelcome.module.css';
import imgWelcome from '../../assets/imagen-portada.jpg';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ImageWelcome = () => {

    const navigate = useNavigate();
    const user = useSelector((state) => state.userActive);

    const handleSubmit = () => {
        !user.name ? navigate("/login") : navigate("/turn");
    }


    
    
    return (
        <div className={styles.container}>
        <img className={styles.image} src={imgWelcome} />
        <h3 className={styles.title}>Bienvenido a Jackatou Mec.</h3>
        <button onClick={handleSubmit} className={styles.boton}>- RESERVA TU CITA EN LINEA -</button>
        </div>
    );
};

export default ImageWelcome;



