import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "400px",
    marginTop:"2rem"
  },
  colorPrimary:{
  "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "yellow",
  },
  }
});

function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} className={classes.colorPrimary}/>
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" style={{color:"yellow"}}>{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
 
  value: PropTypes.number.isRequired,
};



export default function ProgressBar(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(props.value);

  React.useEffect(() => {
    
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.value ? 0 : prevProgress + 10
      );
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Box className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
