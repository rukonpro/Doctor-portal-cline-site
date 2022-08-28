import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyles = makeStyles({

        menuItem: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        menuIcon: {

            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        sidebarListItem: {
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold'
        },
        sidebar: {
            backgroundColor: 'hotpink !important'
        }

    });
    const { menuItem, menuIcon, navLogo, sidebarListItem, sidebar } = useStyles();



    const [state, setState] = React.useState(false);



    const list = (
        <Box

            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}
        >

            <Toolbar />
            <Divider />
            <List>
                <Link to='/' className={sidebarListItem}>
                    <ListItem button sx={{ textDecoration: 'none !impotent' }} >
                        <HomeIcon />
                        Home

                    </ListItem>
                </Link>
                <Link to='/appointment' className={sidebarListItem}>

                    <ListItem button  >
                        <MenuBookIcon />
                        Appointment
                    </ListItem>
                </Link>
                {
                    user.email ? <List>
                        <Link to='/dashboard' className={sidebarListItem}>
                            <ListItem button  >
                                <DashboardIcon />
                                Dashboard

                            </ListItem>
                        </Link>
                        <ListItem button onClick={logout} sx={{ color: 'white', fontWeight: 'bold' }}>
                            <LogoutIcon />
                            Logout
                        </ListItem>
                    </List> :
                        <Link to='/login' className={sidebarListItem}>
                            <ListItem button >
                                <LoginIcon />
                                Login
                            </ListItem>
                        </Link>
                }
            </List>
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ position: 'fixed', zIndex: 100,bgcolor:'#3a4256'}} >
                    <Toolbar>
                        <IconButton
                            className={menuIcon}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                            <NavLink to='/' className={sidebarListItem}>Doctors Portal</NavLink>
                        </Typography>
                        <Toolbar className={menuItem}>
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <Button style={{ color: 'white' }}>Home</Button>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/appointment'>
                                <Button style={{ color: 'white' }}>Appointment</Button>
                            </Link>
                            {
                                user?.email ?
                                    <Box>
                                        <Link style={{ textDecoration: 'none' }} to='/dashboard'><Button style={{ color: 'white' }}>Dashboard</Button></Link>
                                        <Button onClick={logout} style={{ color: 'white' }}>Logout</Button>
                                    </Box>
                                    :

                                    <Link style={{ textDecoration: 'none' }} to='/login'><Button style={{ color: 'white' }}>Login</Button></Link>
                            }
                        </Toolbar>
                    </Toolbar>
                </AppBar>
            </Box>

            <div className={sidebar}>

                <React.Fragment >

                    <Drawer

                        PaperProps={{
                            sx: {
                                backgroundColor: "rgb(25, 118, 210)",
                                color: "orange"
                            }
                        }}
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;