import React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Sheard/Calendar/Calendar';
import Appointments from '../Appointments/Appointnments';
const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={12} md={6}>
                <Calendar date={date} setDate={setDate}></Calendar>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Appointments date={date}></Appointments>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;