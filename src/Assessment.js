import React, {useState} from 'react';
import Webcam from 'react-webcam'; 
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from './firebase';
import { getAuth } from 'firebase/auth';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const assessStyles = makeStyles((theme) => ({

  camera: {
    display: "grid",
    justifyContent: "center",
    margin: '0',
    padding: '0',
  

  },
  
  outer: {
    overflow: 'hidden',
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '120vh',
    width: '100vw',
    marginTop: '25px',

    '@media (min-width: 1016px)':{
      display:'flex',
    }
    
  },
 
  button:{
    borderRadius: '100px',
    width: '120px',
    height: '120px',
    backgroundColor: '#FF6F6F',
    // marginTop: '10px',
    

    '@media (min-width: 1016px)':{
      marginTop: '190px',
      marginLeft: '60px',
    }
  },
  main: {
    overflow: 'hidden',
  }
}));





const WebcamStreamCapture = ({setUser, user}) => {
  

    const location = useLocation();
    const sign_name =location.state.alphabet;
    // const user_id = location.state.num;
    const u_email = user.Email;
    // console.log(user_id);
    // console.log(u_email);
    // console.log(sign);
    const classes = assessStyles();




    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    // const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [counter, setCounter] =React.useState(5);
    const [actionType, setActionType] = useState();



    const [recordCounter, setRecordCounter] = React.useState(20);
    
    const [progress, setProgress] = useState(0);

    const navigate = useNavigate();
    



    const gotocert = () => {
      navigate("/certificate");
    }



    const uploadFiles = () => {
            

      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"

        });
      const url = URL.createObjectURL(blob);


      
      // const email = user.email
      // console.log(email)



      var sign = sign_name;
      var underscore = "_ _";
      var user = u_email;
      // var email = "rawatbips@gmail.com";
      var name= sign + underscore + user;
      
      // console.log(name);

      if (!blob) return;

      const sotrageRef = ref(storage, `files/${user}/${sign}/${name}`);

      const uploadTask = uploadBytesResumable(sotrageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {


          axios.post('http://127.0.0.1:5000/',{headers:{
            "Access-Control-Allow-Origin" : "*"
          }},{params:{"downloadURL" : downloadURL}}).then(res=>{console.log(res.data)})  
            

            console.log("File available at", downloadURL);
            // console.log("the user who has given the assessment is:", email);
            
            // const docRef= addDoc(collection(db, "VideoInput"), {
            //  sign: downloadURL,
            // }); 

            // const colRef = addDoc(collection(db, "VideoOutput"), {
            //   sign: downloadURL,
            // });

            const docRef = doc(db, "VideoInput", "ZhWs7rKtuCc6Ix6ggoMf");
            setDoc(docRef, {[sign] : downloadURL});

            const colRef = doc(db, "VideoOutput", "ZhWs7rKtuCc6Ix6ggoMf");
            setDoc(colRef, {[sign] : downloadURL});


            // console.log(user);


            

          });
        }
      );
    };
  };
      
      React.useEffect(() => {
          const interval = 
          setInterval(() => {
            if (actionType === "start" && counter > 0 && counter <= 5 ) {
              setCounter(counter-1);
              // console.log(counter);
              if (counter >=0 && counter <= 1){
                
                handleStartCaptureClick();
                // console.log( mediaRecorderRef);
                
              };
      //         if (counter >=0){
      //          if( recordCounter > 0 && recordCounter <= 30 ) {
      //           setRecordCounter(recordCounter-1);
      //           handleStartCaptureClick();
      //          };
      //         };
            };
          if(counter == 0 && recordCounter > 0){
            setRecordCounter(recordCounter-1);
            
          };
          if(recordCounter == 0)  {
            handleStopCaptureClick();
          }
            
           
          },
          
          
          1000);
          // if(counter > 5){
          //   handleStartCaptureClick();
          // }
          return() => clearInterval(interval);
      }, [actionType, counter, recordCounter]);



    const handleStartCaptureClick = React.useCallback(() => {
      
      // setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
      

      

    }, [webcamRef , mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      // setCapturing(false);
    }, [mediaRecorderRef, webcamRef]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"

        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);




    const handleUpload = (e)  => {
        e.preventDefault();
        
        uploadFiles();
    };
  
    return (
      
       

      <div className={classes.outer}>
        
        <div className={classes.camera}>
          <Webcam audio={false} ref={webcamRef} />
        </div> 
        <div>
          {/* {capturing ? (
            <Button className={classes.button} ></Button>
          ) : (
            
            
            <Button className={classes.button} onClick={()=>{
              setActionType("start");
            }}>Record</Button>
            
            
          )} */}


          <Button className={classes.button} onClick={()=>{
              setActionType("start");
            }}></Button>



          {recordedChunks.length > 0 && (
            <Button className={classes.button} onClick={handleDownload}>Download</Button>
          )}

          

        </div>
        
        <div>
            <p>counter: {counter} </p>
            <p>{recordCounter}</p>
        </div>
        <div>
          <form onSubmit={handleUpload}>
            <button type="submit">Upload</button>
          </form>
          <hr />
          <h2>Uploading done {progress}%</h2>
            <a href='/alphabets' >click here to go back to tutorial</a>
            <Button className={classes.button} onClick={gotocert}>view certificate</Button>
        </div>
      </div>
      
    );
  };
  
export default WebcamStreamCapture;