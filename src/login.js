import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const loginStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#ded9d9',
    width: '100%',
    minHeight: '100vh',
    // padding: '20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: '#D2938F',
  },
  detail: {
    backgroundColor: 'white',
  },
}));

function Login() {
  const classes = loginStyles();
  return (
    <div className={classes.main}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
         Log In
        </Typography>
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
              <Link href="#" variant="body2">
                Don't have an account? sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  </div>
  );
}
export default Login;