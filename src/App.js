import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "./components/Profile";
import BR from "./components/BR";
import axios from "axios";
import RentModal from "./components/RentModal";
import RenteeModal from "./components/RenteeModal";
import { withAuth0 } from "@auth0/auth0-react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import WeatherModal from "./components/WeatherModal";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      showToast2: false,
      data: [],
      // dataBikes:[],
      showRental: false,
      username: "",
      location: "",
      id: "",
      duration: 0,
      price: 0,
      showModalNew: false,
      image: "",
      location: "",
      gender: "",
      tokenz: 0,
      icons: [],
      showWeather: false,
      weatherData: [],
      lat: "",
      lon: "",
      locationWeather: "",
      Phone: "",
    };
  }

  Rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  handlePhone = (e) => {
    e.preventDefault();
    this.setState({
      Phone: e.target.value,
    });
  };
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
  handleShowWeather = (e) => {
    e.preventDefault();
    this.setState({
      showWeather: true,
    });
  };
  handleCloseWeather = () => {
    this.setState({
      showWeather: false,
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
    if (e.target.value === "Frankfurt") {
      this.setState({
        lon: 50.1072,
        lat: 8.66375,
      });
    }
    if (e.target.value === "Copenhagen") {
      this.setState({
        lon: 55.673582,
        lat: 12.564984,
      });
    }
    if (e.target.value === "Moscow") {
      this.setState({
        lon: 55.75,
        lat: 37.616667,
      });
    }
    if (e.target.value === "Madrid") {
      this.setState({
        lon: 40.4168,
        lat: -3.7038,
      });
    }
  };
  handleGender = (e) => {
    e.preventDefault();
    this.setState({
      gender: e.target.value,
    });
    if (e.target.value === "Male") {
      this.setState({
        icons: [
          "https://images.vexels.com/media/users/3/206295/isolated/preview/bf7731bb87b58f8a862172acfd38f3db-young-man-pointing-character.png",
          "https://images.vexels.com/media/users/3/209042/isolated/preview/bb369786a8601502fb10cd9161eb34ec-standing-beared-man-character.png",
          "https://images.vexels.com/media/users/3/199963/isolated/preview/08f03b340a63ff54d61cb709e4b57d07-guy-with-tablet-character-isometric.png",
          "https://images.vexels.com/media/users/3/200032/isolated/preview/27fed3d8643bf55333a148ef25418288-old-man-character-isometric.png",
        ],
      });
    } else {
      this.setState({
        icons: [
          "https://images.vexels.com/media/users/3/206055/isolated/preview/29cafa4778571aed00dabc96869d481a-greeting-woman-character.png",
          "https://images.vexels.com/media/users/3/193082/isolated/lists/9b3fd0d5985b90d4fceb21dc7cbe5069-covid-19-girl-mask-character.png",
          "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
          "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
        ],
      });
    }
  };
  componentDidMount = async () => {
    // if (this.props.auth0.isAuthenticated){
    const bikees = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/bikes`
    );
    this.setState({
      data: bikees.data,
    });
  };

  // {(this.props.weatherData).map((e) => {
  //     return <WeatherDay date={e.date} description={e.description} />;
  //   })}
  //   <Card.Title> {this.props.date} </Card.Title>
  //   <Card.Text>{this.props.description}</Card.Text>
  // };

  addBike = async (event) => {
    const bikeFromData = {
      username: this.props.auth0.user.name,
      location: this.state.location,
      gender: this.state.gender,
      image: this.state.icons[this.Rand(0, 3)],
      Phone: this.state.Phone
    };

    let newBikes = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create`,
      bikeFromData
    );

    this.setState({
      data: newBikes.data,
      showModalNew: false,
      locationWeather: this.state.location,
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
    // console.log(this.state.showWeather);
    // console.log(this.props.auth0);

    return (
      <>
        {this.props.auth0.isAuthenticated ? (
          <>
            <Header
              picture={this.props.auth0.user.picture}
              name={this.props.auth0.user.name}
              myEmail={this.props.auth0.user.email}
              tokenz={this.state.tokenz}
            />
          </>
        ) : (
          <Header />
        )}

        {/* {<Map locationWeather={this.state.locationWeather} />} */}

        {this.props.auth0.isAuthenticated && (
          <BR
            data={this.state.data}
            dataBikes={this.state.dataBikes}
            deleteBike={this.deleteBike}
            showRental={this.state.showRental}
            showModalNew={this.state.showModalNew}
            handleShowModalRental={this.handleShowModalRental}
            handleCloseModalRental={this.handleCloseModalRental}
            handleShowModalNew={this.handleShowModalNew}
            handleCloseModalNew={this.handleCloseModalNew}
            gender={this.state.gender}
            name={this.props.auth0.user.name}
            icons={this.state.icons}
            otherData={this.otherData}
            handleShowWeather={this.handleShowWeather}
            showWeather={this.state.showWeather}
            weatherData={this.state.weatherData}
          />
        )}
        {this.state.showRental && (
          <RentModal
            data={this.state.data}
            showRental={this.state.showRental}
            showModalNew={this.state.showModalNew}
            handleCloseModalRental={this.handleCloseModalRental}
            handleDuration={this.handleDuration}
            handleGender={this.handleGender}
            price={this.state.price}
            handleShowWeather={this.handleShowWeather}
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
            handlePhone={this.handlePhone}
          />
        )}
     
        <Footer />
      </>
    );
  }
}
export default withAuth0(App);
