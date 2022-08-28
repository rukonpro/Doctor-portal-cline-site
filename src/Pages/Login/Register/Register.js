import { Alert, AlertTitle, Button, Chip, Container, Divider, Grid, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import GoogleIcon from '@mui/icons-material/Google';

import LoginImg from '../../../images/login.png'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Sheard/Footer/Footer';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError, signInWithGoogle } = useAuth();
    // const { loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }

    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.rePassword) {

            return alert('Your PassWord ded not match')

        }
        // console.log(loginData)
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault();
        e.target.reset();
    }
    return (
        <Box>
            <Navigation />

            <Container sx={{ paddingTop: '150px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} sx={{ mt: 5 }}>
                        <Paper sx={{ p: 5 }}>
                            <Typography variant='h4'>Register</Typography>
                            {
                                isLoading ? <LinearProgress /> :
                                    <form onSubmit={handleLoginSubmit}>
                                        <TextField
                                            fullWidth
                                            required
                                            id="standard-name-input"
                                            label="You Full Name"
                                            type="text"
                                            name="name"
                                            autoComplete="current-name"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                        /> <br />
                                        <TextField
                                            fullWidth
                                            required
                                            id="standard-email-input"
                                            label="You Email"
                                            type="email"
                                            name="email"
                                            autoComplete="current-email"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                        /> <br />
                                        <TextField
                                            fullWidth
                                            required
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                        />
                                        <TextField
                                            fullWidth
                                            required
                                            id="standard-password-input"
                                            label="Re-type Password"
                                            type="password"
                                            name="rePassword"
                                            autoComplete="current-password"
                                            variant="standard"
                                            onBlur={handleOnBlur}
                                        />
                                        <Button type="submit" sx={{ mt: 5 }} className="feature-button" fullWidth
                                            variant="contained">Login</Button>
                                    </form>
                            }
                            <br />
                            {isLoading ? <LinearProgress /> : <NavLink to='/login'>
                                <Button fullWidth >Already registered? Please Login</Button>
                            </NavLink>}
                            {
                                authError && <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {authError} <strong>check it out!</strong>
                                </Alert>
                            }
                            <Box sx={{ textAlign: 'center', pb: 2 }}>  <Divider > <Chip label="Or" /></Divider></Box>
                            <Button onClick={() => signInWithGoogle(location, history)} fullWidth variant="contained" ><GoogleIcon />oogle Sign In</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img style={{ width: '100%', height: 'auto' }} src={LoginImg} alt="" />
                    </Grid>

                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default Register;