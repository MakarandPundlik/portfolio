import React from 'react';
import {BottomNavigation,BottomNavigationAction,Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Facebook,Twitter,LinkedIn,GitHub, Instagram, WhatsApp} from '@material-ui/icons';
const useStyles = makeStyles((theme)=>({
    root:{
        "& .MuiBottomNavigationAction-root":{
            minWidth:0,
            maxWidth:300
        },
        "& .MuiSvgIcon-root":{
            fill:"tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
            }
        }
    }
}))
function BottomNav(props) {
    const classes = useStyles();
    return (
        <Box>
        <BottomNavigation style={{backgroundColor:"#233"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Facebook/>}
            />
             <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Twitter/>}
            />
             <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Instagram/>}
            />
            
        </BottomNavigation>
        <BottomNavigation style={{backgroundColor:"#233"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<GitHub/>}
            />
             <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<WhatsApp/>}
            />
             <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<LinkedIn/>}
            />
            
        </BottomNavigation>
        </Box>
    );
}

export default BottomNav;