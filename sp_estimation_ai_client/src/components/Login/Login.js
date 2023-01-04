import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const userTypes = [
  {
    label: 'Salesperson'
  },
  {
    label: 'Estimator'
  },
  {
    label: 'Estimation Reviewer'
  },
];

export default function SignIn() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if ((data.get('email') === 'abc@gmail.com') && (data.get('password') === 'abcdef')){
      navigate("/dashboard")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h3" sx={{color: '#224957', marginTop: '5vh'}}>
            Sign in
          </Typography>
          <Typography component="h1" variant="h6" sx={{color: '#224957', marginTop: '4vh'}}>
            Sign in and start managing your Projects!
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              color={'info'}
              margin="normal"
              select
              fullWidth
              id="email"
              label="Select user type"
              name="userType"
              autoComplete="userType"
              autoFocus
              sx={{backgroundColor: '#224957', input: { color: '#fff' }, borderRadius: 3.5 }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            >
              {userTypes.map((option) => (
                <MenuItem key={option.label} value={option.label}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              color={'info'}
              margin="normal"
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{backgroundColor: '#224957', input: { color: '#fff' }, borderRadius: 3.5 }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{backgroundColor: '#224957', input: { color: '#fff' }, borderRadius: 3.5  }}
              InputLabelProps={{
                style: { color: '#fff' },
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="info" />}
              sx={{color: '#224957'}}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#20df7f', color: '#224957', borderRadius: 3.5  }}
            >
              Login
            </Button>
            <Container>
                <Link href="#" variant="body2" sx={{color: '#224957', textDecoration: 'none'}}>
                  Forgot password?
                </Link>
            </Container>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}