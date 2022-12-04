import { Alert, Button, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { idToken } = useAuth();
    const emailOnBlur = (e) => setEmail(e.target.value);

    const handleAddAdmin = (e) => {
        const user = { email }
        fetch('https://doctor-protal-server.onrender.com/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
        e.target.reset()
        e.preventDefault()
    }
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <Paper sx={{ maxWidth: 400, p: 10 }}>
                <Typography sx={{ textAlign: "center" }} variant="h4">
                    Make Admin
                </Typography>

                {
                    success &&
                    <Alert severity="success">Admin add Success</Alert>
                }

                <form onSubmit={handleAddAdmin}>
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        onBlur={emailOnBlur}
                        variant="standard" />
                    <br />
                    <Button type='submit' sx={{ mt: 2 }} fullWidth variant="contained">Add Admin</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default MakeAdmin;