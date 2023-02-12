import * as React from 'react';
import EstimatorSidebar from '../EstimatorSidebar'
import Box from "@mui/material/Box";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import Navbar from "../Navbar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {useNavigate, useLocation} from 'react-router-dom'
import PendingTasks from "../PendingTasks";
import ReviewedTasks from "../ReviewedTasks";
import {useEffect, useState} from "react";

const mdTheme = createTheme();

const filterOptions = ['Filter', 'Squash and merge', 'Rebase and merge'];
const date_options = ['Today', 'Squash and merge', 'Rebase and merge'];

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");
  let component;
  if (status === "rejected") {
    component = <ReviewedTasks status="Rejected"/>;
  } else if (status === "pending") {
    component = <PendingTasks />;
  } else {
    component = <ReviewedTasks status="Approved"/>;
  }
  // console.log("status = ", status)

  const handleClick = () => {
    console.info(`You clicked ${filterOptions[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const newEstimate = () => {
    navigate("/new-estimate")
  }

  // Card code
  const bull = (
    <Box
      component="span"
      sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
      •
    </Box>
  );

  const todo_bull = (
    <Box
      component="span"
      sx={{
        display: 'inline-block', mx: '2px', transform: 'scale(1.3)',
        color: "rgb(121,35,199)"
      }}
    >
      •
    </Box>
  );

  const inprogress_bull = (
    <Box
      component="span"
      sx={{
        display: 'inline-block', mx: '2px', transform: 'scale(1.3)',
        color: "rgb(250,170,2)"
      }}
    >
      •
    </Box>
  );

  const done_bull = (
    <Box
      component="span"
      sx={{
        display: 'inline-block', mx: '2px', transform: 'scale(1.3)',
        color: "rgb(151,250,2)"
      }}
    >
      •
    </Box>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{display: "flex"}}>
        <CssBaseline/>
        <Navbar>John Carmack</Navbar>
        <EstimatorSidebar/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[100] :
                theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar/>
          <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Grid container spacing={3}>
              <Typography sx={{paddingLeft: 3, paddingTop: 3}} component="h1"
                          variant="h4" color="inherit">Grocery
                Store</Typography>
              <Grid item xs={12} md={8} lg={12}>
                {/*<ButtonGroup variant="outlined" ref={anchorRef}*/}
                {/*             sx={{marginRight: 1}} aria-label="split button">*/}
                {/*  <Button*/}
                {/*    onClick={handleClick}>{filterOptions[selectedIndex]}</Button>*/}
                {/*  <Button*/}
                {/*    size="small"*/}
                {/*    aria-controls={open ? 'split-button-menu' : undefined}*/}
                {/*    aria-expanded={open ? 'true' : undefined}*/}
                {/*    aria-label="select merge strategy"*/}
                {/*    aria-haspopup="menu"*/}
                {/*    onClick={handleToggle}*/}
                {/*  >*/}
                {/*    <ArrowDropDownIcon/>*/}
                {/*  </Button>*/}
                {/*</ButtonGroup>*/}
                {/*<Popper*/}
                {/*  sx={{*/}
                {/*    zIndex: 1,*/}
                {/*  }}*/}
                {/*  open={open}*/}
                {/*  anchorEl={anchorRef.current}*/}
                {/*  role={undefined}*/}
                {/*  transition*/}
                {/*  disablePortal*/}
                {/*>*/}
                {/*  {({TransitionProps, placement}) => (*/}
                {/*    <Grow*/}
                {/*      {...TransitionProps}*/}
                {/*      style={{*/}
                {/*        transformOrigin:*/}
                {/*          placement === 'bottom' ? 'center top' :*/}
                {/*            'center bottom',*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      <Paper>*/}
                {/*        <ClickAwayListener onClickAway={handleClose}>*/}
                {/*          <MenuList id="split-button-menu" autoFocusItem>*/}
                {/*            {filterOptions.map((option, index) => (*/}
                {/*              <MenuItem*/}
                {/*                key={option}*/}
                {/*                disabled={index === 2}*/}
                {/*                selected={index === selectedIndex}*/}
                {/*                onClick={(event) => handleMenuItemClick(event,*/}
                {/*                  index)}*/}
                {/*              >*/}
                {/*                {option}*/}
                {/*              </MenuItem>*/}
                {/*            ))}*/}
                {/*          </MenuList>*/}
                {/*        </ClickAwayListener>*/}
                {/*      </Paper>*/}
                {/*    </Grow>*/}
                {/*  )}*/}
                {/*</Popper>*/}
                {/*<ButtonGroup variant="outlined" ref={anchorRef}*/}
                {/*             aria-label="split button">*/}
                {/*  <Button*/}
                {/*    onClick={handleClick}>{date_options[selectedIndex]}</Button>*/}
                {/*  <Button*/}
                {/*    size="small"*/}
                {/*    aria-controls={open ? 'split-button-menu' : undefined}*/}
                {/*    aria-expanded={open ? 'true' : undefined}*/}
                {/*    aria-label="select merge strategy"*/}
                {/*    aria-haspopup="menu"*/}
                {/*    onClick={handleToggle}*/}
                {/*  >*/}
                {/*    <ArrowDropDownIcon/>*/}
                {/*  </Button>*/}
                {/*</ButtonGroup>*/}
                {/*<Popper sx={{*/}
                {/*  zIndex: 1,*/}
                {/*}} open={open} anchorEl={anchorRef.current} role={undefined}*/}
                {/*        transition disablePortal>*/}
                {/*  {({TransitionProps, placement}) => (*/}
                {/*    <Grow*/}
                {/*      {...TransitionProps}*/}
                {/*      style={{*/}
                {/*        transformOrigin:*/}
                {/*          placement === 'bottom' ? 'center top' :*/}
                {/*            'center bottom',*/}
                {/*      }}*/}
                {/*    >*/}
                {/*      <Paper>*/}
                {/*        <ClickAwayListener onClickAway={handleClose}>*/}
                {/*          <MenuList id="split-button-menu" autoFocusItem>*/}
                {/*            {date_options.map((option, index) => (*/}
                {/*              <MenuItem*/}
                {/*                key={option}*/}
                {/*                disabled={index === 2}*/}
                {/*                selected={index === selectedIndex}*/}
                {/*                onClick={(event) => handleMenuItemClick(event,*/}
                {/*                  index)}*/}
                {/*              >*/}
                {/*                {option}*/}
                {/*              </MenuItem>*/}
                {/*            ))}*/}
                {/*          </MenuList>*/}
                {/*        </ClickAwayListener>*/}
                {/*      </Paper>*/}
                {/*    </Grow>*/}
                {/*  )}*/}
                {/*</Popper>*/}

                {/*<Button variant="text" sx={{float: "right"}}>View 2</Button>*/}
                {/*<Button variant="text" sx={{float: "right", marginLeft: 1}}>View*/}
                {/*  1</Button>*/}
                {/*<Divider orientation="vertical"*/}
                {/*         sx={{display: "inline", float: "right"}}/>*/}
                <Button variant="outlined"
                        sx={{float: "right", marginRight: 2}}>Share</Button>
                {/*<ButtonGroup variant="outlined" ref={anchorRef} sx={{float: "right", marginRight: 2}} aria-label="split button">*/}
                {/*  <Button onClick={handleClick}>{shareOptions[selectedIndex]}</Button>*/}
                {/*  <Button size="small" aria-controls={open ? 'split-button-menu' : undefined}*/}
                {/*          aria-expanded={open ? 'true' : undefined} aria-label="select merge strategy"*/}
                {/*          aria-haspopup="menu" onClick={handleToggle}>*/}
                {/*    <ArrowDropDownIcon />*/}
                {/*  </Button>*/}
                {/*</ButtonGroup>*/}
                <Button variant="outlined" sx={{float: "right", marginRight: 2}}
                        onClick={newEstimate}>New Estimate</Button>
                <Popper sx={{
                  zIndex: 1,
                }} open={open} anchorEl={anchorRef.current} role={undefined}
                        transition disablePortal>
                  {({TransitionProps, placement}) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom' ? 'center top' :
                            'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu" autoFocusItem>
                            {filterOptions.map((option, index) => (
                              <MenuItem
                                key={option}
                                disabled={index === 2}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event,
                                  index)}
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Grid>
              <Paper sx={{marginTop: "5%", width: 1}}>
                {component}

              </Paper>
              {/* Chart */}
              {/*<Grid item xs={12} md={8} lg={12}>*/}
              {/*  <Box sx={{p: 2, display: "flex", justifyContent: "space-between"}}>*/}
              {/*    <Paper sx={{p: 2, display: "flex", flexDirection: "column", width: 1/3.1, maxWidth: 1}}>*/}
              {/*      <Typography component="h1" variant="h6">{todo_bull} To Do</Typography>*/}
              {/*      <Divider sx={{marginTop: 1, marginBottom: 3, border: "4px solid rgb(138,43,226)"}}/>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*    </Paper>*/}
              {/*    <Paper sx={{p: 2, display: "flex", flexDirection: "column", width: 1/3.1, maxWidth: 1}}>*/}
              {/*      <Typography component="h1" variant="h6">{inprogress_bull} In Progress</Typography>*/}
              {/*      <Divider sx={{marginTop: 1, marginBottom: 3, border: "4px solid rgb(250,170,2)"}}/>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*    </Paper>*/}
              {/*    <Paper sx={{p: 2, display: "flex", flexDirection: "column", width: 1/3.1, maxWidth: 1}}>*/}
              {/*      <Typography component="h1" variant="h6">{done_bull} Done</Typography>*/}
              {/*      <Divider sx={{marginTop: 1, marginBottom: 3, border: "4px solid rgb(151,250,2)"}}/>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*      <Card variant="outlined">{card}</Card>*/}
              {/*    </Paper>*/}
              {/*  </Box>*/}
              {/*</Grid>*/}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
