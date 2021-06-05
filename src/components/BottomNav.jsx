import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Instagram,
  WhatsApp,
  Email,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 300,
    },
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
    <Box>
      <BottomNavigation style={{ backgroundColor: "#233" }}>
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
      </BottomNavigation>
      <BottomNavigation style={{ backgroundColor: "#233" }}>
        <Button target="_blank" href="https://github.com/MakarandPundlik">
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<GitHub />}
          />
        </Button>
        <Button>
          <BottomNavigationAction
            className={classes.root}
            style={{ padding: 0 }}
            icon={<Email />}
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
      </BottomNavigation>
    </Box>
  );
}

export default BottomNav;
