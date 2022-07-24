import logo from "../../logo.svg";
import advoline_logo from "../images-forpages-style/advoline_logo.png"
import React from 'react'


function Logo() {
    return (
        <div className="Logo">

            <img width="155px" height="44px" src={advoline_logo} className="App-logo" alt="logo"/>
        </div>
    );
}

export default Logo;