import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";


import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    let { path, url } = useRouteMatch();



    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <List>

                <Link to='/' style={{ textDecoration: 'none' }} >
                    <ListItem button sx={{ color: 'white' }} >
                        <HomeIcon
                            sx={{ mr: 3 }} />
                        Home
                    </ListItem>
                </Link>
                <Link to='/appointment' style={{ textDecoration: 'none' }} >
                    <ListItem button sx={{ color: 'white' }} >
                        <MenuBookIcon
                            sx={{ mr: 3 }} />
                        Appointment
                    </ListItem>
                </Link>



                {
                    admin &&
                    <Box>
                        <Link to={`${url}`} style={{ textDecoration: 'none' }} >
                            <ListItem button sx={{ color: 'white' }}>

                                <DashboardIcon sx={{ mr: 3 }} /> Dashboard

                            </ListItem>
                        </Link>
                        <Link exact to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }} >
                            <ListItem button sx={{ color: 'white' }}>

                                <AdminPanelSettingsIcon sx={{ mr: 3 }} /> Make Admin

                            </ListItem>
                        </Link>

                        <Link exact to={`${url}/addDoctor`} style={{ textDecoration: 'none' }} >
                            <ListItem button sx={{ color: 'white' }}>

                                <AddModeratorIcon sx={{ mr: 3 }} /> Add Doctors

                            </ListItem>
                        </Link>
                    </Box>
                }

                {
                    user.email && <List>

                        <ListItem button onClick={logout} sx={{ color: 'white', fontWeight: 'bold' }}>
                            <LogoutIcon sx={{ mr: 3 }} />
                            Logout
                        </ListItem>
                    </List>
                }
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },bgcolor:"#3a4256"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#424b62",
                            color: "white"
                        }
                    }}
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    PaperProps={{
                        sx: {
                            backgroundColor: "#424b62",
                            color: "white"
                        }
                    }}
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome />
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </Route>
                    <AdminRoute path={`${path}/payment/:appointmentId`}>
                        <Payment></Payment>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
