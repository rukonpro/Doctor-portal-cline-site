import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import Calendar from '../../Sheard/Calendar/Calendar';
const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Box sx={{ pt:10}}>
            <Typography variant="h4" sx={{ textAlign: 'center', py: 5, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                Appointment
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar data={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={chair} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;