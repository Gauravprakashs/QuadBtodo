
import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';
import './../components/Header.css'

const Header = () => {
    return (
        <AppBar position="static" className="App-header">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div">
                        My To-Do List
                    </Typography>
                </Box>
                
            </Toolbar>
        </AppBar>
    );
};

export default Header;
