import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import Image from 'react-image-resizer';
import ISL from './isl.jpg';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
 
 
const aboutStyles = makeStyles((theme) => ({
    outer: {
        padding: '20px',
        backgroundColor: '#ded9d9',
        height: '100vh',
        minWidth: '200px',
    },
    app: {
        fontWeight: "normal",
        marginBottom: "50px",
       
    },
    img: {
        borderRadius: "150%",
        height: "120px",
 
    },
    para: {
        textAlign: "center",
        fontSize: "large",
 
    },
    center: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "30%",
        borderRadius: "150%",
        height: "200px",
      },
 
 
   
}));
 
function About() {
    const classes = aboutStyles();
    const navigate = useNavigate();

    const back = () => {
        navigate("/courses");
    };
    return(
       
        <div className={classes.outer}>
           
 
        {/* <Typography componet="h1" variant="h5">
            MACHINE LEARNING BASED LEARNING PLATFORM FOR INDIAN SIGN LANGUAGE
        </Typography> */}
        <Button onClick={back}>Back</Button>
        <h1 className={classes.app}>SIGNOPEDIA</h1>
        <img className={classes.center}
          img src={ISL} alt="ISL"
          height={350}
          width={700}
        />
        <p className={classes.para}>
            In January 1999, the Ramakrishna Mission  (an organisation)  standardized the  Indian Sign  Language. November 24, 2001 became an   important day for  Persons with hearing  impairment in India. In an august gathering, the first 'Indian Sign Language Dictionary' was released.
            It was Sibaji Panda, a deaf teacher,  who created and introduced the first-ever  formal training course in ISL.
        </p>
 
       
        </div>
       
    );
}
 
export default About;
