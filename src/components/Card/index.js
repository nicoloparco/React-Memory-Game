import React from "react";

function Card() {
    return(
        <div className="col-md-2 mb-3">
            <div className="card rounded-lg text-white bg-dark shadow-lg">
                <img src="https://www.oxygen.com/sites/oxygen/files/styles/blog-post-embedded--mobile/public/2019-09/dennis-its-always-sunny-fx.jpg?itok=rKP3NOzK" alt="#" className="img-card-top rounded-lg shadow-lg"></img>
                <div className="card-body text-center border-top border-light">
                    <h4 className="card-title font-italic">Dennis Reynolds</h4>
                </div>
            </div>
        </div>
    )
}

export default Card