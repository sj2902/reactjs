import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const aboutStyles = makeStyles((theme) => ({
    outer: {
        padding: '20px',
        backgroundColor: '#ded9d9',
        height: '100vh',
        minWidth: '200px',
    },
    
}));

function About() {
    const classes = aboutStyles();
    return(
       
        <div className={classes.outer}>
        <Typography componet="h1" variant="h5">
            MACHINE LEARNING BASED LEARNING PLATFORM FOR INDIAN SIGN LANGUAGE
        </Typography>

        <p>
            In January 1999, the Ramakrishna Mission  (an organisation)  standardized the  Indian Sign  Language. November 24, 2001 became an   important day for  Persons with hearing  impairment in India. In an august gathering, the first 'Indian Sign Language Dictionary' was released. 
            It was Sibaji Panda, a deaf teacher,  who created and introduced the first-ever  formal training course in ISL.
        </p>

        
        </div>
        
    );
}

export default About;