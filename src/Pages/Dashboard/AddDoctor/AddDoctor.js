import { Button, Input, Paper, TextField, Typography, Box, Container } from '@mui/material';

import React, { useState } from 'react';
import axios from "axios";

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState(null)



    const imgUpload = img => {
        let body = new FormData();
        body.set('key', '7f01c6e5ffb1ca09145f331bec070d87');
        body.append('image', img);

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body
        });
    };
    const handleImgUpload = img => {

        imgUpload(img)
            .then(res => {

                setImage(res.data.data.url)

            })
    }




    const formData = { name, phone, image };
    const phoneNo = "(?:\\+88|88)?(01[3-9]\\d{8})";

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        if (phone.match(phoneNo)) {
        } else {
            alert("Pleas input valid number")
            return
        }



        axios.post("https://doctor-protal-server.onrender.com/doctors", formData)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Doctor upload successfully")
                }
            }).catch(err => {
                if (err) {
                    alert("Uploaded Error")
                }
            })

        e.target.reset()
    }



    return (

        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>

            <Paper sx={{ maxWidth: 400, maxHeight: 500, p: 5 }}>
                <Typography variant="h4">
                    Add Doctor
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        required
                        onChange={e => setName(e.target.value)}
                        type="name"
                        label="Name"
                        variant="standard" /> <br />
                    <TextField
                        fullWidth

                        onChange={e => setPhone(e.target.value)}
                        type="number"
                        required
                        label="Phone"
                        variant="standard" /> <br />


                    <Input
                        fullWidth
                        accept="image/*"
                        type="file"
                        onChange={e => handleImgUpload(e.target.files[0])}

                    /> <br /> <br />
                    <Button
                        fullWidth

                        variant="contained"
                        type='submit'

                    >
                        Submit
                    </Button>
                </form>
            </Paper>

        </Container>
    );
};

export default AddDoctor;