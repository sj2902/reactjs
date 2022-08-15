import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./cert.css";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";


class Certificate extends Component {
  certificateWrapper = React.createRef();
  
  state = {
    Name: "",
    
  };
  
  render() {
    

    console.log(this.props.router.location)
    return (
      <div className="cert">
        <div className="Meta">
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
          
        
        </div>

        <div id="downloadWrcerter" ref={this.certificateWrapper}>
          <div id="certificateWrcerter">
            <p>{`${this.props.user.Firstname} ${this.props.user.Lastname}`}</p>
            <img src="https://i.imgur.com/bXjdhvj.jpg" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}





function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}





export default withRouter(Certificate);





