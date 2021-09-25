import { height } from "dom-helpers";
import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import "./Profile.css";
// import RentModal from "./RentModal"

let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

function Rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr1 = [
  "https://images.vexels.com/media/users/3/206295/isolated/preview/bf7731bb87b58f8a862172acfd38f3db-young-man-pointing-character.png",
  "https://images.vexels.com/media/users/3/209042/isolated/preview/bb369786a8601502fb10cd9161eb34ec-standing-beared-man-character.png",
  "https://images.vexels.com/media/users/3/199963/isolated/preview/08f03b340a63ff54d61cb709e4b57d07-guy-with-tablet-character-isometric.png",
  "https://images.vexels.com/media/users/3/200032/isolated/preview/27fed3d8643bf55333a148ef25418288-old-man-character-isometric.png",
  "https://images.vexels.com/media/users/3/206055/isolated/preview/29cafa4778571aed00dabc96869d481a-greeting-woman-character.png",
  "https://images.vexels.com/media/users/3/193082/isolated/lists/9b3fd0d5985b90d4fceb21dc7cbe5069-covid-19-girl-mask-character.png",
  "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
  "https://images.vexels.com/media/users/3/199795/isolated/preview/35f7929ba2d3e0fb4a1d701f8ab32175-blonde-woman-character-isometric.png",
];



class BR extends Component {
  render() {
    console.log(this.props.gender)
    return (
      <Row>
        <div className="test">
          <div className="buttonJS">
            <h2> You Also Can Save The Environment ~Your name~</h2>
            <button onClick={this.props.handleShowModalNew}>
              <div className="base">Join The Community</div>
              <div className="onHover">List Your Bike for Renting! </div>
            </button>
          </div>
          <h2 className="lists"> Renting List:</h2>
        </div>

        {this.props.data.map((e) => {
            let pp = arr1[Rand(0, 7)];
          return (
            <Col md={4}>
              <section className="events">
                <section className="filter">
                  <article className="event">
                    <header>
                      <img src={pp} alt="PP" />
                    </header>
                    <div className="details">
                      <h3 className="date">{today}</h3>
                      <h1 className="title">
                        {" "}
                        {e.username.toUpperCase()} <br />{" "}
                        <span> is renting </span>{" "}
                      </h1>
                      <h2 className="venue">Location: {e.location}</h2>
                      <h4 className="price">1.5$/Hr</h4>
                    </div>
                    <footer>
                      <Button
                        onClick={this.props.handleShowModalRental}
                        className="yalla"
                      >
                        Yalla Bike!
                      </Button>
                    </footer>
                  </article>
                </section>
              </section>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default BR;
