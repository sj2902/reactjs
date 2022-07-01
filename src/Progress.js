import React, { useState } from 'react';
import Progress from './navAchieve';
import {onSnapshot,doc} from 'firebase/firestore';
import {db} from './firebase';
import {useLocation} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tab: {
        marginTop: "11%",
        marginBottom: "20%",
        marginLeft: "40%",
        marginRight: "20%"
    }
}));

function Achievements({setUser, user}){
    const classes = useStyles();

    const location = useLocation();
    const user_prog =location.state.progress;

    var user_progress = user_prog;

    const u_email = user.Email;
    var user_e = u_email;

    // for (const [key ,value] of user_progress){
    //     console.log(key);
    // }
    console.log(Object.keys(user_progress).map(item=>{
        return {key:item,value:user_progress[item]}
    }));

    // let prog = [];
   
   
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
        <div>
        
            <div>
            <Progress />
            </div>
            {/* <div>
                {prog.map(item => { 
                    return 
                    <h5>{item}</h5>)}}
            </div> */}


            <div className={classes.tab}>
                <table border="1px solid" cellspacing="15">
                    <tr>
                        <th border="1px solid">Alphabet </th>
                        <th border="1px solid"> Result</th>
                    </tr>
                    
                            {Object.keys(user_progress).map(item=>{
                            return <tr> <td border="1px solid">{`${item}   `}</td>
                                        <td border="1px solid">{`${user_progress[item]}   `}</td>
                                    </tr>
                            

                        })}
                        
                    
                
                </table>
            </div>
            
        </div>
    );
}

export default Achievements;