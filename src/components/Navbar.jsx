import React,{useState} from "react";
import RightMenuSlider from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemText,
  Box,
  Typography,
  List,
  Divider,
  IconButton,
  Avatar,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuOpen, Home, ContactMail, Apps,Assignment, Build } from "@material-ui/icons";
import home from "../images/home.png";
import BottomNav from "./BottomNav";


const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    background: "#512",
    height: "100%",
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    display: "block",
    margin: "0.5rem auto",
  },
  listItem: {
    color: "tan",
  },
}));

const navItems = [
  {
    listIcon: <Home />,
    listLink:"/",
    listText: "Home",
  },
  {
    listIcon: <Apps />,
    listLink:"/projects",
    listText: "Projects",
  },
  {
    listIcon: <Assignment />,
    listLink:"/resume",
    listText: "Experience",
  },
  {
    listIcon: <Build />,
    listLink:"/technologies",
    listText: "Tools & Technologies",
  },
  {
    listIcon: <ContactMail />,
    listLink:"/contact",
    listText: "Contact Me",
  },
  
];
function Navbar(props) {
  //navbar state
  const [state,setState] = useState({
    right:false
  })
  const classes = useStyles();

  //side list 
  const sideList = (slider) => (
    <Box onClick={toggleNav("right",false)} className={classes.menuSliderContainer} component="div">
    <Avatar className={classes.avatar} src={home} alt="me" />
    <Divider />
    <List>
      {navItems.map((item, key) => {
        return (
          <ListItem button key={key} component={Link} to={item.listLink}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
               primary={item.listText}
            />
          </ListItem>
        );
      })}
    </List>
  </Box>
  )

  //toggler function for navbar
  const toggleNav = (slider,open)=>()=>{
      setState({...state,[slider]:open})
  }
  return (
    <>
     
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222",width:"100vw" }}>
          <Toolbar>
            <IconButton onClick={toggleNav("right",true)}>
              <MenuOpen style={{ color: "tomato",fontSize:"1.5em" }} />
            </IconButton>
            <Typography variant="h4" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <RightMenuSlider
            anchor="right"
            open={state.right}
            onClose={toggleNav("right",false)}
            >
                {sideList("right")}
               
            </RightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
