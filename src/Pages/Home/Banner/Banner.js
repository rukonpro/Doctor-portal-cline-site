import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import { Button, CardMedia, Container, Typography } from '@mui/material';
import './Banner.css';
import { Box } from '@mui/system';

const Banner = () => {
    return (
        <Box className="banner-bg">
            <Container sx={{ flexGrow: 1, py: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            style={{}}
                            variant="h3">
                            Your New Smile <br />
                            Starts Here

                        </Typography>
                        <Typography
                            style={{ color: 'gray', fontWeight: '300', fontSize: '14', textAlign: 'justify' }}
                            variant="h6">
                            Your New Smile <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique sunt temporibus laborum eligendi doloribus!

                        </Typography>
                        <Button className="feature-button" variant="contained">Get Appointment</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            style={{ height: 'auto' }}
                            image={chair}
                            alt="green iguana"
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;