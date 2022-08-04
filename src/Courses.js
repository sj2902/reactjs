import React,{useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import { getAuth } from 'firebase/auth';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Navbar from './navCourses';
// import {UserContext} from './UserContext';




const courseStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '300px',
    },
    paper: {
        height: '220px',
        width: '220px',
    },
    control: {
        padding: theme.spacing(2),
    },
    outer: {
        backgroundColor: '#ded9d9',
        height: '270vh',
        width: '100vw',
        
       
    },
    title: {
        backgroundColor: '#F0F8FF',
        marginBottom: '6%',
        
    },


    buttons: {
        padding: '2%',
        backgroundColor: 'aquamarine',
        display: 'flex',
        justifyContent: 'center',
        gap: '900px',

        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gap: '20px',
          },

    }
    
})
);
const Courses=({setUser, user})=> {
    const [spacing,] = React.useState(10);
    const classes = courseStyles();
    // console.log(user.Firstname);
    // const msg = useContext(UserContext);
    


    // const auth = getAuth();
    // const user = auth.currentUser;
    // if (user !== null) {
    // // The user object has basic properties such as display name, email, etc.
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;

    // // The user's ID, unique to the Firebase project. Do NOT use
    // // this value to authenticate with your backend server, if
    // // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    // console.log(email);
    // }

    
    
    return(
        <div>
            <div>
                <Navbar />
            </div>

            {/* <div>
                {msg}
            </div> */}


           
        
        <div className={classes.outer} component="main">
            <h1>Welcome {user?.Firstname} !</h1>

        

        <div className={classes.title}>
            <Typography component="h1" variant="h5">
            Courses
            </Typography>
        </div>
        

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/alphabets">
                    <img src='https://source.unsplash.com/Rd01U0tPmQI' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Alphabets
                    </Typography>
            </Grid>
          ))}
           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/numbers">
                    <img src='https://source.unsplash.com/GQ327RPuxhI' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Numbers
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="#">
                    <img src='https://source.unsplash.com/dCC7LtjU1WA' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Week Days
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="#">
                    <img src='https://source.unsplash.com/qQWV91TTBrE' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Animals
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="#">
                    <img src='https://source.unsplash.com/HlNcigvUi4Q' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Food
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="#">
                    <img src='https://source.unsplash.com/aqpRqg_jI3c' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Directions
                    </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      
    </Grid>




        </div>
        </div>
    );
}


export default Courses;
