import IconButton from '@mui/material/IconButton';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../../styles/App/HelpIcon.module.css'
import useToogle from '../../hooks/useToogle';

const HelpIcon = () => {

    const [toogle, setToogle] = useToogle(false);

    return (
        <>
        <div className={styles.container}>
        {toogle && <div className={styles.containerHelp}>
            <h3>¿Necesitas ayuda?</h3>
            <p>Estamos aquí para ayudarte, si tienes alguna duda o problema no dudes en contactar con nosotros.</p>
            <form>
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email"/>
            <label htmlFor="phone">Telefono:</label>
            <input type="tel" id="phone" name="phone"/>
            <label htmlFor="address">Direccion:</label>
            <input type="text" id="address" name="address"/>
            <label htmlFor="description">Description:</label>
            <textarea type='textarea' id="description" name="description" rows='4'/>
            <button type="submit">Enviar</button>
      </form>
        </div>}
            <IconButton onClick={() => setToogle(false)} >
                {!toogle ? <ChatBubbleIcon className={styles.icon} fontSize="large"/>
                : <CancelIcon className={styles.icon} fontSize="large"/>}
            </IconButton>
            
            
        </div>
        
        </>
    );

}

export default HelpIcon;