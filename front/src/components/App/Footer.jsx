import styles from '../../styles/App/Footer.module.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
    return (
        <footer className={styles.container}>
        <div >
        <IconButton edge="start" color="inherit" aria-label="facebook">
            <FacebookIcon className={styles.icon}/>
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="facebook">
            <InstagramIcon className={styles.icon}/>
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="facebook">
            <YouTubeIcon className={styles.icon}/>
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="facebook">
            <WhatsAppIcon className={styles.icon}/>
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="facebook">
            <LinkedInIcon className={styles.icon}/>
        </IconButton>
        </div>
        <p className={styles.copyrigth}>COPYRIGHT © 2024 JACKATOU MEC. - TODOS LOS DERECHOS RESERVADOS.</p>
        <p className={styles.derechos}>POLÍTICA DE PRIVACIDAD</p>
        </footer>
    );
}

export default Footer;