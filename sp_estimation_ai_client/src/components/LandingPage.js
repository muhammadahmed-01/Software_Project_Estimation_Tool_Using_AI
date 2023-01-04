import logo from '../landingPage.png';
import { Container, Button, Link } from '@mui/material';
import React from 'react';

const styles = {
    paperContainer: {
        backgroundImage: `url(${logo})`
    }
};

export default function LandingPage(){
  return (
    <Container sx={{minHeight: '100vh'}} maxWidth={false} style={styles.paperContainer}>
        <Link href="/Login">
            <Button sx={{marginTop: '80vh', marginLeft: '40vh',
              minWidth: '40vh', maxWidth: '40vh', minHeight: '6vh',
              backgroundColor: "#4ce598"}} variant="contained">Login</Button>
        </Link>
    </Container>
  );
}