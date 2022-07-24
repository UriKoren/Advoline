import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../../api";
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";

function Page7() {
    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneNumberUpdate, setPhoneNumberUpdate] = useState(false);
    const {push} = useHistory();

    const sendDataHandler = () => {
        service.phoneNumberService.sendPhoneNumber(phoneNumber)
            .then(response => {
                setPhoneNumberUpdate(true);

            })
    }
    useEffect(() => {
        if (phoneNumberUpdate !== false) {

            push('/page8')
        }

    }, [phoneNumberUpdate])

    return (
        <div className="page7">
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page6">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>
            <div className="main-headline7">
                One last thing...

            </div>

            <div className="headline7">In case our experts would like
                to contact you, please leave
                your phone number
            </div>

            <textarea className="textboxName7"
                      name="phoneNumber"
                      value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}>

                </textarea>


            <div className="notice7">Notice</div>

            <div className="bottomText7">
                Since we respect your privacy, there is no
                obligation to provide your phone number at this
                stage. However, the possibility of talking to our
                experts may improve the chances of examining
                your case.
            </div>

            {/*<button className="send7" onClick={sendDataHandler} >send</button>*/}
            {/*<Link to="/page8">  <button className="next7" onClick="nextPage">Next</button> </Link>*/}

            <button
                type="button"
                className="next7"
                onClick={sendDataHandler}
            >
                Next
            </button>
        </div>


    );
}

export default Page7;