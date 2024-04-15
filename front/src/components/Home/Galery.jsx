import styles from '../../styles/Home/Galery.module.css'

const image = ({imgUrl}) => {

    return(
        <div className={styles.container}>
            <div>
                <img className={styles.imgUrl} src={imgUrl} />
            </div>
        </div>
       
    )

}

export default image;