import { Box, Grid, Typography,Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { languages, frameworks, database, devopps } from "./IconData";


const useStyles = makeStyles((theme) => ({
  root: {
    background: "#000",
    width: "100vw",
    height: "100%",
  },
  grid: {
    padding: theme.spacing(3, 2),

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  gridImage: {
    margin: theme.spacing(2),
  },
  imageHeader: {
    color: "tan",
    textAlign: "center",
    marginTop: "2rem",
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
          md={12}
          lg={6}
          sm={12}
          xs={12}
          xl={6}
          className={classes.grid}
        >
          
            <Typography
              variant="h3"
              style={{ color: "tan", textAlign: "center" }}
            >
              TECHNOLOGIES I HAVE WORKED WITH
            </Typography>
          
        </Grid>
        <Grid
          item
          md={12}
          lg={6}
          sm={12}
          xs={12}
          xl={6}
          align="center"
          justify="center"
          alignItems="center"
        >
           <Typography variant="h5" className={classes.imageHeader}>
            LANGUAGES
          </Typography>
          
         
            {languages.map((item, i) => {
              return (
                <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <img
                  src={item.icon}
                  key={i}
                  alt="test"
                  height="35"
                  width="100"
                  className={classes.gridImage}
                />
                 </Slide>
              );
            })}
         
          <Typography variant="h5" className={classes.imageHeader}>
            FRAMEWORKS
          </Typography>
          
          {frameworks.map((item, key) => {
            return (
              <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <img
                src={item.icon}
                key={key}
                alt="test"
                height="35"
                width="100"
                className={classes.gridImage}
              />
              </Slide>
            );
          })}
          
          <Typography variant="h5" className={classes.imageHeader}>
            DATABASES
          </Typography>
          
         
          {database.map((item, key) => {
            return (
              <Slide direction="left" in={true} mountOnEnter unmountOnExit>
              <img
                src={item.icon}
                key={key}
                alt="test"
                height="35"
                width="100"
                className={classes.gridImage}
              />
              </Slide>
            );
          })}
          
          <Typography variant="h5" className={classes.imageHeader}>
            DEV-OPS
          </Typography>
          
          {devopps.map((item, key) => {
            return (
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
              <img
                src={item.icon}
                key={key}
                alt="test"
                height="35"
                width="100"
                className={classes.gridImage}
              />
              </Slide>
            );
          })}
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default Technologies;
