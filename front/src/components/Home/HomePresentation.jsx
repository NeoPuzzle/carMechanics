import { useState } from "react"
import myPresentation from "../../helpers/myPresentation"
import Presentation from "./Presentation"
import styles from '../../styles/Home/HomePresentation.module.css';

const HomePresentation = () => {

    const [presentations, setPresentations] = useState(myPresentation);

    return (
        
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>LA EMPRESA</h1>
            </div>
            <div className={styles.containerPresentation}> 
            {presentations.map((presentation, index) => {
                return <Presentation key={index} imgUrl={presentation.imgUrl} title={presentation.title} description={presentation.description} />
            })}
            </div>
            
        </div>
    )
}

export default HomePresentation;

