import React from "react";
import blogpost from "../images/blogpost.png";
import ipr from "../images/ipr.png";
import vms from "../images/vms.jpg";
import java from "../images/java.jpg";
import covid from "../images/covid.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, Share } from "@material-ui/icons";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    background: "#ffc107",
  },
  cardTitle: {
    color: "#fff",
  },
  cardContent: {
    color: "#fff",
  },
}));

const projects = [
  {
    title: "CovidTracker",
    content:
      "A webapp where data of covid-19 is displayed fetched using external APIs. It also displayes data by map and charts for respective countries using chartJs and public APIs of map.",
    github: "https://github.com/MakarandPundlik/covidtracker",
    image: covid,
  },
  {
    title: "BlogPost",
    content:
      "A MERN stack application in ehich user can register himself,create his own blogs and read others blogs,report generation for a registered user.This app providers features such as commenting on blog, total views on blogs.For an administrator it provides admin panel on which admin can see rhe entire report.",
    github: "https://github.com/MakarandPundlik/Blogs",
    image: blogpost,
  },
  {
    title: "IPR Portal",
    content:
      "A webapp which offers role based views and allows user to register his/her patents.Also, provides chatroom for bidding,displayes the patents accordging to doamin.",
    github: "https://github.com/IPR-Portal",
    image: ipr,
  },
  {
    title: "VMS Controls",
    content:
      "A website for a private firm which works into automation industry.A website is build in reactJs with boostrap5 UI components which gives information about company's services, vision & missions, various technologies that compnay has worked with",
    github: "https://github.com/MakarandPundlik/vms",
    image: vms,
  },
  {
    title: "Core Java",
    content:
      "A github repository which contains all about core java.Covers comcepts like inheritance, abstraction, encapsulation, polymorphism, applets, frames, GUI applications",
    github: "https://github.com/MakarandPundlik/Core-Java",
    image: java,
  },
  {
    title: "Advanced Java",
    content:
      "A github repository which contains all about advanced java.Covers comcepts like JDBC, servlets, JSP, multithreading, Collection frameworks, Java beans, java swings, networking in java",
    github: "https://github.com/MakarandPundlik/Advanced-Java",
    image: java,
  },
  
];
function Portfolio(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container>
        {projects.map((item, key) => {
          return (
            <Grid item alignItem="center" sm={8} md={6}>
              <Card className={classes.cardContainer} key={key}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="test"
                    height="250"
                  ></CardMedia>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.cardTitle}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="p" className={classes.cardContent}>
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Share />
                    </Button>
                    <Button size="small" href={item.github} target="_blank">
                      <GitHub />
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Portfolio;
