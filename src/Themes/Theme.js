
import React,{useContext} from 'react';
import { useTheme} from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const ThemeChange = () => {
    const theme = useTheme();
    const colorMode =useContext(ColorModeContext);
    return (
        <Box>
      
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{ color:'yellow'}} /> : <Brightness4Icon sx={{color:'lightblue'}} />}
        </IconButton>
      </Box>
    );
};
