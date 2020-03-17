import React from "react";

function Card(props) {
    return(
        <div className="col-md-2 mb-3">
            <div className="card rounded-lg text-white bg-dark shadow-lg">
                <img src={props.image} alt={props.alt} className="img-card-top rounded-lg shadow-lg"></img>
                <div className="card-body text-center border-top border-light">
                    <h4 className="card-title font-italic">{props.name}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card