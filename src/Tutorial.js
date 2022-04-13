import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from  '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/Styles';

const tutorialStyles = makeStyles((theme) => ({
    outer: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'yellow',
    },
    video_responsive: {
        alignItems: 'center',
        fontSize: 'medium',
    },
    title: {
        padding: '1%',
    },
    description: {
        padding: '1em',
    },
}));

const Tutorial = ({embedId}) => {
    const classes = tutorialStyles();
    return(
        <div className={classes.outer}>
        <h1 className={classes.title} >Sign</h1>
        <h3 className={classes.description}>sign for "" in Indian Sign Language</h3>
        <div className={classes.video_responsive}>    
            <iframe
            src={`https://www.youtube.com/embed/${embedId}`} 
            allowfullscreen>
            </iframe>    
        </div>
        <Box m={2} pt={3}>
        <Button variant='contained'  href='#contained-buttons' >Take the Assessment</Button>
        </Box>
        <Box m={2} pt={3}>
        <Button variant='contained'  href='#contained-buttons' >Go Back to courses</Button>
        </Box>
        </div>
    );

}
Tutorial.propTypes = {
    embedId: PropTypes.string.isRequired
};


export default Tutorial;
