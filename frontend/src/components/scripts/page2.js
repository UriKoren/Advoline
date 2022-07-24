import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import arrow from "../images-forpages-style/arrow.png";
import React from 'react'
import advoline_logo from "../images-forpages-style/advoline_logo.png";


function Page2(props) {
    const [yesOrNoButton, setYesOrNoButton] = useState("/page9");


    const handleYesButton = () => {
        setYesOrNoButton("/page3");
    }

    return (

        <div className="page2">
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>


            {/*<Logo />*/}
            <div className="main-headline2">
                Thank You!
            </div>

            <div className="headline2">We understand that
                this is a dispute over your {props.lawyerType} ?
            </div>


            <button className="yesButton2" onClick={handleYesButton}>Yes</button>
            <button className="noButton2">No</button>


            <Link to={yesOrNoButton}>
                <button className="next2">Next</button>
            </Link>

        </div>
    );
}

export default Page2;