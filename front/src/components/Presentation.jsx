import styles from '../styles/Presentation.module.css';

const presentation = ({imgUrl, title, description}) => {
    return (
        <div className={styles.container}>
        <div>
            <img className={styles.img} src={imgUrl} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </div>
        
    );
}

export default presentation;