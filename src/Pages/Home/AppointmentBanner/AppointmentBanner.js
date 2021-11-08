import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png'
import { Button, CardMedia, Typography } from '@mui/material';
import './AppointmentBanner.css'

const AppointmentBanner = () => {

    return (
        <Box className='AppointmentBg' sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'center' }} >
                    <CardMedia
                        component="img"
                        style={{ width: 360, marginTop: -120 }}
                        image={Doctor}
                        alt="green iguana"
                    />
                </Grid>
                <Grid sx={{ justifyContent: 'flex-start', alignItems: 'center' }} item xs={12} md={6}>
                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <Box>
                            <Typography gutterBottom variant="h6" component="div"
                                sx={{ fontWeight: "bold", p: 2 }}
                                color="rgb(0, 255, 195)">
                                Appointment
                            </Typography>
                            <Typography gutterBottom variant="h3" component="div"
                                sx={{ fontWeight: "bold", p: 2 }}
                                style={{ color: 'white' }}>
                                Mak an appointment Today
                            </Typography>
                            <Typography gutterBottom variant="p" component="div"
                                sx={{ p: 2 }}
                                style={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eos.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eos.
                            </Typography >
                            <Box sx={{ p: 2 }}>
                                <Button className="feature-button" sx={{ color: 'white' }} variant="contained">LEARN MORE</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );

};

export default AppointmentBanner;

