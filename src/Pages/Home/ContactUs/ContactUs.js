import React, { useRef } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import './ContactUs.css'
const ContactUs = () => {
    const form = useRef();
    const handlerSendMassage = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zdrtp9b', 'template_n1ub0zc', form.current, 'user_sMNanZ38ggdHIXPN6PNqZ')
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            alert("Send massage success")
    }

    return (
        <Box className="contact-us-container">

            <Container

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


                <form ref={form} onSubmit={handlerSendMassage}>
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        type='name'
                        placeholder="Name"
                        id="outlined-size-small"
                        size="small"
                    />
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        type='email'
                        placeholder="Email"
                        id="outlined-size-small"
                        size="small"
                    />
                    <TextField
                        sx={{
                            backgroundColor: 'white',
                            borderStyle: 'none',
                            borderRadius: 1
                        }}
                        required
                        type="text"
                        id="outlined-size-small"
                        defaultValue="Subject"
                        placeholder="Subject"
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
                        multiline
                        type="text"
                        rows={4}
                        defaultValue="Your Massage"
                    />
                    <br />

                    <Button variant="contained" type="submit" sx={{ my: 2, color: 'white' }} className="feature-button">Send Massage</Button>

                </form>

            </Container>
        </Box>
    );
};

export default ContactUs;