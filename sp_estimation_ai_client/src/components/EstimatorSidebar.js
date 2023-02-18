import React from "react";
import { Divider, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";

export default function EstimatorSidebar() {
  return (
    <List sx={{ width: "16.183vw", position: "relative" }} component="nav">
      <Link sx={{marginTop: "20vh"}} to="/estimator-dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Estimates" />
        </ListItemButton>
      </Link>
      <Link to="/estimator-dashboard?status=rejected">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Rejected" />
        </ListItemButton>
      </Link>
      <Link to="/estimator-dashboard?status=approved">
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Approved" />
        </ListItemButton>
      </Link>
      <Link to="/estimator-dashboard?status=pending">
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
    </List>
  );
}