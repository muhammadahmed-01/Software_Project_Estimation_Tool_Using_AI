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
import "./sidebar.css"

export default function EstimationReviewerSidebar() {
  return (
    <List style={{ width: "16.183vw", position: "relative", marginTop: "11vh"}}
          component="nav">
      <Link style={{marginTop: "20vh"}} to="/estimation-reviewer-dashboard">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Assigned Tasks" />
        </ListItemButton>
      </Link>
      <Link style={{marginTop: "20vh"}} to="/estimation-reviewer-dashboard?status=unassigned">
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Unassigned Tasks" />
        </ListItemButton>
      </Link>
      <Link to="/estimation-reviewer-dashboard?status=rejected">
        <ListItemButton>
          <ListItemIcon>
            <AssignmentTurnedInIcon />
          </ListItemIcon>
          <ListItemText primary="Rejected Estimates" />
        </ListItemButton>
      </Link>
      <Link to="/estimation-reviewer-dashboard?status=approved">
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Approved Tasks" />
        </ListItemButton>
      </Link>
      <Link to="/estimation-reviewer-dashboard?status=pending">
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Pending Tasks" />
        </ListItemButton>
      </Link>

      <Divider sx={{ my: 1 }} />
      <Typography sx={{ marginLeft: "5%", textTransform: "uppercase" }}
                  variant={"body2"}>Estimators</Typography>

      {/*TODO: Add API call to get all estimates of estimator*/}
      <Link to="">
        <ListItemButton>
          <ListItemIcon>
            {/*<AssignmentTurnedInIcon/>*/}
          </ListItemIcon>
          <ListItemText primary="Estimator 1" />
        </ListItemButton>
      </Link>
      <Link to="">
        <ListItemButton>
          <ListItemIcon>
            {/*<PersonIcon/>*/}
          </ListItemIcon>
          <ListItemText primary="Estimator 2" />
        </ListItemButton>
      </Link>

      <Divider sx={{ my: 1 }} />
      <Typography sx={{ marginLeft: "5%", textTransform: "uppercase" }}
                  variant={"body2"}>Projects</Typography>

      {/*TODO: Add API call to get all estimates of project*/}
      <Link to="">
        <ListItemButton>
          <ListItemIcon>
            {/*<AssignmentTurnedInIcon/>*/}
          </ListItemIcon>
          <ListItemText primary="Grocery Store" />
        </ListItemButton>
      </Link>
      <Link to="">
        <ListItemButton>
          <ListItemIcon>
            {/*<PersonIcon/>*/}
          </ListItemIcon>
          <ListItemText primary="Mobile Store" />
        </ListItemButton>
      </Link>
    </List>
  );
}