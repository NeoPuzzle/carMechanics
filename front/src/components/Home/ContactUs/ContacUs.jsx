import styles from '../../../styles/Home/ContactUs/ContactUs.module.css'

const ContactUs = () => {

    const handleSumit = () => {
        alert("Funcionalidad en construccion")
    }

    return (
        <div className={styles.container}>
        <h1>COMUNICATE CON NOSOTROS</h1>
        <p><strong>O, aun mejor, ven a visitarnos!</strong></p>
        <p>Nos encanta recibir a nuestros clientes, asi que ven en<br/>
        cualquier momento durante las horas de oficina</p>
        <p><strong>Jackatou Mec.</strong></p>
        <p><strong>Horario</strong></p>
        <select id="horarios" name="horario">
        <option value="lunes"> - Lunes 9:00 - 17:00 - </option>
        <option value="martes"> - Martes 9:00 - 17:00 - </option>
        <option value="miercoles"> - Miercoles 9:00 - 17:00 - </option>
        <option value="jueves"> - Jueves 9:00 - 17:00 - </option>
        <option value="viernes"> - Viernes 9:00 - 17:00 - </option>
        <option value="sabado"> - Sabado cerrado - </option>
        <option value="domingo"> - Domingo cerrado - </option>
        </select>
        <button onClick={handleSumit} className={styles.button}>-COMUNICATE CON NOSOTROS-</button>
        </div>
    );
    };

export default ContactUs;