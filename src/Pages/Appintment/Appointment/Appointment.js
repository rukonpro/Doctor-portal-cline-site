import React from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import AppointmentAvailable from '../AppintmentAvailable/AppointmentAvailable';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <div>
            <Navigation />
            <AppointmentHeader date={date} setDate={setDate} />
            <AppointmentAvailable date={date} setDate={setDate} />
        </div>
    );
};

export default Appointment;