import React from 'react';
import './ContactUs.css'
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ContactUs = () => {

    const handleSendMassage = (e) => {
        e.preventDefault();
    }
    return (
        <Box className="contact-us-container">
            <Container
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                    textAlign: 'center'
                }}
                noValidate
                autoComplete="off"
            >

                <Typography sx={{ color: 'rgb(0, 255, 195)', py: 2 }} variant="h5">
                    Contact
                </Typography>
                <Typography sx={{ color: '#fff', pb: 2 }} variant="h4">
                    Always Connect with us
                </Typography>
                <form onSubmit={handleSendMassage}>
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        placeholder="Email"
                        id="outlined-size-small"
                        // defaultValue="Email"
                        size="small"
                    />
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        // label="Subject"
                        id="outlined-size-small"
                        // defaultValue="Subject"
                        size="small"
                    />
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        id="outlined-multiline-static"
                        // label="Massage"
                        multiline
                        rows={4}
                        defaultValue="Your Massage"
                    />
                    <br />

                    <Button variant="contained" type="submit" sx={{ my: 2, color: 'white' }} className="feature-button">SUBMIT</Button>

                </form>

            </Container>
        </Box>
    );
};

export default ContactUs;