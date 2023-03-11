import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import { Avatar, Box, Drawer, InputBase, InputLabel, Paper, Select } from "@mui/material";
// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators } from "../state";
// import { bindActionCreators } from "redux";

import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MenuItem from "@mui/material/MenuItem";
import logo from "../logo.svg";
import PropTypes from "prop-types";
import EstimatorTasks from "./EstimatorTasks";

const drawerWidth = "240";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar({ username, role }) {
  // const open = useSelector(state => state.state)
  // const dispatch = useDispatch();
  // const { toggleDrawer } = bindActionCreators(actionCreators, dispatch);
  const [settings, setSettings] = React.useState('');

  const handleChange = (event) => {
    setSettings(event.target.value);
  };

  return (
  <AppBar position="absolute" open={open} sx={{height: "auto",
    backgroundColor: "#FFFFFF", border: "1px solid #DBDBDB", boxShadow: "none"}}>
    <Drawer variant="permanent" open={true} PaperProps={{
      style: { height: "auto", width: "16.183vw" } }}>
      <Box >
        <img alt={""} src={logo} style={{marginLeft: "1vw", marginTop: "2vh"}} width={24} height={24}/>
        <Typography sx={{display: "inline", color: "#0D062D", marginLeft: "1vw", top: "-1vh", position: "relative",
          fontFamily: "Inter, sans-serif", fontStyle: "normal", fontWeight: "600", fontSize: "1.25em",
          lineHeight: "1.5em"}}>DASHBOARD</Typography>
      </Box>
      <Typography sx={{marginBottom: "2.8vh", fontFamily: 'Inter, sans-serif',
        fontStyle: "normal", fontWeight: 500, fontSize: "1em",
        lineHeight: "1.1875em", color: "#492AB7", marginLeft: "3.7vw"}}>{role}</Typography>
      <Divider />
    </Drawer>
    <Toolbar
      sx={{
        pr: "24px", // keep right padding when drawer closed
      }}
    >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        // onClick={() => {toggleDrawer(open)}}
        sx={{
          marginRight: "36px",
          ...(open && {display: "none"}),
        }}
      >
        <MenuIcon />
      </IconButton>
      <Paper
        component="form"
        sx={{ p: '2px 4px', ml: "4vw", mt: "2.5vh", mb: "2.5vh", display: 'flex', alignItems: 'center', width: 400,
          backgroundColor: "#F5F5F5", borderRadius: "6px", boxShadow: "none" }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1, color: "#787486",
            fontFamily: 'Inter, sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "17px", }}
          placeholder="Search for anything..."
          inputProps={{ 'aria-label': 'search for anything' }}
        />
      </Paper>
      <Typography component="h1" variant="h6" color="inherit" align="right" noWrap sx={{flexGrow: 1, color: "black", mr: "1vw"}}>
        {/* eslint-disable-next-line react/prop-types */}
        {username}
      </Typography>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <InputLabel id="simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={settings}
        label="Settings"
        onChange={handleChange}
      >
        <MenuItem value={"Option 1"}>Option1</MenuItem>
        <MenuItem value={"Option 2"}>Option2</MenuItem>
        <MenuItem value={"Option 3"}>Option3</MenuItem>
      </Select>
    </Toolbar>
  </AppBar>
)};

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};