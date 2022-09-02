import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';
import Draggable from "react-draggable";

const Booking = ({ booking, date, setDate, setBookingSuccess }) => {
    const { name, time, price, space, _id, dragElement } = booking;


    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpenModal = () => setBookingOpen(true);
    const handleBookingCloseModal = () => setBookingOpen(false);


    const [id, setId] = useState("");
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleChangeId = (id) => {
        setId(id);

    }
    const handleStop = async (event, dragElement) => {
        setX(dragElement.x)
        setY(dragElement.y)
    };
    useEffect(() => {

        try {
            fetch(`https://limitless-shore-42333.herokuapp.com/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ x: x, y: y }),
            })

        } catch (error) {
            console.log(error)
        }
    }, [id, x, y])


    return (
        <>
            <Grid item xs={12} sm={6} md={4} onClick={() => handleChangeId(_id)} >
                <Draggable
                    onStop={handleStop}
                    defaultPosition={{ x: dragElement?.x, y: dragElement?.y }}
                >
                    <Paper sx={{ p: 5 }} elevation={3} >
                        <Typography sx={{ color: 'secondary.main', fontWeight: '600' }} variant='h5' gutterBottom component='div'>
                            {name}
                        </Typography>
                        <Typography sx={{ color: 'warning.main' }} variant='h6' gutterBottom component='div'>
                            {time}
                        </Typography>
                        <Typography sx={{ color: 'info.main' }} variant='caption' display="block" gutterBottom component='div'>
                            ${space} SPACE AVAILABLE
                        </Typography>
                        <Typography sx={{ color: 'info.main' }} variant='caption' display="block" gutterBottom component='div'>
                            Price:  {price}
                        </Typography>
                        <Button onClick={handleBookingOpenModal} variant="contained">Booking Appointment</Button>
                    </Paper>
                </Draggable>
            </Grid>

            <BookingModal
                date={date}
                setDate={setDate}
                bookingOpen={bookingOpen}
                handleBookingCloseModal={handleBookingCloseModal}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>
    )

}

export default Booking;