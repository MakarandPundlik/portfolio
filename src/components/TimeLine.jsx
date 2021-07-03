// import React from "react";
// import Timeline from "@material-ui/lab/Timeline";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
// import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";
// import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//     timeLineItem:{
//         color:"#fff"
//     }
// })
// 
// export default function TimeLine() {
//     const classes = useStyles();
//   return (
//     <React.Fragment>
//       <Timeline align="alternate">
//           {
//               timeline.map((item,key)=>{
//                   return(
//                     <TimelineItem key={key} className={classes.timeLineItem}>
//                     <TimelineOppositeContent >
//                       <Typography variant="h4" >{item.year}</Typography>
//                     </TimelineOppositeContent>
//                     <TimelineSeparator>
//                       <TimelineDot />
//                       <TimelineConnector />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                       <Typography variant="h4">{item.content}</Typography>
//                     </TimelineContent>
//                   </TimelineItem>
//                   )
//               })
//           }
//       </Timeline>
//     </React.Fragment>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import {AllInclusive, Book, Exposure, MenuBook, Policy, Web} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding:"1rem",
  
    backgroundColor: "tan",
    color:"brown"
  },
  timelineicon:{
      color:"tan",
      background:"#233"
  },
  year:{
      color:"tomato"
  }
}));
const timeline = [
  {
    year: "2018",
    content: "Special Theory of Relativity",
    subcontent:"A remote course under guidance of Prof.H.C.Verma held by IIT Kanpur",
    icon:<MenuBook/>
  },
      {
        year: "2019",
        content: "Dr.Vikram Sarabhai Dal",
        subcontent:"A group of young people passionate about Science",
        icon:<Exposure/>
      },
      {
        year: "2019",
        content: "Impetus&Concepts",
        subcontent:"Volunteer at Prestegious Event of PICT,hardware team",
        icon:<AllInclusive/>
      },
      {
        year: "2020",
        content: "Impetus&Concepts",
        subcontent:"Second Year representative of Concepts,publicity team",
        icon:<AllInclusive/>
      },
      {
        year: "2020",
        content: "IPR Portal",
        subcontent:"Internship under college faculty,intellectual propery rights",
        icon:<Policy/>
      },
      {
        year: "2021",
        content: "Commercial Website Development",
        subcontent:"Developed a commercial website for a private firm VMS Controls",
        icon:<Web/>
      },
      {
        year: "2021",
        content: "BlogPost",
        subcontent:"Personal Project: A webapp to write your own stories",
        icon:<Book/>
      }
    ];
export default function TimeLine() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {
          timeline.map((item,key)=>{
              return(
                <TimelineItem key={key}>
                <TimelineOppositeContent >
                  <Typography variant="h5" className={classes.year}>
                    {item.year}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot className={classes.timelineicon}>
                    {item.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h5" component="h1">
                      {item.content}
                    </Typography>
                    <Typography>{item.subcontent}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              
              )
          })
      }
    </Timeline>
  );
}

