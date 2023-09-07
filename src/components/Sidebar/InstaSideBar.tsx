import React from "react";
import "./../../App.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import * as Icons from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useMediaQuery, Theme, useTheme } from "@mui/material";
import { StyledSidebarDrawer, customStyles } from "./InstaSideBar.style";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import sidebarOptions from "./InstaSidebar.mocks";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const InstaSideBar = () => {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const drawer = (
    <div>
      <Toolbar>
        <h2>Instagram</h2>
      </Toolbar>
      <List>
        {sidebarOptions.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "#212121" }}>
                  {React.createElement(Icons[item.icon])}
                </ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            {sidebarOptions.map((item, index) => (
              <BottomNavigationAction
                key={index}
                label="Recents"
                value="recents"
                icon={React.createElement(Icons[item.icon])}
                component={Link}
                to={item.path}
                sx={isMobile ? customStyles.mobileBottomNavAction : null}
                className="custom-bottom-nav-action"
              />
            ))}
          </BottomNavigation>
        </Paper>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <StyledSidebarDrawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  padding: 0,
                },
              }}
              open
            >
              {drawer}
            </StyledSidebarDrawer>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default InstaSideBar;
