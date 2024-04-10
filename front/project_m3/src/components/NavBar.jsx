import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { ShoppingCart, Person, Home } from '@material-ui/icons';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
      <Typography variant="h6" className={styles.businessName}>JACKATOU MEC.</Typography>
        <div className={styles.iconContainer}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="cart">
            <ShoppingCart />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="user">
            <Person />
          </IconButton>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

