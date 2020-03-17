import React from "react";

function Jumbotron() {
  return (
    <div className="container my-3">
      <div className="jumbotron jumbotron-fluid bg-dark text-light rounded">
        <div className="row d-flex mx-auto">
          <div className="col-md-4 my-3">
            <img
              className="rounded mx-auto shadow-lg jumbotronImgs"
              src="./images/Season7.jpg"
              alt="Sunny Logo"
            ></img>
          </div>
          <div className="col-md-4 my-3">
            <h3 className="text-center">
              Welcome to the It's Always Sunny in Philadelphia Click Game!
            </h3>
            <h5 className="text-center my-5 font-italic">
              The Gang's All Here
            </h5>
            <h5 className="text-center">
              Click on an image to earn points but don't click the same image twice
            </h5>
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
