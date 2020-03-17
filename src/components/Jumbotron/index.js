import React from "react";

function Jumbotron() {
  return (
    <div className="container mt-3">
      <div className="jumbotron jumbotron-fluid bg-dark text-light rounded">
        <div className="row d-flex mx-auto">
          <div className="col-md-4 my-3">
            <img
              className="rounded mx-auto shadow-lg jumbotronImgs"
              src="./images/Season7.jpg"
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
            <h5 id="currentScore" class="font-weight-bold">Current Score: 0</h5>
          </div>
          <div className="col-md-4 my-3">
            <img
              className="rounded shadow-lg jumbotronImgs"
              src="./images/Season13.jpg"
              alt="Sunny Logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
