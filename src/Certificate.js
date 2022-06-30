import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import jsPDF from "jspdf"

const styles = makeStyles((theme) => ({
    outer: {
        backgroundColor: "#f5f5dc",
        height: '100vh',
        width: '100vw',


    },
    main: {
        padding: "2%",
        backgroundColor: '#f5f5f5',
        marginLeft: "25%",
        marginRight: "25%",
    },
    content: {
        // margin: '5%',
        fontStyle: 'italic',

        // padding: '10px',
        border: '2px solid #f5f5f5',
        borderRadius: '40px',
    },
    buttons: {
        display: 'flex',
        padding: '90px',
        justifyContent: 'center',
        gap: '160px',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            gap: '60px'
        },

    },
    signature: {
        height: "100px",
        width: "100px"
    }
}));


const Certificate = ({ setUser, user }) => {
    const classes = styles();
    const location = useLocation();
    // const sign_name =location.state.alphabet;
    // console.log(location);
    // console.log(user);
    // console.log(sign);


    function generatePdf() {
        var doc = new jsPDF('l', 'pt', 'a2', 'true')
        doc.html(document.querySelector(`.${classes.outer}`), {
            callback: function (pdf) {
                var pageCount = doc.internal.getNumberOfPages()
                // pdf.deletePage(pageCount)
                pdf.save('Certificate.pdf')
            }
        })
    }

    return (


        <div>
            <div className={classes.outer}>
                {/* <div>
                <Navbar />
            </div> */}
                <div className={classes.main}>
                    <h1 className={classes.content}>
                        CERTIFICATE


                        <br></br>
                        This certificate is proudly presented to
                        <br></br>
                        <br></br>
                        {user?.Firstname} {user?.Lastname}
                        {/* Bipasha Rawat */}
                        <hr></hr>
                        <br></br>
                        for your outstanding success in completing a course for learning the Indian Sign Language
                    </h1>

                    <img src={require('./signature.jpg')} alt='img' className={classes.signature} />
                    <h4>Authorised signature
                        <br></br>
                        XYZ
                    </h4>
                </div>

                {/* <div className={classes.buttons}>
                <Link to="/achievements">
                    <Button variant="contained">View Achievements</Button>
                </Link>
                <Button variant="contained">Next Tutorial</Button>
                
            </div> */}
            </div>
            <Button onClick={generatePdf}>Download the certificate</Button>
        </div>
    );
};

export default Certificate;