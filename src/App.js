import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "./components/Profile";
import BR from "./components/BR";
import axios from "axios";
import RentModal from "./components/RentModal";
import RenteeModal from "./components/RenteeModal";
// import { withAuth0 } from '@auth0/auth0-react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      showToast2: false,
      data: [],
      showRental: false,
      username: "",
      location: "",
      id: "",
      duration: 0,
      price: 0,
      showModalNew: false,
      image: "",
      location: "",
      gender:""
    };
  }

  // handleToast = () => {
  //   this.setState({
  //     showToast: !this.state.showToast,
  //   });
  // };
  // handleToast2 = () => {
  //   this.setState({
  //     showToast2: !this.state.showToast2,
  //   });
  // };

  handleShowModalRental = () => {
    this.setState({
      showRental: true,
    });
  };
  handleCloseModalRental = () => {
    this.setState({
      showRental: false,
    });
  };

  handleShowModalNew = () => {
    this.setState({
      showModalNew: true,
    });
  };
  handleCloseModalNew = () => {
    this.setState({
      showModalNew: false,
    });
  };
  handleDuration = (e) => {
    this.setState({
      duration: e.target.value,
      price: e.target.value * 1.5,
    });
  };
  handleLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };
  handleGender = (e) => {
    e.preventDefault()
    this.setState({
      gender:e.target.value
    })
  }
  componentDidMount = async () => {
    // if (this.props.auth0.isAuthenticated){
    const bikees = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/bikes`
    );
    this.setState({
      data: bikees.data,
    });
  };

  addBike = async (event) => {
    const bikeFromData = {
      username: this.state.username,
      location: this.state.location,
    };

    let newBikes = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create`,
      bikeFromData
    );

    this.setState({
      data: newBikes.data,
      showModalNew: false,
    });
  };

  deleteBike = async (event) => {
    let newBikes = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/delete/${this.state.id}`
    );

    this.setState({
      data: newBikes.data,
    });
  };

  render() {
    // console.log(this.state.showRental);
    // console.log(this.props.auth0);

    return (
      <>
        {/* <Profile showToast={this.state.showToast} handleToast={this.handleToast} showToast2={this.state.showToast2} handleToast2={this.handleToast2}/> */}
        <BR
          data={this.state.data}
          deleteBike={this.deleteBike}
          showRental={this.state.showRental}
          showModalNew={this.state.showModalNew}
          handleShowModalRental={this.handleShowModalRental}
          handleCloseModalRental={this.handleCloseModalRental}
          handleShowModalNew={this.handleShowModalNew}
          handleCloseModalNew={this.handleCloseModalNew}
          gender={this.state.gender}
        />
        {this.state.showRental && (
          <RentModal
            data={this.state.data}
            showRental={this.state.showRental}
            showModalNew={this.state.showModalNew}
            handleCloseModalRental={this.handleCloseModalRental}
            handleDuration={this.handleDuration}
            handleGender={this.handleGender}
            price={this.state.price}
          />
        )}
        {this.state.showModalNew && (
          <RenteeModal
            data={this.state.data}
            handleShowModalNew={this.handleShowModalNew}
            showModalNew={this.state.showModalNew}
            addBike={this.addBike}
            handleCloseModalNew={this.handleCloseModalNew}
            image={this.state.image}
            handleLocation={this.handleLocation}
            location={this.state.location}
            handleGender={this.handleGender}
          />
        )}
      </>
    );
  }
}

export default App;
