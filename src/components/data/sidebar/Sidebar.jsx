import React from "react";
import {
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { sidebarItems } from "../Sidebar";
// import { loginChecker } from "./common/utils.mjs";

const ListItem = withStyles({
  root: {
    "&": {
      padding: "2px",
      // marginTop: "6px",
      textAlign: "center",
      borderRadius: "25px",
    },
    "&$selected": {
      backgroundColor: "#7c057b",
      color: "#fefefe",
      opacity: "0.9",
      padding: "2px",
      fontWeight: "bold",
      textAlign: "center",
      borderRadius: "25px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      "& .MuiListItemIcon-root": {
        color: "#fefefe",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#7c057b",
      color: "#fefefe",
      "& .MuiListItemIcon-root": {
        color: "#fefefe",
      },
    },
    "&:hover": {
      backgroundColor: "#7c057b",
      color: "#fefefe",
      "& .MuiListItemIcon-root": {
        color: "#fefefe",
      },
    },
  },
  selected: {},
})(MuiListItem);

const drawerWidth = 300;

const Sidebar = (props) => {
  const { window } = props;
  const [selected, setSelected] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [toolbarTitle, setTitle] = React.useState(sidebarItems[0].title);
  let location = useLocation();
  const [currentPage, setCurrentPage] = React.useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSelect = (index, title) => {
    setSelected(index);
    setTitle(title);
  };

  React.useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const drawer = (
    <Paper
      sx={{ height: "100vh", bottom: 0 }}
      style={{ minHeight: "100vh", overflow: "auto" }}
    >
      <Toolbar>
        <Stack direction={"row"} p={1}>
          <img src="/images/logo.svg" width="40px" alt="TmMuse_Logo" />
          <Stack direction={"column"} pl={2} spacing={-1}>
            <Typography
              style={{
                fontFamily: "montserrat",
                fontSize: "26px",
                fontWeight: "600",
                color: "#31456A",
                letterSpacing: "3px",
              }}
            >
              TmMuse
            </Typography>
            <Typography
              style={{
                fontFamily: "montserrat",
                fontSize: "19px",
                fontWeight: "600",
                color: "#31456A",
              }}
            >
              admin panel
            </Typography>
          </Stack>
        </Stack>
      </Toolbar>
      <Divider />
      <List style={{ minHeight: "100%", overflow: "hidden" }}>
        {sidebarItems.map((sideBarChild, i) => (
          <Link
            to={sideBarChild.link}
            style={{
              textDecoration: "none",
              color: props.isDark ? "#FFFFFF" : "#000000",
            }}
            key={`${sideBarChild.title}___`}
          >
            <ListItem
              selected={currentPage == sideBarChild.link}
              onClick={() => handleSelect(i, sideBarChild.title)}
              key={sideBarChild.title}
              disablePadding
            >
              <ListItemButton sx={{ textDecoration: "none" }} color="action">
                <ListItemIcon color="action">{sideBarChild.icon}</ListItemIcon>
                <ListItemText primary={sideBarChild.title} color="action" />
                <ListItemIcon color="action">
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default Sidebar;
