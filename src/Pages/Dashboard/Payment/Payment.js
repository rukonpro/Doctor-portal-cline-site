import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JvmPyA4Jg6P5Oezrr9MmMELIkmsaCySwhusfHqQvznLWS6riF1CCRYkAN9xwPYEKafHwmo4b87CW84XuodtcIQs00g3WazSk1');
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://doctor-protal-server.onrender.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h1>Please pay for {appointment.patientName} for {appointment.serviceName}</h1>
            <h3>Pay: ${appointment.price}</h3>

            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckOutFrom appointment={appointment} />
                </Elements>}
        </div>
    );
};

export default Payment;