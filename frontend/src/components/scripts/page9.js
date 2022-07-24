import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import React, {useEffect, useState} from "react";
import service from "../../api";
import {Link, useHistory} from "react-router-dom";
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";

//case in page 2 the user clicked no and next

function Page9() {
    const [mainLegalField, setMainLegalField] = useState("");
    const [mainLegalFieldUpdate, setMainLegalFieldUpdate] = useState(false);

    const {push} = useHistory();

    const sendDataHandler = () => {
        service.mainLegalService.sendMainLegalField(mainLegalField)
            .then(response => {
                setMainLegalFieldUpdate(true);

            })
    }
    useEffect(() => {
        if (mainLegalFieldUpdate !== false) {

            push('/page3')
        }

    }, [mainLegalFieldUpdate])
    return (
        <div className="page9">

            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page2">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>

            <div className="main-headline9">
                Just so we can be sure we understood you...

            </div>

            <div className="second-headline9">Please select the legal field that you think suits your story best</div>

            <div className="mainField9">Main Legal Field:</div>
            <form className="mainMenu9">
                <select id="main-legal"
                        onChange={(e) => {
                            setMainLegalField(e.target.value);
                        }}
                >
                    <option value="Intellectual Property Law">Intellectual Property Law</option>
                    <option value="Property Law">Property Law</option>
                    <option value="Tort Law">Tort Law</option>

                </select>
            </form>
            {/*<button className="save9" onClick={ sendDataHandler }>Save</button>*/}
            {/*<Link to="/page3"> <button className="next9" onClick="nextPage">Next</button></Link>*/}
            <button
                type="button"
                className="next9"
                onClick={sendDataHandler}
            >
                Next
            </button>

        </div>

    );
}

export default Page9;