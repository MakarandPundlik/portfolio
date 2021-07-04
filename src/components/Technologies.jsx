import { Box, Grid, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import iconsdata from "./IconData";
import BottomNav from "./BottomNav";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  grid: {
    padding: theme.spacing(3, 2),

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  gridImage:{
   
    padding:theme.spacing(1)
  },
  styledAvatar: {
    height: theme.spacing(7),
    width: theme.spacing(7),
    margin: "1rem",
    "&:hover": {
      height: "4rem",
      width: "4rem",
    },
  },
}));

function Technologies(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Grid container justify="center">
        <Grid
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          xl={6}
          className={classes.grid}
        >
          <Typography variant="h3" style={{ color: "tan" }}>
            TECHNOLOGIES I HAVE WORKED WITH
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          sm={12}
          xs={12}
          xl={6}
          
        >
          
          {iconsdata.map((item, key) => {
            return (
              <img
                src={item.icon}
                key={key}
                alt="test"
                height="60"
                width="60"
                className={classes.gridImage}
              />
            );
          })}
        </Grid>
      </Grid>
      <BottomNav/>
    </Box>
  );
}

export default Technologies;
