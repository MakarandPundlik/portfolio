import React from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemText,
    Box,
    Typography,
    List,
    Divider,
    IconButton,
    Avatar
} from '@material-ui/core';

import { ArrowBack } from '@material-ui/icons';
function Navbar(props) {
    return (
        <Box component="nav">
            <AppBar  position="static" style={{background:"#222"}}>
                <Toolbar>
                   <IconButton>
                   <ArrowBack style={{color:"tan"}}/>
                   </IconButton>
                   <Typography variant="h4" style={{color:"tan"}}>
                       Portfolio
                   </Typography>
                </Toolbar>
            </AppBar>
      </Box>
    );
}

export default Navbar;