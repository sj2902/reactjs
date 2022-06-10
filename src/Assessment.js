import React, {useState, useEffect} from 'react';
import Webcam from 'react-webcam'; 
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Button from "@material-ui/core/Button";
import Timer from './Timer';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";


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

    const classes = assessStyles();




    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [counter, setCounter] =React.useState(5);
    const [actionType, setActionType] = useState();



    const [recordCounter, setRecordCounter] = useState(30);
    
    const [progress, setProgress] = useState(0);
  
    // const formHandler = (e) => {
    //   e.preventDefault();
    //   const file = e.target[0].files[0];
    //   uploadFiles(file);
    // };

    const uploadFiles = () => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"

        });
      const url = URL.createObjectURL(blob);
      
      if (!blob) return;
      const sotrageRef = ref(storage, `files/${blob.name}`);
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
              console.log(counter);
              if (counter >=0 && counter <= 1){
                
                handleStartCaptureClick();
                console.log( mediaRecorderRef);
                
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
      
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
        //add setinterval after 30s initiate stop

      

    }, [webcamRef , mediaRecorderRef,capturing]);
  
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
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef,capturing]);
  
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
          {capturing ? (
            <Button className={classes.button} >Stop</Button>
          ) : (
            
            
            <Button className={classes.button} onClick={()=>{
              setActionType("start");
            }}>Start</Button>
            
            
          )}

            {/* <Button className={classes.button} onClick={()=>{
              setActionType("start");
            }}>Start</Button>

            <Button className={classes.button} onClick={()=>{
              setTaskType("stop");
            }} >Stop</Button> */}

            











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
            {/* <input type="file" className="input" /> */}
            <button type="submit">Upload</button>
          </form>
          <hr />
          <h2>Uploading done {progress}%</h2>
        </div>
      </div>
      
    );
  };
  
  export default WebcamStreamCapture;

//   ReactDOM.render(<WebcamStreamCapture />, document.getElementById("root"));
  
  // https://www.npmjs.com/package/react-webcam




      //   React.useEffect(() => {
      //     const timer =
      //       counter > 0 && counter <= 5 && setInterval(() => setCounter(counter - 1), 1000);
      //       if (counter > 5){
      //         handleStartCaptureClick()
      //       };
      //     return () => clearInterval(timer);
      // }, [counter]);