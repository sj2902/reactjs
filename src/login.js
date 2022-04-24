import{useState} from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {useForm} from 'react-hook-form';




















const loginStyles = makeStyles((theme) => ({
  
  outer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center', 
    backgroundColor: '#ded9d9',
    height: '100vh',
    width: '100vw',
    
  },
  
  paper: {
    color: 'black',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '200px',
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#D2938F',
    width: '50%',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '5%'
    
  },
  detail: {
    backgroundColor: 'white',
    color: 'black',
  },
  link: {
    
    marginTop: '4%',
    marginLeft: '15%',
    marginRight: '27%',
    color: 'black',
  }
}));

function Login() {
  const classes = loginStyles();


  




  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const onF = () => [setLoginEmail, setLoginPassword];

  const Signin = async(e) => {
    const authentication = getAuth();
    e.preventDefault()
    
    signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
    .then((response)=>{
      console.log(response)
    })
  }  
  


  return (
    <div className={classes.outer}>
      <CssBaseline/>
      <div className={classes.paper}>
        <div className={classes.title}>
        <Typography component="h1" variant="h5">
         Login
        </Typography>
        </div>
        <form className={classes.form}>
        {/* <form className={classes.form} noValidate 
              onSubmit={handleSubmit(onSubmit)}> */}
          
          <Grid  container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={loginEmail}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className= {classes.detail}
                onClick={onF}

                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                

                // {...register("email", {required: true,
                //     pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
                //   // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // })}
                



              />
            {/* {errors.email && <p >mandatory field. Also check the email format</p>} */}

            {loginEmail ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={loginPassword}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className= {classes.detail}


                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                
                // {...register("password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/})}




              />
              {loginPassword ? null 
                  : <div className={classes.message}>Mandatory Field</div>
                }
            </Grid>
            {/* {errors.password && <p>should contain one Capital Letter, one Small Letter, and the number of characters should be between 8 to 15</p>} */}
          </Grid>
           
          <Button
            onClick={Signin}



            type="submit"
            variant="contained"
            className={classes.submit}
          >
              Log In
          </Button>
           
          
          <Grid container justifyContent="flex-end">
            <Grid item className={classes.link}>
 
              <Link to="/signup">
                Don't have an account? sign up
              </Link>
            </Grid>
          </Grid>
        </form>


      </div>
    </div>
    
  );
}
export default Login;