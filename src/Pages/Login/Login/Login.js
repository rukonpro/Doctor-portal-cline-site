import { Alert, AlertTitle, Button, Chip, Container, Divider, Grid, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import LoginImg from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import Footer from '../../Sheard/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, signInWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const login = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = (e) => {
        // console.log(loginData)
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
        e.target.reset();
    }

    return (
        <Box>
            <Navigation />

            <Container sx={{ paddingTop: '150px' }}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6} sx={{ mt: 5 }}>
                        <Paper sx={{ p: 5 }}>
                            <Typography variant='h4'>Login</Typography>
                            {
                                isLoading ? <LinearProgress /> :
                                    <form onSubmit={handleLoginSubmit}>
                                        <TextField
                                            sx={{ width: 1 }}
                                            required
                                            id="standard-password-email"
                                            label="You Email"
                                            type="email"
                                            name="email"
                                            autoComplete="current-email"
                                            variant="standard"
                                            onChange={login}
                                        /> <br />
                                        <TextField
                                            sx={{ width: 1 }}
                                            required
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            onChange={login}
                                        />
                                        <Button type="submit" sx={{ mt: 5 }} fullWidth className="feature-button" variant="contained">Login</Button>

                                    </form>
                            }
                            <br />
                            {isLoading ? <LinearProgress /> : <NavLink to='/register'><Button fullWidth>New User? Please Register</Button></NavLink>}
                            {authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError} <strong>check it out!</strong>
                            </Alert>}

                            <Box sx={{ textAlign: 'center', pb: 2 }}>  <Divider > <Chip label="Or" /></Divider></Box>
                            <Button onClick={() => signInWithGoogle(location, history)} variant="contained" fullWidth><GoogleIcon />oogle Sign In</Button>

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

export default Login;