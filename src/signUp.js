import{useState} from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
 
 
 
 
 
 
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
 
  
 
 
 
  const [firstName, setfirstName] = useState(""); 
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cPass, setcPass] = useState("");

  const onF = () => [setfirstName, setlastName, setemail, setpassword, setcPass];
  
  
 
 
 
  const regUser = async(e) => {
      const authentication = getAuth();
      e.preventDefault()


      if((firstName && lastName && email && password && cPass) == 0) {
        alert("check your details");
      }
      else if (password !== cPass){
        alert("enter the same password for confirmation");
      }
      else{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((response)=>{
          console.log(response)
        })

        const docRef= await addDoc(collection(db, "SignUp"), {
          Firstname: firstName,
          Lastname: lastName,
          Email: email,
          Password: password,
          Confirm_Password: cPass,
        });

        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
        console.log(cPass);
        console.log("Document written with ID: ", docRef.id);

        alert("submitted");
      }


      
      
      
      // if (password === cPass) {
      //   alert("matched");
      // }
      // else{ 
      //    alert("confirm password should match password");
      // } 


    
    
  };


 
  
  const classes = useStyles();
  return (
   
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

                onClick={onF}




                onChange={(event) => {
                  
                  setfirstName(event.target.value);
                  
                  
                }}
                autoFocus
                // {...register("firstName", {required: true})}
              />
                {firstName ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
              
             
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




                onClick={onF}
                // {...register("lastName", {required: true})}
              />
              {lastName ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
              
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
 
                // {...register("email", {required: true})}
                onClick={onF}
              />
              {email ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
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
 
                // {...register("password", {required: true, minLength: 10})}
 
                onClick={onF}
              />
              {password ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
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
                onClick={onF}
                // {...register("Cpass", {required: true, minLength: 10})}
              />
              {cPass ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
            </Grid>
          </Grid>
 
         
            <Button
              onClick={regUser}
              
              
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Join Now
            </Button>
         
         
          <Grid item className={classes.link}>
            <Link to='/login'>
                Already have an account? Sign in
            </Link>
          </Grid>
         
         
        </form>
      </div>
    </div>
 
 
  );
}
export default SignUp;
 

