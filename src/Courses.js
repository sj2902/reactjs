import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';



const courseStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        overflowY: 'hidden',
       
    },
    title: {
        backgroundColor: '#F0F8FF',
        marginBottom: '6%',
        
    },
    back: {
        textAlign: 'right',
        marginRight: '2%',
        marginTop: '2%',
        marginBottom: '2%',
        
    },
    look: {
        backgroundColor: '#fc12fc',
    },
})
);
function Courses() {
    const [spacing, setSpacing] = React.useState(10);
    const classes = courseStyles();

    
    
    return(
        <div className={classes.outer} component="main" maxWidth="xs">
        
        <div className={classes.back}>
        <Button  size='small' variant='contained' className={classes.look}>Log Out</Button>
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
                
                    <img src='https://source.unsplash.com/Rd01U0tPmQI' className={classes.paper}></img>
                    <Typography  variant="h6">
                        Alphabets
                    </Typography>
            </Grid>
          ))}
           {[0].map((value) => (
            
            <Grid key={value} item >
                
                    <img src='https://source.unsplash.com/GQ327RPuxhI' className={classes.paper}></img>
                    <Typography  variant="h6">
                        Numbers
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                
                    <img src='https://source.unsplash.com/dCC7LtjU1WA' className={classes.paper}></img>
                    <Typography  variant="h6">
                        Week Days
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                
                    <img src='https://source.unsplash.com/qQWV91TTBrE' className={classes.paper}></img>
                    <Typography  variant="h6">
                        Animals
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                
                    <img src='https://source.unsplash.com/HlNcigvUi4Q' className={classes.paper}></img>
                    <Typography  variant="h6">
                        Food
                    </Typography>
            </Grid>
          ))}


           {[0].map((value) => (
            
            <Grid key={value} item >
                
                    <img src='https://source.unsplash.com/aqpRqg_jI3c' className={classes.paper}></img>
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

const itemData = [
    {
      img: 'https://source.unsplash.com/Rd01U0tPmQI',
      title: 'Alphabets',
    },
    {
        img: 'https://source.unsplash.com/GQ327RPuxhI',
        title: 'Numbers',
    },
    {
        img: 'https://source.unsplash.com/dCC7LtjU1WA',
        title: 'week',
    },
    {
        img: 'https://source.unsplash.com/qQWV91TTBrE',
        title: 'animals',
    },
    {
        img: 'https://source.unsplash.com/HlNcigvUi4Q',
        title: 'food',
    },
    {
        img: 'https://source.unsplash.com/aqpRqg_jI3c',
        title: 'directions',
    },
  ];

export default Courses;
