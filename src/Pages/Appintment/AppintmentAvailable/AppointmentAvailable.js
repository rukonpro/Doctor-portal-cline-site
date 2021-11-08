import { Container, Grid, Typography, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';



const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 7.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 1
    },
]
const AppointmentAvailable = ({ date ,setDate}) => {



    const [bookingSuccess, setBookingSuccess,] = useState(false)

    return (
        <Container style={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight: '600', py: 4 }}>Appointment Available {date.toDateString()}</Typography>
            {bookingSuccess &&
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Appointment SuccessFully
                </Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={date}
                        setDate={setDate}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>

        </Container>
    );
};

export default AppointmentAvailable;