import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { getDocs,collection, onSnapshot,doc } from 'firebase/firestore';
import {db} from './firebase';
import Navbar from "./navTuto";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  btn:{
    backgroundColor: '#FF6F6F',
    width: '50%',
    marginTop :'5%',
    marginRight: '25%',
    marginLeft: '25%',
    textAlign: 'center'
  },
  frame:{
    '@media (max-width: 760px)':{
      width: "700px",
      height: "500px",
      
    },
    '@media (max-width: 700px)':{
      width: "650px",
      height: "500px",
      
    },
    '@media (max-width: 650px)':{
      width: "600px",
      height: "500px",
      
    },
    '@media (max-width: 600px)':{
      width: "550px",
      height: "500px",
      
    },
    '@media (max-width: 550px)':{
      width: "500px",
      height: "500px",
      
    },
    '@media (max-width: 500px)':{
      width: "450px",
      height: "500px",
      
    },
    '@media (max-width: 450px)':{
      width: "400px",
      height: "500px",
      
    },
    '@media (max-width: 400px)':{
      width: "350px",
      height: "400px",
      
    }
  },
  options: {
    display: "grid",
    gridGap: "1px",
    marginLeft: "70%",
    justfiyContent: "right",
    alignContent: "right",

    
  },
 
}));


function PersistentDrawer({setUser, user}){
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [number, setNumber]= useState(0);
  const [video, setVideo]= useState([]);
  const[show, setShow] = useState(false);
  const [email, setEmail] =useState("");
  const [numProgress, setNumProgress] = useState({});

  const u_email = user.Email;
  var user_e = u_email;

  useEffect(()=>{
    setEmail(localStorage.getItem('user'))
  },[]);

  const docRef = doc (db, 'VideoOutput', user_e)
  onSnapshot(docRef,(doc)=> {
    // console.log(doc.data());
    setNumProgress(doc.data());
    // if (doc.data().A_two == "Pass"){
    //   navigate("/certificate");
    // }
    // else{
    //   console.log("fails")
    // }
  })

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const takeTest = () => {
    navigate("/assessment",{state: {number: number}});
  };

  const achieve = () => {
    navigate("/achievements",{state: {numProgress: numProgress,number: number}});
  };

  const gotocourses = () => {
    navigate("/courses");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            NUMBERS
          </Typography>
          <div className={classes.options}>
          <Button variant="contained" size="small">
          <a href="https://forms.gle/cmb9xfjm6FFM4V2J9" target="_blank" >Support</a>
          </Button>
          <Button variant="outlined" size="small" onClick={achieve}>
            Achievements
          </Button>
          <Button variant="contained" size="small" onClick={gotocourses}>Courses</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{name:"home",icon:<HomeIcon/>}].map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemIcon>{index % 2 === 0 ? item.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        {[{name:"0",icon:<FiberManualRecordIcon/>,id:"zero", link:"https://www.youtube.com/embed/BzCTjQht4g0"},
          {name:"1",icon:<FiberManualRecordIcon/>,id:"one", link:"https://www.youtube.com/embed/NS29lGEqUs8"},
          {name:"2",icon:<FiberManualRecordIcon/>,id:"two", link:"https://www.youtube.com/embed/TutvHZU4rCE"},
          {name:"3",icon:<FiberManualRecordIcon/>,id:"three", link:"https://www.youtube.com/embed/4s-tDPcu048"},
          {name:"4",icon:<FiberManualRecordIcon/>,id:"four", link:"https://www.youtube.com/embed/hiVPVSUvMlA"},
          {name:"5",icon:<FiberManualRecordIcon/>,id:"five", link:"https://www.youtube.com/embed/DJ7rYmT1Q7Y"},
          {name:"6 (one)",icon:<FiberManualRecordIcon/>,id:"six_one", link:"https://www.youtube.com/embed/edcUZhYo3fs"},
          {name:"6 (two)",icon:<FiberManualRecordIcon/>,id:"six_two", link:"https://www.youtube.com/embed/9swRRNYlC5g"},
          {name:"7 (one)",icon:<FiberManualRecordIcon/>,id:"seven_one", link:"https://www.youtube.com/embed/EmzDPaRHsO4"},
          {name:"7 (two)",icon:<FiberManualRecordIcon/>,id:"seven_two", link:"https://www.youtube.com/embed/_i-SsdDW2Yg"},
          {name:"8 (one)",icon:<FiberManualRecordIcon/>,id:"eight_one", link:"https://www.youtube.com/embed/Wv5DcDjGPcQ"},
          {name:"8 (two)",icon:<FiberManualRecordIcon/>,id:"eight_two", link:"https://www.youtube.com/embed/AXRAn0CPUZg"},
          {name:"9 (one)",icon:<FiberManualRecordIcon/>,id:"nine_one", link:"https://www.youtube.com/embed/Gj1nzM1rSHY"},
          {name:"9 (two)",icon:<FiberManualRecordIcon/>,id:"nine_two", link:"https://www.youtube.com/embed/AL5kaBVVIHY"},
          {name:"10 (one)",icon:<FiberManualRecordIcon/>,id:"ten_one", link:"https://www.youtube.com/embed/T2aSjchxtx0"},
          {name:"10 (two)",icon:<FiberManualRecordIcon/>,id:"ten_two", link:"https://www.youtube.com/embed/7pVpywbW928"},].map((item, index) => (
            <ListItem 
              button key={item.name}  
              onClick={() => {
                setNumber(item.id); 
                setVideo(item.link);  
                setShow(true);
              }}>
              <ListItemIcon>{index % 2 === 0 ? item.icon:< FiberManualRecordIcon/>}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
          </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      > */}
        
        {/* <div className={classes.drawerHeader} />
        <Typography paragraph>
        An alphabet is a standardized set of basic written symbols or letters that represent the phonemes of certain spoken languages.
        </Typography>
        <Typography paragraph>
        The English Alphabet consists of 26 letters: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.
          </Typography> */}
        {/* </main> */}
        <div className={classes.outer}>
          <iframe width="760" height="500" src={video} className={classes.frame}  allowFullScreen></iframe>
          {
            show? <div className={classes.btn}>
                    <Button onClick={takeTest}> Assessment </Button>
                  </div>:null
          }
          
        </div>
    </div>
  );
}
export default PersistentDrawer;