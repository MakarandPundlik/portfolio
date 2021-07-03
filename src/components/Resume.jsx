import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box,CssBaseline } from "@material-ui/core";
import TimeLine from "./TimeLine";
const useStyles = makeStyles((theme) => ({
  header:{
    color:"tan",
   
  },
  mainContainer: {
    background: "#233",
    width:"100vw",
    height:"100%"
  },
}));

function Resume(props) {
  const classes = useStyles();
  return (
    <>
    <CssBaseline/>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.header}>
          Work Experience
        </Typography>
         <Box component="div" className={classes.timeLine}>
        <TimeLine />
       </Box> 
        
      </Box>
    </>
  );
}

export default Resume;
