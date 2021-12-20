import { Alert, AlertTitle, Button, Container, Grid, LinearProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import LoginImg from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();
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
                        {
                            isLoading ? <LinearProgress /> :
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        sx={{ width: 1 }}
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
                                        sx={{ width: 1 }}
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
                                        sx={{ width: 1 }}
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
                                        sx={{ width: 1 }}
                                        required
                                        id="standard-password-input"
                                        label="Re-type Password"
                                        type="password"
                                        name="rePassword"
                                        autoComplete="current-password"
                                        variant="standard"
                                        onBlur={handleOnBlur}
                                    />
                                    <Button type="submit" sx={{ mt: 5 }} className="feature-button" variant="contained">Login</Button>
                                </form>
                        }
                        {isLoading ? <LinearProgress /> : <NavLink to='/login'>
                            <Button>Already registered? Please Login</Button>
                        </NavLink>}
                        {
                            authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError} <strong>check it out!</strong>
                            </Alert>
                        }

                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img style={{ width: '100%', height: 'auto' }} src={LoginImg} alt="" />
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
};

export default Register;