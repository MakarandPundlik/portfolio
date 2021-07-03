import { Box, Avatar, Typography, Grid } from "@material-ui/core";
import React from "react";
import home from "../images/home.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
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
    background: "#233",
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
        <Avatar className={classes.avatar} src={home} alt="avatar" />
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
