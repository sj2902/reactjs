// import React, {useState} from "react";
// import { exportComponentAsPNG } from 'react-component-export-image';
// import "./cert.css";


// const Cert = () => {
//     const [state, setState] = useState("");

//     certificateWrapper = React.forwardRef();
//     state = {
//      Name: ""
//     };

//   return (
//     <div className="cert">
//       <div className="Meta">
//         <h1> SIGNOPEDIA</h1>
//         <h2> Generate your certificate </h2>
//         <p>Please enter your name.</p>
//         <input
//           type="text"
//           placeholder="Please enter your name..."
//           value={this.state.Name}
//           onChange={(e) => {
//             this.setState({ Name: e.target.value });
//           }}
//         />
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             exportComponentAsPNG(this.certificateWrapper, {
//               html2CanvasOptions: { backgroundColor: null }
//             });
//           }}
//         >
//           Download
//         </button>
//       </div>

//       <div id="downloadWrapper" ref={this.certificateWrapper}>
//         <div id="certificateWrapper">
//           <p>{this.state.Name}</p>
//           <img src="https://i.imgur.com/yR8EANH.png" alt="Certificate" />
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Cert;
