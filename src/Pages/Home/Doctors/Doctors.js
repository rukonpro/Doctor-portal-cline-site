import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://limitless-shore-42333.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div style={{ textAlign: "center" }}>
            <Typography variant='h4'>
                Our Doctors {doctors?.length}
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    doctors.map(doctor =>
                        <Grid item xs={12} sm={4} md={4} key={doctor._id}>
                            <Box key={doctor._id}>
                                <img style={{ width: '300px' }} src={`data:image/png;base64,${doctor.image}`} alt='' />
                                <Typography variant='h5'>
                                    {doctor.name}
                                </Typography>
                                <Typography variant='h6'>
                                    {doctor.email}
                                </Typography>
                            </Box>
                        </Grid>
                    )
                }
            </Grid>

        </div>
    );
};

export default Doctors;


