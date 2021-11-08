import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
const services = [
    {
        name: 'Fluoride Treatment',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .',
        img: cavity
    },
    {
        name: 'Fluoride Treatment',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .',
        img: whitening
    },
]
const Services = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            flexGrow: 1,

        }} >

            <Typography gutterBottom variant="h5" component="div"
                sx={{ fontWeight: "medium", py: 1 }}
                color="success.main">
                OUR SERVICES
            </Typography>
            <Typography gutterBottom variant="h4" component="div"
                sx={{ fontWeight: "bold", p: 2 }}
                color="info.main">
                Services We Provide
            </Typography>

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Service service={service}></Service>)
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default Services;