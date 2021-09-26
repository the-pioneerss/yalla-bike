// import React, { Component } from "react";
// import axios from "axios";
// import { Card } from "react-bootstrap";

// class Map extends Component {
//   constructor(state) {
//     super(state);
//     this.state = {
//       dataBikes: [],
//       showData: false,
    
//     };
//   }
//   componentDidMount = async () => {
//     let bikees = await axios.get(`http://api.citybik.es/v2/networks/`);
//     //    console.log(bikees.data);
//     this.setState({
//       dataBikes: bikees.data,
//       showData: true
//     });
//     console.log(this.state.dataBikes.networks);

//   };


//   render() {
//       if (this.props.location === "Moscow"){
//         return (
//             <>
//               {this.state.showData && (
//                   <Card style={{ width: "18rem" }}>
//                     <Card.Img variant="top" src="holder.js/100px180" />
//                     <Card.Body>
//                       <Card.Title>
//                         {this.state.dataBikes.networks[0].location.city}{" "}
//                       </Card.Title>
//                       <Card.Text>
//                       {this.state.dataBikes.networks[0].id} 
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//               )}
//                   </>
//         )}
//         else if (this.props.location === "Copenhagen"){
//             return (
//                 <>
//                   {this.state.showData && (
//                       <Card style={{ width: "18rem" }}>
//                         <Card.Img variant="top" src="holder.js/100px180" />
//                         <Card.Body>
//                           <Card.Title>
//                             {this.state.dataBikes.networks[1].location.city}{" "}
//                           </Card.Title>
//                           <Card.Text>
//                           {this.state.dataBikes.networks[1].id} 
//                           </Card.Text>
//                         </Card.Body>
//                       </Card>
//                   )}
//                       </>
//             )}
//             else if (this.props.location === "Frankfurt"){
//                 return (
//                     <>
//                       {this.state.showData && (
//                           <Card style={{ width: "18rem" }}>
//                             <Card.Img variant="top" src="holder.js/100px180" />
//                             <Card.Body>
//                               <Card.Title>
//                                 {this.state.dataBikes.networks[384].location.city}{" "}
//                               </Card.Title>
//                               <Card.Text>
//                               {this.state.dataBikes.networks[395].id} 
//                               </Card.Text>
//                             </Card.Body>
//                           </Card>
//                       )}
//                           </>
//                 )}
//     }}
// export default Map;
