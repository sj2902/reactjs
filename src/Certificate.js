import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = makeStyles((theme) => ({
    outer: {
        backgroundImage: "url('https://source.unsplash.com/Xaanw0s0pMk')",
        height: '100vh',
        width: '100vw',
        
        
    },
    content: {
        margin: '10%',
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

function Certificate(){
    const classes= styles();
    return(
        <div className={classes.outer}>
            <h1 className={classes.content}>Congratulations on completing this tutorial</h1>
            <div className={classes.buttons}>
                <Link to="/achievements">
                    <Button variant="contained">View Achievements</Button>
                </Link>
                <Button variant="contained">Next Tutorial</Button>
                
            </div>
        </div>
    );
}

export default Certificate;