import HomeWelcome from "../components/Home/HomeWelcome";
import HomePresentation from "../components/Home/HomePresentation";
import HomeGalery from "../components/Home/HomeGalery";
import ContactUs from "../components/Home/ContactUs/ContacUs";
import Map from "../components/Home/ContactUs/Map";
import styles from "../styles/Home/Home.module.css";
import HelpIcon from "../components/Home/HelpIcon";

const Home = () => {

    
    return (
        <>
            <HomeWelcome/>
            <HomePresentation/>
            <HomeGalery/>
            <div className={styles.container}>
                <ContactUs className={styles.containerchild}/>
                <Map className={styles.containerchild} />
            </div>
            
            <HelpIcon/>
        </>
    );
};

export default Home;