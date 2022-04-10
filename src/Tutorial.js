import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from  '@material-ui/core/Box';


const Tutorial = ({embedId}) => {
    return(
        <div>
        <h1 >Sign</h1>
        <h3>sign for "" in Indian Sign Language</h3>
        <div className='video-responsive'>    
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

{/* <iframe
                width="853"
                height="480"
                src={'https://www.youtube.com/embed/${embedId}'}
                frameBorder="0"
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='tutorial video'
                /> */}