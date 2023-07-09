import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material/";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';
/* import {Tecnologias} from '../Tecnologias/Tecnologias';
import {Projetos} from '../Principal/Principal'; */

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = React.useState(false);
  

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const renderNavLinks = () => {
    return (
      <List>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText primary="HOME" />
        </ListItem>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText primary="PROJETOS" />
        </ListItem>
        <ListItem  component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText primary="TECNOLOGIAS" />
        </ListItem>
        <ListItem button component={Link} to="/" onClick={toggleDrawer}>
          <ListItemText primary="QUEM SOU EU?" />
        </ListItem>
      </List>
    );
  };
  
  

  return (
    <React.Fragment>
      <AppBar position="fixed" sx={{ bgcolor: "rgba(0, 0, 0, 0.8)" }}>
        <Toolbar>
          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" style={{ color: "#fff", textDecoration: "none" }} className={styles.home}>
                  HOME
                </Link>
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/projetos" style={{ color: "#fff", textDecoration: "none" }} className={styles.projetos}>
                  PROJETOS
                </Link>
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/tecnologias" style={{ color: "#fff", textDecoration: "none" }} className={styles.tecnologias}>
                  TECNOLOGIAS
                </Link>
              </Typography>
              <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/quem-sou-eu" style={{ color: "#fff", textDecoration: "none" }} className={styles.quem}>
                  QUEM SOU EU?
                </Link>
              </Typography>
            </>
          )}
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/emilly-finco/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            edge="end"
          
          >
            <FaLinkedinIn style={{ color: "#fff"}} className={styles.linkedin} />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/Emillycristina"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            edge="end"
           
          >
            <AiFillGithub style={{ color: "#fff" }} className={styles.github}  />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left"  open={openDrawer} onClose={toggleDrawer}>
        {renderNavLinks()}
      </Drawer>
    </React.Fragment>
  );
}
