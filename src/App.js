import React, { useState, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";
import Appointment from "./Pages/Appintment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { ColorModeContext } from './Themes/Theme';


function App() {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }
  }), [],
  );
  const theme = useMemo(() => createTheme({ palette: { mode, }, }), [mode]);


  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Paper >
            <AuthProvider>

              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <PrivateRoute path="/appointment">
                    <Appointment />
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                    <Dashboard />
                  </PrivateRoute>
                  <Route path="/users">
                    <Home />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                </Switch>
              </Router>
            </AuthProvider>
          </Paper>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
