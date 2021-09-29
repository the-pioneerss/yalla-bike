import React, { Component } from "react";
import axios from "axios";
import RentModal from "./components/RentModal";
import RenteeModal from "./components/RenteeModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import BR from "./components/BR";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Event2 from "./events/Event2";
import AboutUs from "./events/AboutUs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Alert } from "react-bootstrap";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setShow: false,
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
      showButton: true,
      locationWeather: "",
      Phone: "",
      eventsData: [],
      eventName: "",
      locationEvent: "",
      timeEvent: "",
      generalInfoEvent: "",
      descriptionEvent: "",
      eventsDate:"",
      userName:""
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
      showButton: false,
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

  ///////Event Functions
  handleEventName = (e) => {
    e.preventDefault();
    this.setState({
      eventName: e.target.value,
    });
    console.log(this.state.eventName)
  };
  handleLocationEvent = (e) => {
    e.preventDefault();
    this.setState({
      locationEvent: e.target.value,
    });
  };
  handleDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({
      descriptionEvent: e.target.value,
    });
  };
  handleTimeEvent = (e) => {
    e.preventDefault();
    this.setState({
      timeEvent: e.target.value,
    });
  };
  handleGeneralInfoEvent = (e) => {
    e.preventDefault();
    this.setState({
      generalInfoEvent: e.target.value,
    });
  };
  handleEventsDate = (e) => {
    e.preventDefault();
    this.setState({
      eventsDate: e.target.value,
    });
  };

  /////////////////////////////////////////////////////////////
  componentDidMount = async () => {
    const bikees = await axios.get(
      `https://${process.env.REACT_APP_BACKEND_URL}/bikes`
    );
    this.setState({
      data: bikees.data,
    });
  };

  addBike = async (event) => {
    event.preventDefault();
    // console.log('ADDDD');

    const bikeFromData = {
      username: this.props.auth0.user.name,
      location: this.state.location,
      gender: this.state.gender,
      image: this.state.icons[this.Rand(0, 3)],
      Phone: this.state.Phone,
    };

    let newBikes = await axios.post(
      `https://${process.env.REACT_APP_BACKEND_URL}/create`,
      bikeFromData
    );
    this.setState({
      data: newBikes.data,
      showModalNew: false,
      locationWeather: this.state.location,
    });
  };
  deleteBike = async (id) => {
    console.log("DDDDDDDDD");
    let bikeId = id;
    let newBikes = await axios.delete(
      `https://${process.env.REACT_APP_BACKEND_URL}/delete/${bikeId}`
    );
    this.setState({
      data: newBikes.data,
    });
  };
  //////////////////
  addEvent = async (event) => {
    event.preventDefault();
    console.log("event Added");

    const eventsFromData = {
      eventName: this.state.eventName,
      location: this.state.locationEvent,
      time: this.state.timeEvent,
      generalInfo: this.state.generalInfoEvent,
      description: this.state.descriptionEvent,
      eventsDate:this.state.eventsDate,
      userName:this.props.auth0.user.name
    };

    let newEvent = await axios.post(
      `https://${process.env.REACT_APP_BACKEND_URL}/createEvent`,
      eventsFromData
    );
    this.setState({
      eventsData: newEvent.data,
    });
    console.log(this.state.eventsData);
  };

  deleteEvent = async (id) => {
    console.log("DDDDDDDDD");
    let EventId = id;
    let newEvents = await axios.delete(
      `https://${process.env.REACT_APP_BACKEND_URL}/deleteEvent/${EventId}`
    );
    this.setState({
      eventsData: newEvents.data,
    });
  };


  /////////////////

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.props.auth0.isAuthenticated ? (
              <>
                <Header
                  picture={this.props.auth0.user.picture}
                  name={this.props.auth0.user.name}
                  myEmail={this.props.auth0.user.email}
                  tokenz={this.state.tokenz}
                />
                <Main />{" "}
              </>
            ) : (
              <>
                <Header />
                <Main />
              </>
            )}
          </Route>
          <Route path="/home">
            {this.props.auth0.isAuthenticated ? (
              <>
                <Header
                  picture={this.props.auth0.user.picture}
                  name={this.props.auth0.user.name}
                  myEmail={this.props.auth0.user.email}
                  tokenz={this.state.tokenz}
                />
                <Main />{" "}
              </>
            ) : (
              <>
                <Header />
                <Main />
              </>
            )}
          </Route>
          <Route path="/rent">
            {this.props.auth0.isAuthenticated ? (
              <>
                <Header
                  picture={this.props.auth0.user.picture}
                  name={this.props.auth0.user.name}
                  myEmail={this.props.auth0.user.email}
                  tokenz={this.state.tokenz}
                />

                <BR
                  showButton={this.state.showButton}
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
                  id={this.state.id}
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
                    handleShowWeather={this.handleShowWeather}
                    showButton={this.state.showButton}
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
                    showButton={this.state.showButton}
                  />
                )}
                <Footer />
              </>
            ) : (
              <>
                <Header />
                <Alert variant="danger">Please LLog In First !</Alert> <Main />
              </>
            )}
          </Route>
          <Route path="/event">
            {this.props.auth0.isAuthenticated ? (
              <>
                <Header
                  picture={this.props.auth0.user.picture}
                  name={this.props.auth0.user.name}
                  myEmail={this.props.auth0.user.email}
                  tokenz={this.state.tokenz}
                />
                <Event2
                  eventsData={this.state.eventsData}

                  eventName={this.state.eventName}
                  location={this.state.locationEvent}
                  time={this.state.timeEvent}
                  generalInfo={this.state.generalInfoEvent}
                  description={this.state.descriptionEvent}
                  eventsDate={this.state.eventsDate}
                  userName={this.state.userName}

                  handleEventName={this.handleEventName}
                  handleLocationEvent={this.handleLocationEvent}
                  handleDescriptionEvent={this.handleDescriptionEvent}
                  handleTimeEvent={this.handleTimeEvent}
                  handleGeneralInfoEvent={this.handleGeneralInfoEvent}
                  handleEventsDate={this.handleEventsDate}

                  id={this.state.id}
                  deleteEvent={this.deleteEvent}
                  name={this.props.auth0.user.name}
                  addEvent={this.addEvent}
                />
                <Footer />{" "}
              </>
            ) : (
              <>
                <Header />
                <Alert variant="danger">Please Log In First !</Alert> <Main />
              </>
            )}
          </Route>
          <Route path="/aboutus">
            {this.props.auth0.isAuthenticated ? (
              <>
                {/* <Header
                  picture={this.props.auth0.user.picture}
                  name={this.props.auth0.user.name}
                  myEmail={this.props.auth0.user.email}
                  tokenz={this.state.tokenz}
                /> */}
                <AboutUs />
                <Footer />
              </>
            ) : (
              <>
                {/* <Header /> */}
                <AboutUs />
                <Footer />
              </>
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default withAuth0(App);
