import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
// import Headlines from "../../components/Headlines";
import "./style.css";
import $ from "jquery";

const Home = (props) => {

  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text1'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>MOVIE</span>.</h5>`
    );
  }, 2800);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text2'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SHOW</span>.</h5>`
    );
  }, 4000);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>BOOK</span>.</h5>`
    );
  }, 4250);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>GAME</span>.</h5>`
    );
  }, 4500);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>CHARACTER</span>.</h5>`
    );
  }, 4750);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>EPISODE</span>.</h5>`
    );
  }, 5000);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SONG</span>.</h5>`
    );
  }, 5250);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text4'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>SCENE</span>.</h5>`
    );
  }, 5500);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>PERSON</span>.</h5>`
    );
  }, 5750);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>ALBUM</span>.</h5>`
    );
  }, 6000);
  setTimeout(function () {
    $("#home-message").html(
      `<br><br><h5 id='home-text3'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>THING</span>.</h5>`
    );
  }, 6250);
  setTimeout(function () {
    $(
      "#home-message"
    ).html(`<br><br><h5 id='home-text5'>DISCOVER YOUR NEXT FAVORITE <span class ='main'>THING</span>.</h5><br>
    <img className='home-image' src=${require("../../assets/images/grayLogo.png")} />`);
  }, 8000);

  return (
    <Container>
      <Row></Row>
      <Row>
        <Col s={3}>
          <div className="suggestions">
            <h6 className="home-title center-align">SUGGESTIONS</h6>
            <img
              src="https://www.emmys.com/sites/default/files/styles/marquee_main/public/marquees/cta-2020-40th-900x600.jpg?itok=PYFZdWI0"
              className="home-image"
              alt=''
            />
            <div className='default-text'>
              <p>
                <strong>Date: </strong>September 20, 2020
              </p>
              <p>
                <strong>Time: </strong>8:00 PM EDT
             </p>
              <p>
                <strong>Network: </strong>ABC
              </p>
              <p>
                {" "}
                <strong>Presented by: </strong>Academy of Television Arts &
                 Sciences
               </p>
            </div>
          </div>
        </Col>
        <Col s={6}>
          <div className="middle-content">
            <div id="home-message" className="center-align">
              <img
                src={require("../../assets/images/countdown.gif")}
                id="home-image"
                alt=''
              />
            </div>

            <br></br>
            <h5 className="middle-title">
              Start your search now.
            </h5>
            <p className="main-paragraph">
              entertainME allows you to search for the latest in trending Movies
              and TV Shows. Or, looking for a classic? You can find that too!
              Browse for any film or film related celebrity, add to your
              favorites and share with your friends. Your one stop shop for all
              things entertainment.
            </p>
          </div>
        </Col>

        <Col s={3}>
          <div className="staff-picks">
            <h6 className="home-title">STAFF PICKS</h6>
            <ul className="default-text">
              <h6>MOVIES</h6>
              <li>Bad Boys For Life</li>
              <li>Avengers: End Game</li>
              <li>1917</li>
              <h6>SHOWS</h6>
              <li>Upload</li>
              <li>The Masked Singer</li>
              <li>Billions</li>
              <h6>PEOPLE</h6>
              <li>Elon Musk</li>
              <li>Will Smith</li>
              <li>Katy Perry</li>
            </ul>
            <br></br>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default Home;
