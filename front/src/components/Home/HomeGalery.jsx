import { useState } from 'react';
import Galery from './Galery';
import myGalery from  '../../helpers/myGalery'
import styles from '../../styles/Home/HomeGalery.module.css';

const HomeGalery = () => {

    const [images, setImages] = useState(myGalery);

    return(
        
        <div className={styles.container} >
            <div className={styles.title}>
                <h1>GALERIA FOTOGRAFICA</h1>
            </div>
            <div className={styles.containerGalery}>
                {images.map((image, index) => {
                    return <Galery key={index} imgUrl={image.imgUrl} />
                })}
            </div>
        </div>
    );
}

export default HomeGalery;