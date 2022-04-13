import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
 





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

function Trial() {
  const classes = loginStyles();
  

  // const initialValues = {email: "" , password: ""};
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const handleChange = (e) => {
  //   console.log(e.target);
  //   const {name, value} =e.target;
  //   setFormValues({...formValues, name: value});
  //   console.log(formValues);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  // }
  // const validate = (values) => {
  //   const errors = {}
  //   const regex = 
  // }


  return (
    <div className={classes.outer}  maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <div className={classes.title}>
        <Typography component="h1" variant="h5">
         Login
        </Typography>
        </div>
        <form className={classes.form} noValidate>
          
          <Grid  container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className= {classes.detail}
                // value={formValues.email}
                // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className= {classes.detail}
                // value={formValues.password}
                // onChange={handleChange}
              />
            </Grid>
        
          </Grid>
           
          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
          >
              Log In
          </Button>
           
          
          <Grid container justifyContent="flex-end">
            <Grid item className={classes.link}>
 
              <a href="#">
                Don't have an account? sign up
              </a>
            </Grid>
          </Grid>
        </form>


      </div>
    </div>
    
  );
}
export default Trial;