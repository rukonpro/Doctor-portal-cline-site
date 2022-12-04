import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Skeleton, Container, CardActionArea, Card, CardMedia, CardContent } from '@mui/material';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://doctor-protal-server.onrender.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Container sx={{ textAlign: "center", py: 10 }}>


            <Typography variant='h4' sx={{ color: 'rgb(0, 255, 195)', pb: 10, fontWeight: 'bold' }}>
                Our Doctors
            </Typography>




            {!doctors.length ? <SkeletonChildrenDemo /> : <Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        doctors.map(doctor =>
                            <Grid item xs={4} sm={4} md={4} key={doctor?._id}>


                                <Card sx={{ maxWidth: "100%", }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"

                                            image={doctor?.image}
                                            alt="green iguana"
                                            sx={{ maxHeight: "300px", objectFit: 'contain' }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {doctor?.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <strong>Phone:</strong> {doctor?.phone}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>



                                {/*    <Box key={doctor._id} sx={{ border: 'gray' }}>
                                    <img style={{ maxWidth: '300px', maxHeight: "300px" }} src={doctor?.image} alt='' />
                                    <Typography variant='h5'>
                                        {doctor?.name}
                                    </Typography>
                                    <Typography variant='h6'>
                                        {doctor?.phone}
                                    </Typography>
                                </Box> */}
                            </Grid>
                        )
                    }
                </Grid>


            </Box>
            }
        </Container>
    );
};


const SkeletonChildrenDemo = () => {
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {Array.from(new Array(3)).map((data, index) =>
                    <Grid key={index} item xs={4} sm={4} md={4}>
                        <Skeleton variant="rectangular" width="100%" height={118} sx={{ mb: 1 }} />

                        <Skeleton variant="rectangular" width="100%" height={20} sx={{ mb: 1 }} />

                        <Skeleton variant="rectangular" width="50%" height={20} sx={{ mb: 1 }} />

                    </Grid>
                )
                }


            </Grid>
        </Box>
    )
}

export default Doctors;


