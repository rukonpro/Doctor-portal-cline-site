import React from 'react';
import './Testimonial.css'
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';



const Testimonial = () => {
    return (
        <Container className='testimonial-container' sx={{mb:10}}>
            <Typography variant="h6" sx={{ color: 'rgb(0, 255, 195)', pt: 6 }}>
                Testimonial
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', pt: 2, pb: 5 }}>
                What's Our Patients <br />Says
            </Typography>

            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        testimonials.map((testimonial,index) =>
                            <Grid item xs={12} sm={4} md={4} key={index}>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        '& > :not(style)': {
                                            m: 1,

                                        },
                                    }}
                                >
                                    <Paper elevation={1}
                                        sx={{ p: 3 }}
                                    >
                                        <Typography variant="p" sx={{ color: 'gray', fontWeight: 'bold' }}>
                                            {testimonial.description}
                                        </Typography>

                                        <Grid container rowSpacing={1} sx={{ mt: 5 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item md={4}>
                                                <img src={testimonial.img} alt="" />
                                            </Grid>
                                            <Grid item md={8}>
                                                <Typography sx={{ fontSize: 20, pt: 3 }} variant="h5">
                                                    {testimonial.name.toUpperCase()}
                                                </Typography>
                                                <Typography sx={{ fontSize: 15, color: 'rgb(0, 255, 195)' }} variant="h6">
                                                    {testimonial.title}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>

                                </Box>
                            </Grid>

                        )
                    }
                </Grid>

            </Box>
        </Container>
    );
};


const testimonials = [
    {
        id: 1,
        name: 'Winson Herry',
        img: people1,
        title: 'Cailifornia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus est vero iusto officia asperiores consequatur, vel iste aspernatur ipsa adipisci iure quo dolores. Exercitationem, repellat ea? Enim, ipsam voluptatibus!'
    },
    {
        id: 2,
        name: 'Winson Herry',
        img: people2,
        title: 'Cailifornia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus est vero iusto officia asperiores consequatur, vel iste aspernatur ipsa adipisci iure quo dolores. Exercitationem, repellat ea? Enim, ipsam voluptatibus!'
    },
    {
        id: 3,
        name: 'Winson Herry',
        img: people3,
        title: 'Cailifornia',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus est vero iusto officia asperiores consequatur, vel iste aspernatur ipsa adipisci iure quo dolores. Exercitationem, repellat ea? Enim, ipsam voluptatibus!'
    },
]

export default Testimonial;