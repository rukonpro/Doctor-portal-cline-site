import React from 'react';
import './Feature.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Treatment from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';
const Feature = () => {
    return (
        <Container>
            <Box sx={{ width: '100%', mt: 15 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 12, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={4} >
                        <img style={{ width: "100%" }} src={Treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ py: 4 }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', pb: 1 }}>
                                Exceptional Dental <br />Care,on your Terms
                            </Typography>
                            <Typography variant='p' sx={{ fontSize: 20, color: 'gray' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio officia aperiam, aut maxime aliquid deserunt voluptatum consequatur, quam magni sunt assumenda reprehenderit, omnis dolores? Iure esse molestiae odit mollitia placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse sequi nesciunt nam saepe? Iure exercitationem magni tempora aspernatur dolor quam atque nihil, maiores architecto nulla facilis eligendi ullam inventore.
                            </Typography> <br />
                            <Button variant="contained" className="feature-button" sx={{ mt: 3, color: 'white' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Feature;