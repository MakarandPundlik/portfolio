import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Instagram,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  box:{
    width:"100vw",
    backgroundColor: "#222"
  },
  root: {
   
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
}));
function BottomNav(props) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      
       <Grid container justify="center">
       <Button
          target="_blank"
          href="https://www.facebook.com/makarand.pundlik/"
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<Facebook />}
          />
        </Button>
        <Button target="_blank" href="https://twitter.com/makarand2308">
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<Twitter />}
          />
        </Button>
        <Button
          target="_blank"
          href="https://www.instagram.com/makarandpundlik/"
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<Instagram />}
          />
        </Button>
        
        <Button target="_blank" href="https://github.com/MakarandPundlik">
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<GitHub />}
          />
        </Button>
        
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/makarand-pundlik-9127461a2/"
        >
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<LinkedIn />}
          />
        </Button>

         </Grid>
         
     
    </Box>
  );
}

export default BottomNav;
