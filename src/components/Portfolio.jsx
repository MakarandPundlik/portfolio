import React from "react";
import blogpost from "../images/blogpost.png";
import ipr from "../images/ipr.png";
import vms from "../images/vms.jpg";
import java from "../images/java.jpg";
import covid from "../images/covid.jpg";
import { makeStyles } from "@material-ui/core/styles";



import { GitHub } from "@material-ui/icons";
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
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    background: "#fff",
  },
  cardTitle: {},
  cardContent: {
    fontSize:"1rem"
  },
}));

const projects = [
  {
    title: "CovidTracker",
    content:
      "A webapp where data of covid-19 is displayed fetched using external APIs. It also displayes data on map and charts for respective countries using chartJs and public APIs of map.",
    github: "https://github.com/MakarandPundlik/covidtracker",
    image: covid,
    techStack: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
      "https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white",
      "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
      "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    ],
  },
  {
    title: "BlogPost",
    content:
      "A MERN stack application in ehich user can register himself,create his own blogs and read others blogs,report generation for a registered user.This app providers features such as commenting on blog, total views on blogs.For an administrator it provides admin panel on which admin can see rhe entire report.",
    github: "https://github.com/MakarandPundlik/Blogs",
    image: blogpost,
    techStack: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
      "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
      "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
    ],
  },
  {
    title: "IPR Portal",
    content:
      "A webapp which offers role based views and allows user to register his/her patents.Also, provides chatroom for bidding,displayes the patents accordging to doamin.",
    github: "https://github.com/IPR-Portal",
    image: ipr,
    techStack: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
    ],
  },
  {
    title: "VMS Controls",
    content:
      "A website for a private firm which works into automation industry.A website is build in reactJs with boostrap5 UI components which gives information about company's services, vision & missions, various technologies that compnay has worked with",
    github: "https://github.com/MakarandPundlik/vms",
    image: vms,
    techStack: [
      "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white",
      "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
      "https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black",
    ],
  },
  {
    title: "Core Java",
    content:
      "A github repository which contains all about core java.Covers comcepts like inheritance, abstraction, encapsulation, polymorphism, applets, frames, GUI applications",
    github: "https://github.com/MakarandPundlik/Core-Java",
    image: java,
    techStack: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
    ],
  },
  {
    title: "Advanced Java",
    content:
      "A github repository which contains all about advanced java.Covers comcepts like JDBC, servlets, JSP, multithreading, Collection frameworks, Java beans, java swings, networking in java",
    github: "https://github.com/MakarandPundlik/Advanced-Java",
    image: java,
    techStack: [
      "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
      "https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white",
    ],
  },
];
function Portfolio(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container>
        {projects.map((item, key) => {
          return (
            <Grid item alignItem="center" sm={12} md={6} xl={4} lg={4} xs={12}>
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
                      <Button size="small" href={item.github} target="_blank">
                      <GitHub />
                    </Button>
                    </Typography>
                   
                    <Typography variant="p" className={classes.cardContent}>
                      {item.content}
                    </Typography>
                  </CardContent>
                  <Grid item xl={4}>
                    {item.techStack.map((link) => {
                      return (
                        <img
                          src={link}
                          alt="test"
                          style={{ margin: "0.2rem" }}
                        />
                      );
                    })}
                  </Grid>
                  <CardActions>
                   
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
