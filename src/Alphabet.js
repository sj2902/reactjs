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
 
  // collist: {
  //   backgroundColor: "red"
  // }
}));


function PersistentDrawerLeft({setUser, user}){
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [alphabet, setAlphabet]= useState(0);
  const [video, setVideo]= useState([]);
  const[show, setShow] = useState(false);
  const [email, setEmail] =useState("");
  const [progress, setProgress] = useState({});

  const u_email = user.Email;
  var user_e = u_email;

  useEffect(()=>{
    setEmail(localStorage.getItem('user'))
  },[])
 
  const docRef = doc (db, 'VideoOutput', user_e)
  onSnapshot(docRef,(doc)=> {
    // console.log(doc.data());
    setProgress(doc.data());
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
   
    navigate("/assessment",{state: {alphabet: alphabet}});
    // navigate("/assessment");
  };

  const achieve = () => {
    navigate("/achievements",{state: {progress: progress,alphabet: alphabet}});
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
            ALPHABETS
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
            <ListItem button key={item.name} >
              <ListItemIcon>{index % 2 === 0 ? item.icon : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.collist}>
        {[{name:"A (one)" , icon:<FiberManualRecordIcon/>,id:"A_one", link:"https://www.youtube.com/embed/U3V4BrLMtY0"},
          {name:"A (two)",icon:<FiberManualRecordIcon/>,id:"A_two", link:"https://www.youtube.com/embed/qJnXqkzA8ZI"},
          {name:"B (one)",icon:<FiberManualRecordIcon/>,id:"B_one", link:"https://www.youtube.com/embed/n_vC-maYVI8"},
          {name:"B (two)",icon:<FiberManualRecordIcon/>,id:"B_two", link:"https://www.youtube.com/embed/faGCD6Gyq3Q"},
          {name:"C",icon:<FiberManualRecordIcon/>,id:"C", link:"https://www.youtube.com/embed/RWIa5QJ0Dgo"},
          {name:"D",icon:<FiberManualRecordIcon/>,id:"D", link:"https://www.youtube.com/embed/QU-tAidu86c"},
          {name:"E",icon:<FiberManualRecordIcon/>,id:"E", link:"https://www.youtube.com/embed/a5AO2uz4mMA"},
          {name:"F",icon:<FiberManualRecordIcon/>,id:"F", link:"https://www.youtube.com/embed/jNzLIwnz4Yw"},
          {name:"G",icon:<FiberManualRecordIcon/>,id:"G", link:"https://www.youtube.com/embed/Mg7qpxeZ8vU"},
          {name:"H",icon:<FiberManualRecordIcon/>,id:"H", link:"https://www.youtube.com/embed/Xjl7ngXIm-8"},
          {name:"I (one)",icon:<FiberManualRecordIcon/>,id:"I_one", link:"https://www.youtube.com/embed/5Fns4B242BE"},
          {name:"I (two)",icon:<FiberManualRecordIcon/>,id:"I_two", link:"https://www.youtube.com/embed/CpDijOM9v_0"},
          {name:"J",icon:<FiberManualRecordIcon/>,id:"J", link:"https://www.youtube.com/embed/ivLdsgncl8U"},
          {name:"K",icon:<FiberManualRecordIcon/>,id:"K", link:"https://www.youtube.com/embed/oKh6NQH_m4M"},
          {name:"L",icon:<FiberManualRecordIcon/>,id:"L", link:"https://www.youtube.com/embed/GNQ9aKKgd0M"},
          {name:"M",icon:<FiberManualRecordIcon/>,id:"M", link:"https://www.youtube.com/embed/kppGRRqlTOU"},
          {name:"N",icon:<FiberManualRecordIcon/>,id:"N", link:"https://www.youtube.com/embed/yyyhBlsEkhk"},
          {name:"O (one)",icon:<FiberManualRecordIcon/>,id:"O_one", link:"https://www.youtube.com/embed/KKLGQM_f6DQ"},
          {name:"O (two)",icon:<FiberManualRecordIcon/>,id:"O_two", link:"https://www.youtube.com/embed/4Ott54uzYyg"},
          {name:"P",icon:<FiberManualRecordIcon/>,id:"P", link:"https://www.youtube.com/embed/XqX-tBuDoTY"},
          {name:"Q",icon:<FiberManualRecordIcon/>,id:"Q", link:"https://www.youtube.com/embed/AS6y3hQk3vA"},
          {name:"R",icon:<FiberManualRecordIcon/>,id:"R", link:"https://www.youtube.com/embed/4_G0_gKSweQ"},
          {name:"S",icon:<FiberManualRecordIcon/>,id:"S", link:"https://www.youtube.com/embed/uYr6fo207Os"},
          {name:"T (one)",icon:<FiberManualRecordIcon/>,id:"T_one", link:"https://www.youtube.com/embed/OFTO4KSZte0"},
          {name:"T (two)",icon:<FiberManualRecordIcon/>,id:"T_two", link:"https://www.youtube.com/embed/HPRq7CjnW5w"},
          {name:"U (one)",icon:<FiberManualRecordIcon/>,id:"U_one", link:"https://www.youtube.com/embed/fxzWvNbCbSY"},
          {name:"U (two)",icon:<FiberManualRecordIcon/>,id:"U_two", link:"https://www.youtube.com/embed/3KDGDTmTg7s"},
          {name:"V",icon:<FiberManualRecordIcon/>,id:"V", link:"https://www.youtube.com/embed/pwRU7eZRlNY"},
          {name:"W",icon:<FiberManualRecordIcon/>,id:"W", link:"https://www.youtube.com/embed/qSIIH4hf5iY"},
          {name:"X",icon:<FiberManualRecordIcon/>,id:"X", link:"https://www.youtube.com/embed/6hxO8G5Gyng"},
          {name:"Y",icon:<FiberManualRecordIcon/>,id:"Y", link:"https://www.youtube.com/embed/EYAKgX-zPe0"},
          {name:"Z",icon:<FiberManualRecordIcon/>,id:"Z", link:"https://www.youtube.com/embed/B93Ys7VI7Lk"},].map((item, index) => (
            
            <ListItem button key={item.name}  onClick={() => {
            setAlphabet(item.id); 
            // setSign(item.id);
            // console.log(item.id);
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
        <div className={classes.outer} >
          <iframe width="760px" height="500px" src={video} className={classes.frame} allowFullScreen></iframe>
          {
            show? <div className={classes.btn}>
                    <Button onClick={takeTest}> Assessment </Button>
                  </div>:null
          }
        </div>
        {/* <Link
          to={{
            pathname: "/certificate",
            
            // state: { alphabet: alphabet}
          }}
        >
          view your certificate</Link> */}
          {/* <Link  to={{pathname: "https://docs.google.com/forms/d/e/1FAIpQLScQk-Mfqb2uwXDnx8nbUuPMB_IoLcGf4LplrPbg9CTOGNAoCA/viewform"}} target="_blank" >Help</Link> */}
          {/* <a href="https://forms.gle/cmb9xfjm6FFM4V2J9" target="_blank" >Help</a> */}
        
    </div>
  );
}
export default PersistentDrawerLeft;