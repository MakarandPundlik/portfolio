import React from "react";
import { Box, Button, Typography, Grid, TextField } from "@material-ui/core";
import { withStyles,makeStyles } from "@material-ui/styles";
import { Send } from "@material-ui/icons";
const useStyles = makeStyles((theme)=>({
    form:{
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        position:"absolute",
        
    },
    button:{
        color:"tomato",
        borderColor:"tan",
        margin:"1rem auto"
    }
}))

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
function Contact(props) {
    const classes = useStyles();
  return (
    <Box component="div" style={{background:"#233",height:"100vh"}}>
      <Grid container justify="center" >
        <Box component="form" className={classes.form}>
          <Typography variant="h5" style={{color:"tomato"}}>Hire or Contact Me</Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{style:{color:"tomato"}}}
          />
          <br/>
          <InputField
            fullWidth={true}
            label="Email"
            type="email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{style:{color:"tomato"}}}
            autoComplete="off"
          />
          <br/>
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{style:{color:"tomato"}}}
          />
          <Button variant="outlined" className={classes.button} fullWidth={true} endIcon={<Send/>}>
              Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
