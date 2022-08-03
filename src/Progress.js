import React, { useState } from 'react';
import Progress from './navAchieve';
import {useLocation} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import { useAlert } from "react-alert";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './progress.css';

const useStyles = makeStyles((theme) => ({
    outer:{
        backgroundColor: "#80dd13",
        
    },    
    tab: {
        marginTop: "11%",
        marginBottom: "20%",
        marginLeft: "40%",
        marginRight: "20%",
        backgroundColor: "#F0F8FF",
        border: "5px solid black",
        

        [theme.breakpoints.down('sm')]: {
            marginTop: "11%",
            marginBottom: "20%",
            marginLeft: "20%",
            marginRight: "20%",
            
          },
    },
    
    button:{
        backgroundColor: "#F0F8FF",
        marginTop: "10px",
    }
}));

function Achievements({setUser, user}){
    const navigate = useNavigate();
    const alert = useAlert();
    let errMsg;

    const classes = useStyles();

    const location = useLocation();
    const user_prog =location.state.progress;

    var user_progress = user_prog;

    const u_email = user.Email;
    var user_e = u_email;

    const result = (e) => {
        e.preventDefault()
        if(Object.keys(user_progress).length !== 32 ){
            alert.error("user has not completed the course");
            errMsg = false;
        }
        else{ 
                if(user_progress.A_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.A_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.B_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.B_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.C !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.D !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.E_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.F !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.G !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.H !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.I_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.I_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.J !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.K !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.L !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.M !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.N !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.O_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.O_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.P !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.Q !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.R !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.S !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.T_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.T_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.U_one !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.U_two !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.V !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.W !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.X !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.Y !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else if(user_progress.Z !== "Pass"){
                    alert.error("user has not completed the course");
                    errMsg = false;
                }
                else{
                    navigate("/certificate");
                    errMsg = true;
                }  
        }
        return errMsg;
    }
    console.log(Object.keys(user_progress).map(item=>{
        return {key:item,value:user_progress[item]}
    }));

    console.log(Object.keys(user_progress).length);

    
   
   
    // for (var key in user_prog) {
    //     prog.push({[key]:user_prog[key]})
    //     console.log(prog)
    //     // return <p>{key}: {user_prog[key]}</p>;
    // }

    // {prog.map((item)=>{
    //     console.log(item);
    //     return <p>
    //         $[item]
    //     </p>
    // })}


    // console.log('nujybjubjb')
    // console.log(prog)
    // prog.map(item => {
    //     console.log()
    // })

    

    

    // console.log('Prog',prog)
    // const docRef = doc (db, 'VideoOutput', user_e)
    // onSnapshot(docRef,(doc)=> {
    //   console.log(doc.data())
    //   setProgress(doc.data())
    //   // if (doc.data().A_two == "Pass"){
    //   //   navigate("/certificate");
    //   // }
    //   // else{
    //   //   console.log("fails")
    //   // }
    // })

    return(
        <div className={classes.outer}>
        
            <div>
            <Progress />
            </div>
            <Button  className={classes.button} onClick={result}>generate your certificate</Button>
            <div className={classes.tab}>
                <table >
                    <tr>
                        <th>Alphabet </th>
                        <th> Result</th>
                    </tr>
                            {Object.keys(user_progress).map(item=>{
                                return <tr> <td> {`${item}`}</td>
                                            <td> {`${user_progress[item]}`}</td>
                                        </tr>
                            })}
                </table>
            </div>
            
            
            
        </div>
    );
}

export default Achievements;