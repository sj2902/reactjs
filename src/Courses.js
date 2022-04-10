import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
// import LogoutIcon from '@mui/icons-material/Logout';


const courseStyles = makeStyles((theme) => ({
    main: {
        
        backgroundColor: '#ded9d9',
        
        height: '100vh',
    },
    title: {
        margin: theme.spacing(2),
        justifyContent: 'right',
        
    }
})
);
function Courses() {
    const classes = courseStyles();
    return(
        <Container className={classes.main} component="main" maxWidth="xs">
        <CssBaseline />
        <Button  size='small' variant='contained'>Log Out</Button>
        <div className={classes.title}>
            <Typography component="h1" variant="h5">
            Courses
            </Typography>
        </div>
        <div>
            <ImageList sx={{ width: 200, height: 200 }} cols={2} rowHeight={164} gap={20} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        {/* on click history.push to go to next page */}
                        {/* <a href='#'> */}
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                        />
                        
                        {/* </a> */}
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
        </Container>
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

// ?w=164&h=164&fit=crop&auto=format
// ?w=164&h=164&fit=crop&auto=format&dpr=2 2x