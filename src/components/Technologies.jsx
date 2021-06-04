import { Box, Grid,Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import iconsdata from './IconData';

const useStyles = makeStyles({
    root:{
        background:"#233",
        height:"100vh"
    }
})

function Technologies(props) {
    const classes = useStyles();
    return (
       <Box className={classes.root}>
          <Grid container >
             {
                 iconsdata.map((item,key)=>{
                     return(
                        <Grid item xs={12} md={6} lg={6} xl={4} key={key}>
                            <Avatar src={item.icon}/>
                        </Grid> 
                     )
                 })
             }
          </Grid>
       </Box>
    );
}

export default Technologies;