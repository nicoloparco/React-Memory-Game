import React from "react";

function Jumbotron(props) {
  return (
    <div className="container mt-3">
      <div className="jumbotron jumbotron-fluid bg-dark text-light rounded shadow-lg">
        <div className="row d-flex mx-auto">
          <div className="col-md-4 my-3">
            <img
              className="rounded mx-auto shadow-lg jumbotronImg"
              src="https://pbs.twimg.com/profile_images/849164156724854784/1kTsCMWL_400x400.jpg"
              alt="Sunny Logo"
            ></img>
          </div>
          <div className="col-md-4 my-3 text-center">
            <h3>
              Welcome to the It's Always Sunny in Philadelphia Click Game!
            </h3>
            <h5 className="my-5 font-italic">
              The Gang's All Here
            </h5>
            <h5>
              Click on an image to earn points but don't click the same image twice
            </h5>
            <h5 id="topScore" className="font-weight-bold my-3">Top Score: {props.topScore}</h5>
            <h5 id="currentScore" className="font-weight-bold my-3">Current Score: {props.currentScore}</h5>
            <h5 id="clickMessage">{props.message}</h5>
          </div>
          <div className="col-md-4 my-3">
            <img
              className="rounded shadow-lg jumbotronImg"
              src="https://worldz.us/WORLDZReport/wp-content/uploads/2018/06/IMG_5749-1024x768.jpeg"
              alt="Sunny Logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
