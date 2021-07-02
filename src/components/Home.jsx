import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Header from "./Header";


const useStyles = makeStyles({
 root:{
   background:"#233",
   height:"100vh",
   width:"100vw"
 }
});
function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
     
    </div>
  );
}

export default Home;
