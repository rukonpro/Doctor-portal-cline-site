import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const BookingModal = ({ bookingOpen, handleBookingCloseModal, booking, date, setBookingSuccess }) => {

    const { user } = useAuth();
    const { name, time, price } = booking;
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        console.log(newInfo)
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }
    const handleBooking = (e) => {

        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }

        // send to the server 
        fetch('https://limitless-shore-42333.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingCloseModal()
                }
            })


        e.preventDefault()

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Box>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={bookingOpen}
                onClose={handleBookingCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={bookingOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name} Booking
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <form onSubmit={handleBooking}>

                                <TextField
                                    disabled
                                    label="Time"
                                    id="outlined-size-small"
                                    defaultValue={time}
                                    size="small"
                                    sx={{ m: 1, width: "100%" }}
                                />
                                <TextField
                                    label="Full Name"
                                    id="outlined-size-small"
                                    name="patientName"
                                    defaultValue={user.displayName}
                                    onBlur={handleOnBlur}
                                    size="small"
                                    sx={{ m: 1, width: "100%" }}
                                />
                                <TextField
                                    label="Email"
                                    id="outlined-size-small"
                                    name="email"
                                    defaultValue={user.email}
                                    onBlur={handleOnBlur}
                                    size="small"
                                    sx={{ m: 1, width: "100%" }}
                                />
                                <TextField
                                    label="Phone Number"
                                    id="outlined-size-small"
                                    name="phone"
                                    placeholder="Phone Number"
                                    onBlur={handleOnBlur}
                                    size="small"
                                    sx={{ m: 1, width: "100%" }}
                                />
                                <TextField
                                    disabled
                                    label="Booking Date"
                                    id="outlined-size-small"
                                    defaultValue={date.toDateString()}
                                    size="small"
                                    sx={{ m: 1, width: "100%" }}
                                />
                                <Button
                                    type="submit"
                                    sx={{ m: 1, width: "100%" }}
                                    variant="contained"
                                    size="small">
                                    Booking
                                </Button>

                            </form>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default BookingModal;