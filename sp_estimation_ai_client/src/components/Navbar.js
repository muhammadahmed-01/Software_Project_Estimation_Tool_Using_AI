import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {Avatar, InputBase, InputLabel, Paper, Select} from "@mui/material";
// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators } from "../state";
// import { bindActionCreators } from "redux";

import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 250;

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

export default function Navbar(props) {
  // const open = useSelector(state => state.state)
  // const dispatch = useDispatch();
  // const { toggleDrawer } = bindActionCreators(actionCreators, dispatch);
  const [settings, setSettings] = React.useState('');

  const handleChange = (event) => {
    setSettings(event.target.value);
  };

  return (
  <AppBar position="absolute" open={open}>
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
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for anything..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
      </Paper>
      <Typography component="h1" variant="h6" color="inherit" align="right" noWrap sx={{flexGrow: 1}}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
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