import { Box, Grid, Avatar,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


const useStyles = makeStyles((theme) => ({
  root:{
    background:"#233",
    height:"100vh",
    width:"100vw"
  },
  styledAvatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    margin: "1rem",
    "&:hover":{
      height:"4rem",
      width:"4rem"
    }
  },
}));

function Technologies(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
     
    </Box>
  );
}

export default Technologies;
