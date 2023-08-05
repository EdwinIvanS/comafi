import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from '@mui/material/Toolbar';
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
  const serverPath = window.location.origin;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 606);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const list = (
    <List>
      {listNav.map((data) => {
        return (
          <li key={data.id}>
            <Link to={serverPath + data.path}>
              <ListItem button>
                <data.icon />
                <ListItemText primary={data.name} />
              </ListItem>
            </Link>
          </li>
        );
      })}
    </List>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 606);
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
          {isMobileView && (
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
          )}
          {/* Los botones de opciones se muestran solo en vista de escritorio */}
          <div style={{ margin: "auto" }}>
            {!isMobileView && (
              <>
                {listNav.map((data) => {
                  return (
                    <>
                      <Link to={serverPath + data.path} key={data.id}>
                        <Button color="inherit" style={{ padding: "10px" }}>
                          {data.name}
                        </Button>
                      </Link>
                    </>
                  );
                })}
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
