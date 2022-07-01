import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import { useNavigate } from "react-router-dom";
import "./cert.css";

class Certificate extends Component {
    // const navWrapper = (props) => {
    //     const navigate = useNavigate();
    // }
    //this.props.user.Firstname
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  render() {
    
    return (
      <div className="cert">
        <div className="Meta">
          {/* <h1> SIGNOPEDIA</h1>
          <h2> Generate your certificate </h2>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          /> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null }
              });
            }}
          >
            Download
          </button>
          {/* <button 
            onClick={navigate("/achievements")}
        >Back</button> */}

        
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrcerter">
            <p>{`${this.props.user.Firstname} ${this.props.user.Lastname}`}</p>
            <img src="https://i.imgur.com/yR8EANH.png" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default Certificate;