import styles from '../../styles/Home/Presentation.module.css';

const presentation = ({imgUrl, title, description}) => {
    return (
        <div className={styles.container}>
        <div>
            <img className={styles.img} src={imgUrl} />
            <h3 className={styles.text}>{title}</h3>
            <p className={styles.text}>{description}</p>
        </div>
        </div>
        
    );
}

export default presentation;