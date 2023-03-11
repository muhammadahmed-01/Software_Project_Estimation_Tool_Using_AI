import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MuiAlert from "@mui/material/Alert";
import Navbar from "./Navbar";
import Toolbar from "@mui/material/Toolbar";
import { Divider } from "@mui/material";
import SubTask from "../components/SubTask";
import "./nesting.css"
import { css } from "@emotion/react";
// import { ChatGPTAPI } from 'chatgpt'

// async function example() {
//   const api = new ChatGPTAPI({
//     apiKey: process.env.OPENAI_API_KEY
//   })
//
//   const res = await api.sendMessage('Hello World!')
//   console.log(res.text)
// }
export default function EstimateForm() {
  const [error, setError] = useState("");
  const [task_name, setTaskName] = useState("");
  const [gridList, setGridList] = useState([]);
  const [gridCount, setGridCount] = useState(1);

  const onCreateAnotherSubtaskClick = (index, subtasks) => {
    const newSubtasks = [...subtasks];
    newSubtasks.splice(index + 1, 0, {
      subtask_name: "",
      subtask_skill: "",
      subtask_complexity: "",
      subtask_estimated_time: "",
      subtasks: []
    });
    return newSubtasks;
  };


  const handleAddGrid = () => {
    const grids = Array.from({ length: gridCount }, (_, index) => (
      <SubTask index={index}
               task_name={task_name}
               onCreateAnotherSubtaskClick={onCreateAnotherSubtaskClick}
               subtasks={[]}
      />
    ));

    setGridList(grids);
    setGridCount(gridCount + 1);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function onChangeTaskName(e) {
    setTaskName(e.target.value);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar role={"Estimator"} username={"John Carmack"} />
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
        <Container sx={{ mt: 4, mb: 4 }} maxWidth={"xl"}>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Grid container spacing={3} sx={{ flexDirection: "column" }}>
            <Typography sx={{
              paddingLeft: 3, paddingTop: 3,
              fontFamily: "Inter, sans-serif", fontStyle: "normal",
              fontWeight: 600, fontSize: "46px", lineHeight: "56px",
              textTransform: "capitalize"
            }} component="h1"
                        variant="h4" color="inherit">
              Grocery Store
            </Typography>
            <Grid item xs={2} md={2} lg={2}>
              <TextField
                required
                id="task_name"
                label="Task name"
                name="task_name"
                autoComplete="task_name"
                value={task_name}
                onChange={onChangeTaskName}
              />
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
              <Button variant={"contained"}
                      sx={{
                        backgroundColor: "#0048D9",
                        color: "white"
                      }}
                      onClick={handleAddGrid}
                      disabled={task_name.length === 0}
                >
                Create subtask
              </Button>
            </Grid>
            <Divider sx={{ mt: "4vh", width: "101%" }} />
            <Grid item xs={16} md={8} lg={12} sx={{ marginLeft: "12vw" }}>
              <form noValidate style={{ }}>
                {gridList.map((grid, index) => (
                  <div key={index}>
                    {grid}
                  </div>
                ))}
              </form>
            </Grid>
            <Divider sx={{ mt: "4vh", width: "101%" }} />
            <Button sx={{
              textTransform: "capitalize",
              background: "#0048D9", borderRadius: "6px",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "1em",
              color: "#FFFFFF",
              width: "6vw",
              mt: "2vh",
              ml: "2vw",
              p: ["4px 16px 4px 16px"]
            }}>Submit</Button>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}