import React from 'react';
import './Footer.css';
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <Box className="footer-Container" sx={{ flexGrow: 1, textAlign: 'center', py: 6 }}>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ mt: 10, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            Emergency Dental Care
                        </Link> <br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            Check Up
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Treatment of Personal Diseases'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link>
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)' }}>
                            Services
                        </Typography>

                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Emergenc Dental care'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Treatment of Personal Diseases'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)' }}>
                            Oral Health
                        </Typography>
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Emergency Dental Cate'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Tooth Extraction'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link><br />
                        <Link sx={{ color: 'black', fontSize: 18 }} href="#" underline="none">
                            {'Check Up'}
                        </Link>
                    </Grid>
                    <Grid sx={{ mt: 5, textAlign: "left" }} item xs={12} sm={4} md={3}>
                        <Typography variant="h5" sx={{ color: 'rgb(0, 255, 195)' }}>
                            Our Address
                        </Typography>
                        <Typography>
                            New York-101010 Hudson
                        </Typography>
                        <Typography>
                            Yards
                        </Typography>
                        <Box sx={{ my: 2 }}>
                            <FacebookOutlinedIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#fff',
                                    backgroundColor: '#12D0D8',

                                }}>

                            </FacebookOutlinedIcon>
                            <GoogleIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#12D0D8',
                                    mx: 5
                                }}>


                            </GoogleIcon>
                            <TwitterIcon
                                sx={{
                                    p: 1, border: '2px solid #00FFC3',
                                    borderRadius: 50,
                                    color: '#12D0D8'
                                }}>


                            </TwitterIcon>
                        </Box>
                        <Box>
                            <Typography>
                                Call Now
                            </Typography>
                            <Button className="feature-button">+2025500165</Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography sx={{ fontSize: 15, py: 10 }} variant="h6">
                        CopyRight 2021 all Right Reserved
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;