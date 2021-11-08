import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
const Contact = () => {
    // const [contacts,setContacts]=useState([]);
    const contacts = [
        {
            icon: AccessTimeIcon,
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, aliquam.',
            bgcolor: '#00b4ba'

        },
        {
            icon: LocationOnIcon,
            title: 'Visit Our Location',
            location: 'Brookiyn,NY 10036,United states',
            bgcolor: '#101617'

        },
        {
            icon: WifiCalling3Icon,
            title: 'Contact us Now',
            phone: '+254522544',
            bgcolor: '#00b4ba'

        },
    ]


    return (
        <Container sx={{ textAlign: 'center', mb: 15 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    contacts.map(contact =>
                        <Grid key={contact.title} item xs={12} sm={4} md={4} sx={{ mt: -15, pt: 10 }}>
                            <Box sx={{ height: 150, display: 'flex', alignItems: 'center', px: 3, color: "white", backgroundColor: contact.bgcolor, my: 7 }}>
                                <Box>
                                    <contact.icon sx={{ fontSize: "60px", mr: 2 }}></contact.icon>
                                </Box>

                                <Box spacing="2" sx={{ textAlign: 'left' }}>
                                    <Typography variant="h6">
                                        {contact?.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16 }} variant="p">
                                        {contact?.description}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16 }} variant="p">
                                        {contact?.location}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16 }} variant="p">
                                        {contact?.phone}
                                    </Typography>
                                </Box>

                            </Box>
                        </Grid>

                    )
                }
            </Grid>
        </Container>
    );
};

export default Contact;