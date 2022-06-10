import{useState} from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link, useNavigate} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import { useAlert } from "react-alert";
// import Navbar from "./navSign";
 
 
 
 
 
 
const useStyles = makeStyles((theme) => ({
 
  outer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    width: '100vw',
    backgroundColor: '#7E8BFF',
   
  },
  paper: {
    color: 'black',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '900px',
  },
  title: {
    margin: 0,
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
    width: '25%',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '2%'
  },
  detail: {
    backgroundColor: 'white',
    width: '40%',
  },
  link: {
    textAlign: 'center',
    paddingTop: '1px',
  },
  message: {
    color: 'red',
    
  },
}));
 
 
function SignUp() {
  const navigate = useNavigate();

  const alert = useAlert();
 

  const [firstName, setfirstName] = useState(""); 
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cPass, setcPass] = useState("");

  let errMsg;


 
  const register = async(e) => {
      const authentication = getAuth();
      e.preventDefault()

        createUserWithEmailAndPassword(authentication, email, password)
        .then((response)=>{
          console.log(response)
        });

        const docRef= await addDoc(collection(db, "SignUp"), {
          Firstname: firstName,
          Lastname: lastName,
          Email: email,
          Password: password,
          Confirm_Password: cPass,
        });      

      const fName = document.querySelector('#firstName1');
      const lName = document.querySelector('#lastName1');
      const u_email = document.querySelector("#email1");
      const u_password = document.querySelector("#password1");
      const u_cPass = document.querySelector('#Cpassword1');

    if (!firstName) {
      alert.error("Please input your first name");
      fName.focus();
      errMsg = false;
    } 
    else if(!lastName){
      alert.error("Please input your last name");
      lName.focus();
      errMsg = false;
    }
    else if(!email){
      alert.error("Please input your email");
      u_email.focus();
      errMsg = false;
    }
    else if (password === "") {
      alert.error("Please provide your password!");
      u_password.focus();
      errMsg = false;
    }
    else if (password.value <= 7) {
      alert.error("Your password must have 8 characters or greater");
      u_password.focus();
      errMsg = false;
    }
    else if (cPass === ""){
      alert.error("Please provide your password!");
      u_cPass.focus();
      errMsg = false;
    }
    else if (
      typeof password !== "undefined" && 
      typeof cPass !== "undefined"
    ) {
      if (password != cPass) {
          alert.error("Passwords don't match");
          u_cPass.focus();
          errMsg = false;
      }
    
      else {
        navigate("/");
        alert.show("You've signed up successfully. Proceed to login");
        errMsg = true;
      }
    }
    return errMsg;
  };

   
  const classes = useStyles();
  return (
    // <div>
    // <div>
    //   <Navbar/>
    // </div>
   
    <div className={classes.outer} >
      <div className={classes.paper}>
        <div className={classes.title}>
        <Typography component="h2" variant="h5">
          Sign Up
        </Typography>
        </div>
        {/* <form className={classes.form} onSubmit={handleSubmit(onSubmit)}> */}
       
 
        <form className={classes.form} >
 
          <Grid  container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                value={firstName}
                fullWidth
                id="firstName1"
                label="First Name"
                
                className={classes.detail}

                onChange={(event) => {
                  
                  setfirstName(event.target.value);
                  
                  
                }}
                autoFocus
                // {...register("firstName", {required: true})}
              />
              
             
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={lastName}
                fullWidth
                id="lastName1"
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
                value={email}
                fullWidth
                id="email1"
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
                value={password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password1"
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
                value={cPass}
                fullWidth
                name="Cpass"
                label="Confim Password"
                type="password"
                id="Cpassword1"
                autoComplete="current-password"
                className={classes.detail}
                onChange={(event) => {
                  setcPass(event.target.value);
                }}
              
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
            <Link to='/'>
                Already have an account? Sign in
            </Link>
          </Grid>
         
         
        </form>
      </div>
    </div>
 
  // </div>
  );
}
export default SignUp;
 

