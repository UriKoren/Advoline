import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";

function Page8() {

    return (
        <div className="page8">
            <div className="window8">
                <div className="logo5">
                    <img src={advoline_logo} alt="arrow"/>
                </div>
                <Link to="/page7">
                    <button className="arrow5">
                        <img src={arrow} alt="arrow"/>
                    </button>
                </Link>

                <div className="main-headline8">
                    Thank you for your
                    Time & Cooperation!

                </div>

                <div className="headline8">Your case will be examined and
                    we will contact you soon.
                </div>

                <div className="note8">All your application details
                    have been sent to your email
                    Please check your inbox
                </div>
                <div className="add-link8">
                    <a className="first-link8" href=""> For submitting an
                        Additional Application</a>

                </div>


            </div>

            <div className="bottomText8">
                In the meantime, we invite you
                to visit us on our website:
            </div>

            <a className="bottom-link8" href="<Page7 />"> ADVOLINE.com</a>


        </div>

    );
}

export default Page8;