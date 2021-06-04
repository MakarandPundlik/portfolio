import { Box, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import iconsdata from "./IconData";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#233",
    height: "100vh",
  },
  styledAvatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    margin: "1rem",
  },
}));

function Technologies(props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container alignItems="center" justify="center">
        {iconsdata.map((item, key) => {
          return (
            <Grid item xs={12} md={6} lg={6} xl={4} key={key} style={{display:"flex"}}>
              <Avatar src={item.icon} className={classes.styledAvatar} />
              <ProgressBar />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Technologies;
