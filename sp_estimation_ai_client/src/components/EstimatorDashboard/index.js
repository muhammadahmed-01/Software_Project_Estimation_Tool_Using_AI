import * as React from "react";
import EstimatorSidebar from "../Sidebar/EstimatorSidebar";
import Box from "@mui/material/Box";
import {
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography
} from "@mui/material";
import Navbar from "../Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useNavigate, useLocation } from "react-router-dom";
import EstimatorTasks from "../EstimatorTasks";

const mdTheme = createTheme();

const filterOptions = ["Filter", "Squash and merge", "Rebase and merge"];

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");
  const estimator = 1;
  const projectID = 1;
  const projectName = null;
  let component;
  if (status === "rejected") {
    component = <EstimatorTasks status="rejected" hideComment={false}
                                estimator={estimator} project={projectID} />;
  } else if (status === "pending") {
    component = <EstimatorTasks status="pending" hideComment={true}
                                estimator={estimator} project={projectID} />;
  } else {
    component = <EstimatorTasks status="approved" hideComment={false}
                                estimator={estimator} project={projectID} />;
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const newEstimate = () => {
    navigate("/new-estimate");
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar username={"John Carmack"} role={"Estimator"} />
        <EstimatorSidebar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[100] :
                theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* {error && <Alert variant="danger">{error}</Alert>} */}
            <Grid container spacing={3}>
              <Typography sx={{ paddingLeft: 3, paddingTop: 3 }} component="h1"
                          variant="h4" color="inherit">
                Grocery Store
              </Typography>
              <Grid item xs={12} md={8} lg={12}>
                <Button variant="outlined"
                        sx={{ float: "right", marginRight: 2 }}>Share</Button>
                <Button variant="outlined" sx={{ float: "right", marginRight: 2 }}
                        onClick={newEstimate}>New Estimate</Button>
                <Popper sx={{
                  zIndex: 1
                }} open={open} anchorEl={anchorRef.current} role={undefined}
                        transition disablePortal>
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom" ? "center top" :
                            "center bottom"
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
              <Paper sx={{ marginTop: "5%", width: 1 }}>
                {component}
              </Paper>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
