import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listNav } from "../javascript/list-navbar";

export default function AppBarPrincipal() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 750);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const list = (
    <List>
      {listNav.map((data) => {
        return (
          <li key={data.id}>
            <ListItem button>
              <ListItemText primary={data.name} />
            </ListItem>
          </li>
        );
      })}
    </List>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Empresa
          </Typography>
          {/* Los botones de opciones se muestran solo en vista de escritorio */}
          <div style={{ margin: "auto" }}>
            {!isMobileView && (
              <>
                <Link to={"/AboutUs"}>
                  <Button color="inherit" style={{ padding: "10px" }}>
                    Acerca de Nosotros
                  </Button>
                </Link>
                <Link to={"/Catalog"}>
                  <Button color="inherit" style={{ padding: "10px" }}>
                    Catalógo
                  </Button>
                </Link>
                <Link to={"/Contact"}>
                  <Button color="inherit" style={{ padding: "10px" }}>
                    Contacto
                  </Button>
                </Link>
                <Link to={"/Gallery"}>
                  <Button color="inherit" style={{ padding: "10px" }}>
                    Galeria
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* El Drawer se muestra solo en vista móvil */}
      {isMobileView && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          {list}
        </Drawer>
      )}
    </div>
  );
}
