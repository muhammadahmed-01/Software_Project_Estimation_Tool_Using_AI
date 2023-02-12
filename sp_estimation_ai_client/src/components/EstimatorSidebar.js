import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import PropTypes from "prop-types";
import ReviewedTasks from "./ReviewedTasks";
import logo from "../logo.svg"
const drawerWidth = 250;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

export default function EstimatorSidebar({ hideContents }) {
  console.log("hide contents = ", hideContents)
  return (
    // <Drawer variant="permanent" open={true} PaperProps={{ style: { height: "100vh" } }}>
      <List component="nav">
              <Link to="/dashboard">
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Estimates" />
                </ListItemButton>
              </Link>
              <Link to="/dashboard?status=rejected">
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentTurnedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Rejected" />
                </ListItemButton>
              </Link>
              <Link to="/dashboard?status=approved">
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Approved" />
                </ListItemButton>
              </Link>
              <Link to="/dashboard?status=pending">
                <ListItemButton>
                  <ListItemIcon>
                    <BoltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pending" />
                </ListItemButton>
              </Link>
              <Divider sx={{ my: 1 }} />
              <Typography sx={{ marginLeft: "5%" }} variant={"body2"}>MY PROJECTS</Typography>
              <Link to="/doctors-list">
                <ListItemButton>
                  <ListItemIcon>
                    {/*<AssignmentTurnedInIcon/>*/}
                  </ListItemIcon>
                  <ListItemText primary="Rejected" />
                </ListItemButton>
              </Link>
              <Link to="/my-appointments">
                <ListItemButton>
                  <ListItemIcon>
                    {/*<PersonIcon/>*/}
                  </ListItemIcon>
                  <ListItemText primary="Approved" />
                </ListItemButton>
              </Link>
              {/* {secondaryListItems} */}
            </List>
    // </Drawer>
  );
}

EstimatorSidebar.propTypes = {
  hideContents: PropTypes.bool.isRequired,
};