import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark text-light justify-content-between text-center sticky-top">
                <h5 className="my-1">Always Sunny Clicky Game</h5>
                <h5 className="my-1">Sponsored by Paddy's Pub <span role="img" aria-label="shamrock">☘️</span></h5>
            </nav>
        </div>
    )
}

export default Navbar;