import React from "react";


const Card = props => 
    (
    <div className="col-md-2 mb-3">
        <div className="card rounded-lg text-white bg-dark" onClick={() => props.selectCharacter(props.id)}>
            <img src={props.image} alt={props.alt} className="img-card-top rounded-lg"></img>
            <div className="card-body text-center border-top border-light pb-0">
                <h4 className="card-title font-italic">{props.name}</h4>
            </div>
        </div>
    </div>
    )

export default Card