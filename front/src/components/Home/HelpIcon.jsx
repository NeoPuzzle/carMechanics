import IconButton from '@mui/material/IconButton';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import styles from '../../styles/App/HelpIcon.module.css'

const HelpIcon = () => {

    return (
            <button className={styles.container}>
            <IconButton className={styles.icon}>
                <ChatBubbleTwoToneIcon/>
            </IconButton>
        </button>
    );

}

export default HelpIcon;