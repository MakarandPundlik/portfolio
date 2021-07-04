import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { languages, frameworks, database, devopps } from "./IconData";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#233",
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
          <motion.h1
            initial={{ opacity: 0, x: "-50%" }}
            animate={{
              opacity: 1,
              x: "0%",
              transition: {
                duration: 1.5,
                ease: [0.7, 0.7, 0.7, 0.7],
              },
            }}
          >
            <Typography
              variant="h3"
              style={{ color: "tan", textAlign: "center" }}
            >
              TECHNOLOGIES I HAVE WORKED WITH
            </Typography>
          </motion.h1>
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
          <motion.div
            initial={{ opacity: 0, scale: 1.2, y: `${50 * Math.pow(-1, 1)}%` }}
            animate={{
              opacity: 1,
              scale: 1,
              y: "0%",
              transition: { delay: 0.6, duration: 1 },
            }}
            inherit={false}
          >
           
            {languages.map((item, i) => {
              return (
                <img
                  src={item.icon}
                  key={i}
                  alt="test"
                  height="70"
                  width="70"
                  className={classes.gridImage}
                />
              );
            })}
          </motion.div>
          <Typography variant="h5" className={classes.imageHeader}>
            FRAMEWORKS
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 1.2, y: `${50 * Math.pow(-1, 1)}%` }}
            animate={{
              opacity: 1,
              scale: 1,
              y: "0%",
              transition: { delay: 0.6, duration: 1 },
            }}
            inherit={false}
          >
          {frameworks.map((item, key) => {
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1.2, y: `${50 * Math.pow(-1, 1)}%` }}
            animate={{
              opacity: 1,
              scale: 1,
              y: "0%",
              transition: { delay: 0.6, duration: 1 },
            }}
            inherit={false}
          >
          <Typography variant="h5" className={classes.imageHeader}>
            DATABASES
          </Typography>
          {database.map((item, key) => {
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
          </motion.div>
          <Typography variant="h5" className={classes.imageHeader}>
            DEV-OPS
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 1.2, y: `${50 * Math.pow(-1, 1)}%` }}
            animate={{
              opacity: 1,
              scale: 1,
              y: "0%",
              transition: { delay: 0.6, duration: 1 },
            }}
            inherit={false}
          >
          {devopps.map((item, key) => {
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
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Technologies;
