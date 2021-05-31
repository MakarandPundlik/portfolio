import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import TimeLine from "./TimeLine";
const useStyles = makeStyles((theme) => ({
  header:{
    color:"tan",
    padding:"2rem"
  },
  mainContainer: {
    background: "#233",
    height:"100vh"
  },
}));

function Resume(props) {
  const classes = useStyles();
  return (
    <>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.header}>
          Working Experience
        </Typography>
         <Box component="div" className={classes.timeLine}>
        <TimeLine />
       </Box> 
        
      </Box>
    </>
  );
}

export default Resume;
