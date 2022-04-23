import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GradeIcon from '@material-ui/icons/Grade';



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
        height: '250vh',
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
function Courses() {
    const [spacing,] = React.useState(10);
    const classes = courseStyles();

    
    
    return(
        <div className={classes.outer} component="main">

        <div className={classes.buttons}>
        
        <div className={classes.back}>
            <Link to="/achievements">
                <Button 
                    variant="contained"
                    color="secondary"
                    startIcon={<GradeIcon />}
                >
                    Achievements
                </Button>
            </Link>
        </div>

        <div className={classes.back}>
            <Link to="/login">
                <Button 
                    size='small'
                    variant='contained'
                    color="primary"
                    endIcon={<ExitToAppIcon />} 
                >
                    Log Out
                </Button> 
            </Link>
        </div>

        </div>

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
                    <Link to="/tutorial">
                    <img src='https://source.unsplash.com/Rd01U0tPmQI' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Alphabets
                    </Typography>
            </Grid>
          ))}
           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/tutorial">
                    <img src='https://source.unsplash.com/GQ327RPuxhI' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Numbers
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/tutorial">
                    <img src='https://source.unsplash.com/dCC7LtjU1WA' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Week Days
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/tutorial">
                    <img src='https://source.unsplash.com/qQWV91TTBrE' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Animals
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/tutorial">
                    <img src='https://source.unsplash.com/HlNcigvUi4Q' alt="img" className={classes.paper}></img>
                    </Link>
                    <Typography  variant="h6">
                        Food
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                    <Link to="/tutorial">
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
    );
}


export default Courses;
