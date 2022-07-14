import React from "react";
import '../Navbar/Navbar.css';

function Navbar(){
    return(
        <div class="topnav">
            <a class="active" href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </div>
    );
}

export default Navbar;