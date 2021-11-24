import { Button, Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)


    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);


        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor added success ')

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset()
    }



    return (

        <Box sx={{ textAlign: 'center' }}>

            <Typography variant="h4">
                Add Doctor
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: "50%" }}
                    required
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    variant="standard" /> <br />
                <TextField
                    sx={{ width: "50%" }}
                    onChange={e => setEmail(e.target.value)}

                    required
                    label="Email"
                    variant="standard" /> <br />


                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    sx={{ width: "50%" }}
                /> <br /> <br />
                <Button
                    variant="contained"
                    type='submit'

                    sx={{ width: "50%" }}>
                    Submit
                </Button>
            </form>

        </Box>
    );
};

export default AddDoctor;