import { Container, Grid, Typography, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Booking from '../Booking/Booking';



const AppointmentAvailable = ({ date, setDate }) => {
    const [bookingSuccess, setBookingSuccess,] = useState(false);
    const [bookings, setBookings,] = useState([]);

    useEffect(() => {
        fetch("https://doctor-protal-server.onrender.com/bookings")
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => console.log(err))
    }, [])






    return (
        <Container style={{ textAlign: 'center', paddingBottom: "100px" }}>
            <Typography variant="h4" sx={{ color: 'info.main', fontWeight: '600', py: 4 }}>Appointment Available {date.toDateString()}</Typography>
            {bookingSuccess &&
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Appointment SuccessFully
                </Alert>}


            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking?.id}
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