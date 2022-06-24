import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import {useLocation} from 'react-router-dom';

const styles = makeStyles((theme) => ({
    outer: {
        backgroundImage: "url('https://source.unsplash.com/Xaanw0s0pMk')",
        height: '100vh',
        width: '100vw',
        
        
    },
    content: {
        margin: '5%',
        fontStyle: 'italic',
        backgroundColor: '#f5f5f5',
        padding: '10px',
        border: '2px solid #f5f5f5',
        borderRadius: '40px',
    },
    buttons: {
        display: 'flex',
        padding: '90px',
        justifyContent: 'center',
        gap: '160px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gap: '60px'
          },

    },
}));

const Certificate = ({setUser, user}) => {
    const classes= styles();
    const location = useLocation();
    // const sign_name =location.state.alphabet;
    // console.log(location);
    // console.log(user);
    // console.log(sign);
    return(

        
            
        <div className={classes.outer}>
            {/* <div>
                <Navbar />
            </div> */}
        
            <h1 className={classes.content}>
                CERTIFICATE
                
                
                <br></br>
                This certificate is proudly presented to
                <br></br>
                <br></br>
                {user?.Firstname} {user?.Lastname}
                <hr></hr>
                <br></br>
                for your outstanding success in completing a course for learning the Indian Sign Language
                </h1>
               
            {/* <div className={classes.buttons}>
                <Link to="/achievements">
                    <Button variant="contained">View Achievements</Button>
                </Link>
                <Button variant="contained">Next Tutorial</Button>
                
            </div> */}
        </div>
        
    );
};

export default Certificate;