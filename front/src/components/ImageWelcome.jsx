import styles from '../styles/ImageWelcome.module.css';
import imgWelcome from '../../src/assets/imagen-portada.jpg';

const ImageWelcome = () => {

    
    return (
        <div className={styles.container}>
        <img className={styles.image} src={imgWelcome} />
        <h3 className={styles.title}>Bienvenido a Jackatou Mec.</h3>
        <button className={styles.boton}>- RESERVA EN LINEA -</button>
        </div>
    );
};

export default ImageWelcome;



