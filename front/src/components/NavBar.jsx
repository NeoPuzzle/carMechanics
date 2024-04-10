import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
      <Typography variant="h6" className={styles.businessName}>JACKATOU MEC.</Typography>
        <div className={styles.iconContainer}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <HomeIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="cart">
            <LocalGroceryStoreIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="user">
            <PersonIcon />
          </IconButton>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

