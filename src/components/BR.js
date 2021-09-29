import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Card
} from "react-bootstrap";
import "./Profile.css";
import axios from "axios";
const NEWS = process.env.REACT_APP_BACKEND_URL;

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class BR extends Component {
  constructor(state) {
    super(state);
    this.state = {
      dataBikes: {},
      showData: false,
      weatherData: [],
      filter: "",
      cardWeather: false,
      filteredData: [],
      place: "",
    };
  }
  handleFilter = async (e) => {
    let a = e.target.value;

    let weatherUrl = `https://${NEWS}/weather?city=${a}&key=${process.env.REACT_APP_WEATHER_KEY}`;
    {
      await axios.get(weatherUrl).then((res) => {
        this.setState({
          weatherData: res.data,
          cardWeather: true,
          filteredData: [],
          place: e.target.value,
        });
      });
    }
    // console.log(this.state.weatherData[0]);
    this.props.data.map((e) => {
      // console.log(e.location);
      if (a == e.location) {
        this.state.filteredData.push(e);
        this.setState({
          filteredData: this.state.filteredData,
        });
      }
    });
    // console.log(this.state.filteredData);
  };

  render() {
    // console.log(this.state.dataBikes.networks[0].name);
    // console.log(this.state.filteredData)
    // this.state.filteredData.map((element) => {
    //   console.log(element.location);
    // });

    return (
      <>
        <Row>
          <div className="test">
            <div className="buttonJS">
              <h2> You Also Can Save The Environment {this.props.name}</h2>
              <button onClick={this.props.handleShowModalNew}>
                <div className="base">Join The Community</div>
                <div className="onHover">List Your Bike for Renting! </div>
              </button>
            </div>

            <h2 className="lists"> Renting List in Your Area:</h2>

            <select onChange={this.handleFilter} className="FilterMe">
              <option selected> Filter By City:</option>
              <option value="Irbid">Irbid</option>
              <option value="Zarqa">Zarqa</option>
              <option value="Amman">Amman</option>
              <option value="Aqaba">Aqaba</option>
            </select>
            {this.state.cardWeather && (
              <Card className="text-center">
                <Card.Header className="HeaderCard" style={{ width: 500 }}>
                  Weather In {this.state.place}{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    {this.state.weatherData[0].description}{" "}
                  </Card.Title>
                  <Card.Text>
                    Highs of: {this.state.weatherData[0].max_temp} C
                  </Card.Text>
                  <Card.Text>
                    Lows of: {this.state.weatherData[0].low_temp} C
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
            <Row>
              {this.state.filteredData.map((element) => {
                return (
                  <Col md={4}>
                    <section className="events">
                      <section className="filter">
                        <article className="event">
                          <header>
                            <img className='test' src={element.image} alt="PP" />
                          </header>
                          <div className="details">
                            <h3 className="date">{today}</h3>
                            <h5 className="title">
                              {" "}
                              {element.username.toUpperCase()} <br />{" "}
                            </h5>
                            <span> is renting </span>{" "}
                            <h2 className="venue">
                              Phone Number: {element.Phone}
                            </h2>
                            <h2 className="venue">
                              Location: {element.location}
                            </h2>
                            <h4 className="price">1.5$/Hr</h4>
                          </div>
                          <footer>
                          {this.props.name === element.username ?
                          <Button
                            onClick={() => this.props.deleteBike(element._id)}
                            className="yalla"
                            variant='danger'
                          >
                            Delete
                          </Button>
                          :

                          <Button
                            onClick={this.props.handleShowModalRental}
                            className="yalla"
                          >
                            Yalla Bike!
                          </Button>
                        }
                          </footer>
                        </article>
                      </section>
                    </section>
                  </Col>
                );
              })}
            </Row>
            <h2 className="lists"> All Rentals In Jordan:</h2>
          </div>
          {console.log('DATAA : ', this.props.data)}

          {this.props.data.map((e) => {
            return (
              <Col md={4}>
                <section className="events">
                  <section className="filter">
                    <article className="event">
                      <header>
                        <img src={e.image} alt="PP" className='test' />
                      </header>
                      <div className="details">
                        <h3 className="date">{today}</h3>
                        <h5 className="title">
                          {" "}
                          {e.username.toUpperCase()} <br />{" "}
                        </h5>
                        <span> is renting </span>{" "}
                        <h2 className="venue">Phone Number: {e.Phone}</h2>
                        <h2 className="venue">Location: {e.location}</h2>
                        <h4 className="price">1.5$/Hr</h4>
                      </div>
                      <footer>

                        {this.props.name === e.username ?
                          <Button
                            onClick={() => this.props.deleteBike(e._id)}
                            className="yalla"
                            variant='danger'
                          >
                            Delete
                          </Button>
                          :

                          <Button
                            onClick={this.props.handleShowModalRental}
                            className="yalla"
                          >
                            Yalla Bike!
                          </Button>
                        }
                      </footer>
                    </article>
                  </section>
                </section>
              </Col>
            );
          })}
        </Row>
        <br></br><br></br><br></br>
      </>
    );
  }
}

export default BR;
