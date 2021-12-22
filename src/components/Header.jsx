import { Box, Avatar, Typography, Grid,Slide } from "@material-ui/core";
import React from "react";
import home from "../images/home.png"
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textAlign:"center"
  },
  typedContainer: {
    background: "#000",
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100vw",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    zIndex: 1,
  },
}));
function Header(props) {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Avatar className={classes.avatar} src={home} alt="avatar" />
        </Slide>
      </Grid>
      <Typography className={classes.title} variant="h3">
        <Typed strings={["Makarand Pundlik"]} typeSpeed={40} />
        <br />
      </Typography>
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "Web Development",
            "Full Stack Development",
            "Data Structures and Algorithms",
            "Machine Learning Enthusiast",
            "Cloud Computing"
          ]}
          typeSpeed={30}
          backSpeed={40}
          loop
        ></Typed>
      </Typography>
   
    </Box>
  );
}

export default Header;
