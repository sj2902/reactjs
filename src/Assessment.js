import React, {useState} from 'react';
import Webcam from 'react-webcam'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from './firebase';
import { getAuth } from 'firebase/auth';


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





const WebcamStreamCapture = () => {
  // const authentication = getAuth();
  //           const user = authentication.currentUser;
            // const displayName = user.displayName;
            // const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            
            // if (user !== null) {
            // // The user object has basic properties such as display name, email, etc.
            // const displayName = user.Firstname;
            // const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            // // console.log(email)
            // // The user's ID, unique to the Firebase project. Do NOT use
            // // this value to authenticate with your backend server, if
            // // you have one. Use User.getToken() instead.
        
            // }
            // console.log("user who has performed the sign is: ",email);

    const classes = assessStyles();




    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    // const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [counter, setCounter] =React.useState(5);
    const [actionType, setActionType] = useState();



    const [recordCounter, setRecordCounter] = useState(30);
    
    const [progress, setProgress] = useState(0);


  // const details = async(e) => {
   

  //   const authentication = getAuth();
  //   const user = authentication.currentUser;
    
  //   if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.Firstname;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;
  //   const uid = user.uid;
  //   console.log(email)
  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
    
    
    
    
  //   }
  // }  
  
    // const formHandler = (e) => {
    //   e.preventDefault();
    //   const file = e.target[0].files[0];
    //   uploadFiles(file);
    // };



    const uploadFiles = () => {
            // const authentication = getAuth();
            // const user = authentication.currentUser;
            // const displayName = user.displayName;
          //  var email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            
            // if (user !== null) {
            // // The user object has basic properties such as display name, email, etc.
            // const displayName = user.Firstname;
            // const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            // const uid = user.uid;
            // // console.log(email)
            // // The user's ID, unique to the Firebase project. Do NOT use
            // // this value to authenticate with your backend server, if
            // // you have one. Use User.getToken() instead.
        
            // }
            // console.log("user who has performed the sign is: ",email);



    















      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"

        });
      const url = URL.createObjectURL(blob);


      var sign = "one";
      var underscore = "_ _";
      var email = "trialsunday@gmail.com";
      var name= sign + underscore + email;
      
      

      if (!blob) return;

      const sotrageRef = ref(storage, `files/${email}/${sign}/${name}`);

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

            

            console.log("File available at", downloadURL);
            // console.log("the user who has given the assessment is:", email);
            
            const docRef= addDoc(collection(db, "VideoInput"), {
             sign: downloadURL,
            }); 

            const colRef = addDoc(collection(db, "VideoOutput"), {
              sign: downloadURL,
            });

            const cityRef = doc(db, "cities", "demo");
            setDoc(cityRef, {capital: true}, {merge: true});

            

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
          
        </div>
      </div>
      
    );
  };
  
export default WebcamStreamCapture;