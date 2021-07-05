import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { withStyles, makeStyles } from "@material-ui/styles";
import { Send } from "@material-ui/icons";
import firebase from "../utils";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
  },
  button: {
    color: "tomato",
    borderColor: "tan",
    margin: "1rem auto",
  },
}));

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
  const [contact, setContact] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [prompt, setPrompt] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    
  const today = new Date();

    firebase
      .firestore()
      .collection("contact")
      .add({
        email: contact.email,
        name: contact.name,
        company: contact.company,
        date:
          today.getDate() +
          "-" +
          parseInt(today.getMonth() + 1) +
          "-" +
          today.getFullYear(),
      });
      console.log(contact,today);
    setPrompt(true);
  };
  //snackbar event
  const handleClose = (e) => {
    setPrompt(false);
  };
  return (
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Grid container justify="center">
        {prompt && (
          <Snackbar
            open={prompt}
            autoHideDuration={6000}
            onClose={(e) => handleClose(e)}
          >
            <Alert onClose={(e) => handleClose(e)} severity="success">
              Your response has been successfully submitted!
            </Alert>
          </Snackbar>
        )}
        <Box
          component="form"
          className={classes.form}
         
        >
          <Typography variant="h5" style={{ color: "tomato" }}>
            Hire or Contact Me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
            id="name"
            onChange={(e) => handleChange(e)}
            inputProps={{ style: { color: "tomato" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="Email"
            type="email"
            variant="outlined"
            margin="dense"
            size="medium"
            id="email"
            onChange={(e) => handleChange(e)}
            inputProps={{ style: { color: "tomato" } }}
            autoComplete="off"
          />
          <br />
          <InputField
            fullWidth={true}
            label="Company Name"
            variant="outlined"
            margin="dense"
            size="medium"
            id="company"
            onChange={(e) => handleChange(e)}
            inputProps={{ style: { color: "tomato" } }}
          />
          <Button
            onClick={(e) => handleSubmit(e)}
            variant="outlined"
            className={classes.button}
            fullWidth={true}
            endIcon={<Send />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
