import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './TopBar.css';
import '@fontsource/roboto/300.css';
import Typography from '@mui/material/Typography';
import { Box, responsiveFontSizes } from '@mui/material';
import { bgcolor } from '@mui/system';
import { createTheme } from '@material-ui/core/styles'
import { ResponsiveFontSizesOptions } from '@material-ui/core/styles/responsiveFontSizes';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ThemeProvider from '@mui/system';




function TopBar() {
    return (
        <>
          <Box 
            className='topBar'
            display='flex'
            alignItems='center'
            justifyContent='center'
            sx={{
              // height: '100px',
              width: '1',
              bgcolor: '#5bccf6'
            }}
          >
            <Typography 
              variant="h1" 
              className='topBarTitle'
              fontSize= 'min(16vw, 90px)'
              
            >
                cocktails.io
            </Typography>
          </Box>
        </>
      )
}

export default TopBar