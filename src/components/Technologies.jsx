import { Box, Grid, Avatar,Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import iconsdata from "./IconData";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  root:{
        top:"10%",
        left:"40%",
        transform:"translate(-35%,-1%)",
        position:"absolute",
        
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
      <Grid container >
        {iconsdata.map((item, key) => 
           (
            <Grid item xs={12} md={6} lg={6} xl={4} key={key} style={{display:"flex"}}>
             <Tooltip title={item.title}>
             <Avatar src={item.icon} className={classes.styledAvatar} />
             </Tooltip>
              <ProgressBar value={item.progress}/>
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}

export default Technologies;
