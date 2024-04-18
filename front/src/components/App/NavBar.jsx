import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import styles from '../../styles/App/NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removerUserActive } from '../../redux/reducer';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';



const NavBar = () => {

  const changeSubmit = () => {
    alert("Funcionalidad en construccion")
  }

  const user = useSelector((state) => state.userActive);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
      <Typography variant="h6" className={styles.businessName}>JACKATOU MEC.</Typography>
        <div className={styles.iconContainer}>
          <NavLink to='/'
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "grey" : isPending ? "blue" : "white",
            };
          }}>
            <IconButton edge="start" color="inherit" aria-label="home">
              <HomeIcon />
            </IconButton>
          </NavLink>
          
          <IconButton edge="start" color="inherit" aria-label="cart" onClick={changeSubmit} >
            <LocalGroceryStoreIcon />
          </IconButton>

        {
          user.name && (
            <NavLink to="/appointments"
          style={({ isActive, isPending}) => {
            return {
              color: isActive ? "grey" : isPending ? "blue" : "white",
            };
          }}>
            <IconButton edge="start" color="inherit" aria-label="user">
              <TurnedInIcon />
            </IconButton>
          </NavLink>
          )
        }

        {
          !user.name ? 
          <NavLink to="/login"
          style={({ isActive, isPending}) => {
            return {
              color: isActive ? "grey" : isPending ? "blue" : "white",
            };
          }}>
            <IconButton edge="start" color="inherit" aria-label="user">
              <PersonIcon />
            </IconButton>
        </NavLink> : null
        }

        {
          user.name ? <button className={styles.buttonLogin} onClick={()=>{
            dispatch(removerUserActive())
            navigate("/")
          }
          }>Bienvenido: {user.name} <IconButton><LogoutIcon style={{ color: 'white' }} /></IconButton></button> : null
        }
            
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

