import React from 'react';
import {useState} from 'react';
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


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    width: '25%',
    marginTop :'30%',
    textAlign: 'center'
  }
}));


function PersistentDrawerLeft(){
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [alphabet, setAlphabet]= useState(0);
  const [video, setVideo]= useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
          {[{name:"A (one)",icon:<FiberManualRecordIcon/>,id:1, link:"https://www.youtube.com/embed/U3V4BrLMtY0"},
          {name:"A (two)",icon:<FiberManualRecordIcon/>,id:1, link:"https://www.youtube.com/embed/qJnXqkzA8ZI"},
          {name:"B (one)",icon:<FiberManualRecordIcon/>,id:2, link:"https://www.youtube.com/embed/n_vC-maYVI8"},
          {name:"B (two)",icon:<FiberManualRecordIcon/>,id:2, link:"https://www.youtube.com/embed/faGCD6Gyq3Q"},
          {name:"C",icon:<FiberManualRecordIcon/>,id:3, link:"https://www.youtube.com/embed/eVd9jXiTrM4"},
          {name:"D",icon:<FiberManualRecordIcon/>,id:4, link:"https://www.youtube.com/embed/QU-tAidu86c"},
          {name:"E (one)",icon:<FiberManualRecordIcon/>,id:5, link:"https://www.youtube.com/embed/dmt16zwUwkI"},
          {name:"E (two)",icon:<FiberManualRecordIcon/>,id:5, link:"https://www.youtube.com/embed/CT_6Aul1yD8"},
          {name:"F",icon:<FiberManualRecordIcon/>,id:6, link:"https://www.youtube.com/embed/jNzLIwnz4Yw"},
          {name:"G",icon:<FiberManualRecordIcon/>,id:7, link:"https://www.youtube.com/embed/Mg7qpxeZ8vU"},
          {name:"H",icon:<FiberManualRecordIcon/>,id:8, link:"https://www.youtube.com/embed/Xjl7ngXIm-8"},
          {name:"I (one)",icon:<FiberManualRecordIcon/>,id:9, link:"https://www.youtube.com/embed/Wyyfwj5buM0"},
          {name:"I (two)",icon:<FiberManualRecordIcon/>,id:9, link:"https://www.youtube.com/embed/CpDijOM9v_0"},
          {name:"J",icon:<FiberManualRecordIcon/>,id:10, link:"https://www.youtube.com/embed/ivLdsgncl8U"},
          {name:"K",icon:<FiberManualRecordIcon/>,id:11, link:"https://www.youtube.com/embed/oKh6NQH_m4M"},
          {name:"L",icon:<FiberManualRecordIcon/>,id:12, link:"https://www.youtube.com/embed/GNQ9aKKgd0M"},
          {name:"M",icon:<FiberManualRecordIcon/>,id:13, link:"https://www.youtube.com/embed/kppGRRqlTOU"},
          {name:"N",icon:<FiberManualRecordIcon/>,id:14, link:"https://www.youtube.com/embed/yyyhBlsEkhk"},
          {name:"O (one)",icon:<FiberManualRecordIcon/>,id:15, link:"https://www.youtube.com/embed/KKLGQM_f6DQ"},
          {name:"O (two)",icon:<FiberManualRecordIcon/>,id:15, link:"https://www.youtube.com/embed/hFM2DeYi62E"},
          {name:"P",icon:<FiberManualRecordIcon/>,id:16, link:"https://www.youtube.com/embed/q-J0yQN226U"},
          {name:"Q",icon:<FiberManualRecordIcon/>,id:17, link:"https://www.youtube.com/embed/AS6y3hQk3vA"},
          {name:"R",icon:<FiberManualRecordIcon/>,id:18, link:"https://www.youtube.com/embed/4_G0_gKSweQ"},
          {name:"S",icon:<FiberManualRecordIcon/>,id:19, link:"https://www.youtube.com/embed/uYr6fo207Os"},
          {name:"T",icon:<FiberManualRecordIcon/>,id:20, link:"https://www.youtube.com/embed/dtHyUeOmwbk"},
          {name:"U (one)",icon:<FiberManualRecordIcon/>,id:21, link:"https://www.youtube.com/embed/fxzWvNbCbSY"},
          {name:"U (two)",icon:<FiberManualRecordIcon/>,id:21, link:"https://www.youtube.com/embed/l2rTK5h2dPU"},
          {name:"V",icon:<FiberManualRecordIcon/>,id:22, link:"https://www.youtube.com/embed/pwRU7eZRlNY"},
          {name:"W",icon:<FiberManualRecordIcon/>,id:23, link:"https://www.youtube.com/embed/qSIIH4hf5iY"},
          {name:"X",icon:<FiberManualRecordIcon/>,id:24, link:"https://www.youtube.com/embed/6hxO8G5Gyng"},
          {name:"Y",icon:<FiberManualRecordIcon/>,id:25, link:"https://www.youtube.com/embed/EYAKgX-zPe0"},
          {name:"Z",icon:<FiberManualRecordIcon/>,id:26, link:"https://www.youtube.com/embed/B93Ys7VI7Lk"},].map((item, index) => (
            <ListItem button key={item.name}  onClick={() => {setAlphabet(item.id); setVideo(item.link)}}>
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
        <div>
          <iframe width="760" height="500" src={video} allowfullscreen></iframe>
          <div className={classes.btn}>
            <Button > Assesment </Button>
          </div>
        </div>
    </div>
  );
}
export default PersistentDrawerLeft;