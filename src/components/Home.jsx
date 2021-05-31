import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Particles from "react-particles-js";
import Header from "./Header";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
  },
});
function Home(props) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            density: {
              enable: true,
              value_ares: 900,
            },
            opacity: {
              value: 1,
            },
          },
        }}
      />
    </>
  );
}

export default Home;
