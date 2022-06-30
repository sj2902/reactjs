import React , {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useAlert } from "react-alert";
import { useNavigate} from "react-router-dom";
import { UserContext } from './UserContext';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { db } from './firebase';
import { query, where } from "firebase/firestore";






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



const Login = ({setUser, user}) => {
  const navigate = useNavigate();
  const classes = loginStyles();
  const alert = useAlert();

  

  

  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const colRef = collection(db,'SignUp');
  const [num,setNum] = React.useState(0);
 

  // const [user, setUser] = React.useState("")
  
  let errMsg;

//   React.useEffect(() => {
//     if(user){
//       navigate("/courses");
//     }
//     else{
//       navigate("/");
//     }
    
 
// }, []);


  const Signin = async(e) => {
    e.preventDefault();

    const authentication = getAuth();



    
     
    signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
      .then(async(cred)=>{
        console.log("the user logged in:", cred.user.email);
        
        getDocs(colRef)
          .then((snapshot) => {
            let users = []
            let user_id = []
            snapshot.docs.forEach((doc) => {
              
              // console.log(doc.data().Firstname);
              if(doc.data().Email==loginEmail){
                console.log(doc.id)
                // setNum(doc.id)
                setUser(doc.data())
                localStorage.setItem("user",doc.data().Email)
                
                console.log(doc.data());
              }
             
              // users.push({...doc.data(), id: doc.id})
              
            })
            
            
          
        // console.log(cred);
        // navigate("/courses",{state: {num: num}});
        navigate("/courses");
      })
    })
      .catch((err) => {
        if(err.code === 'auth/wrong-password'){
          alert.error('Please check the Password');
        }
        if(err.code === 'auth/user-not-found'){
          alert.error('Please check the Email');
        }
        console.log(err.message);
      })
    
    

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

    if (!loginEmail) {
      alert.error("Please enter your email address");
      emailInput.focus();
      errMsg = false;
    } 
    else if (loginPassword === "") {
      alert.error("Please enter your password!");
      passwordInput.focus();
      errMsg = false;
    }
    
    
   

    
    return errMsg;
  };

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
        

          
          
          <Grid  container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
              type="email"
                variant="outlined"
                value={loginEmail}
                fullWidth
                id="email"
                label="Email Address *"
                name="email"
                autoComplete="email"
                className= {classes.detail}
                

                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
                

                // {...register("email", {required: true,
                //     pattern: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
                //   // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // })}
                



              />
            {/* {errors.email && <p >mandatory field. Also check the email format</p>} */}

            
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={loginPassword}
                fullWidth
                name="password"
                label="Password *"
                type="password"
                id="password"
                autoComplete="current-password"
                className= {classes.detail}


                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
                
                // {...register("password", {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/})}




              />
              
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
    // </div>
  );
}

export default Login;