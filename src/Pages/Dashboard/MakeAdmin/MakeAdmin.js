import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { idToken } = useAuth();
    const emailOnBlur = (e) => setEmail(e.target.value);

    const handleAddAdmin = (e) => {
        const user = { email }
        fetch('https://limitless-shore-42333.herokuapp.com/users/admin', {
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
        <Container>
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
                    onBlur={emailOnBlur}
                    variant="standard" />
                <Button type='submit' variant="contained">Add Admin</Button>
            </form>
        </Container>
    );
};

export default MakeAdmin;