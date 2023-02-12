import React, {useState, useEffect} from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import MuiAlert from '@mui/material/Alert'

const theme = createTheme()

export default function SignUp() {
  const [error, setError] = useState("")

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            New Requirements Document
          </Typography>
        </Box>
        <form noValidate style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {error && < Alert severity="error" sx={{mb: 4}}>{error}</Alert>}
          <TextField
            multiline
            minRows={5}
            maxRows={50}
            required
            fullWidth
            id="requirements"
            label="Enter Requirements"
            name="requirements"/>
          <Button type="submit" fullWidth variant="contained"
                  sx={{mt: 3, mb: 2}}>
            Create Requirements Document
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
}