import{useState} from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  '@media (min-width: 500px)' :{
    display: 'none',
  },
  main: {
    backgroundColor: '#7E8BFF',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    overflow: 'hidden',
  },
  paper: {
    color: 'black',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginLeft: '35%',
    marginRight: '25%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#FF6F6F',
    width: '20%',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '5%'
  },
  detail: {
    backgroundColor: 'white',
    width: '30%',
  },
  link: {
    textAlign: 'center',
    paddingTop: '1em',
  },
}));

function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = async(e) => {
    const authentication = getAuth();
    e.preventDefault()

    createUserWithEmailAndPassword(authentication, email, password)
    .then((response)=>{
      console.log(response)
    })
     const docRef= await addDoc(collection(db, "SignUp"), {
        Firstname: firstName,
        Lastname: lastName,
        Email: email,
        Password: password
    });
    console.log("Document written with ID: ", docRef.id);
      
  };
  const classes = useStyles();
  return (
    // <div className={classes.main}>
    <Box className={classes.main} component="main" >
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.title}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        </div>
        <form className={classes.form} noValidate>
          <Grid  container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                
                id="firstName"
                label="First Name"
                className={classes.detail}
                onChange={(event) => {
                  setfirstName(event.target.value);
                }}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                className={classes.detail}
                onChange={(event) => {
                  setlastName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className= {classes.detail}
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className= {classes.detail}
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                
                name="Cpassword"
                label="Confim Password"
                type="password"
                id="Cpassword"
                autoComplete="current-password"
                className={classes.detail}
              />
            </Grid>
          </Grid>
          <Button
            onClick={register}
            type="submit"
            variant="contained"
            className={classes.submit}
          >
            Join Now
          </Button>
          
            <Grid item className={classes.link}>
              <Link href="#">
                Already have an account? Sign in
              </Link>
            </Grid>
          
          
        </form>
      </div>
    </Box>
  // </div>
  );
}
export default SignUp;
