import React, {useState, useEffect} from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import MuiAlert from '@mui/material/Alert'
import EDService from "../service/estimation.service"

const theme = createTheme()

export default function SignUp() {
  const [error, setError] = useState("")
  const [skill, setSkill] = useState(0)
  const [complexity, setComplexity] = useState(0)
  const [task_name, setTaskName] = useState("")
  const [subtask_name, setSubTaskName] = useState("")
  const [estimate_time, setEstimateTime] = useState("")

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function onChangeSkill(e){
    setSkill(e.target.value)
  }

  function onChangeComplexity(e){
    setComplexity(e.target.value)
  }

  function onChangeTaskName(e){
    setTaskName(e.target.value)
  }

  function onChangeSubTaskName(e){
    setSubTaskName(e.target.value)
  }

  function onChangeEstimateTime(e){
    setEstimateTime(e.target.value)
  }

  function getEstimations(){
    let data = {
      skill: skill,
      complexity: complexity,
      task_name: task_name,
      subtask_name: subtask_name
    }
    EDService.getEstimation(data)
      .then(response => {
        console.log("response = " + JSON.stringify(response.data))
        setEstimateTime(response.data)
    }).catch(e => {
      console.log(e);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            New Estimate
          </Typography>
          <form noValidate style={{marginTop: 18}}>
            {error && < Alert severity="error" sx={{mb: 4}}>{error}</Alert>}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="task_name"
                  label="Task name"
                  name="task_name"
                  autoComplete="task_name"
                  onChange={onChangeTaskName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="subtask_name"
                  label="Subtask name"
                  autoComplete="subtask_name"
                  id="standard-adornment-password"
                  type="text"
                  variant="outlined"
                  onChange={onChangeSubTaskName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="skillLevel"
                  required
                  fullWidth
                  id="skillLevel"
                  label="Recommended Skill level"
                  name="skillLevel"
                  onChange={onChangeSkill}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="complexityLevel"
                  label="Task Complexity Level"
                  name="complexityLevel"
                  autoComplete="complexityLevel"
                  onChange={onChangeComplexity}
                  onBlur={getEstimations}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="estimateTime"
                  label="Estimated Time Required"
                  name="estimateTime"
                  autoComplete="estimateTime"
                  value={estimate_time}
                  onChange={onChangeEstimateTime}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
              Create Estimate
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}