import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import service from "../../api";
import React from 'react'
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";
import {useHistory} from 'react-router-dom'

function Page3(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [endOfServerTransfer, setEndOfServerTransfer] = useState(false);
    const [promissionDataSent, setPromissionDataSent] = useState(false); //need to add

    const {push} = useHistory()

    const sendDataHandler = () => {
        service.nameService.sendName(name, email)
            .then(response => {
                setEndOfServerTransfer(true);
            })
        sendNameToPage4()
    }

    const sendNameToPage4 = () => {
        props.parenCallBack2(name);

    }

    useEffect(() => {
        if (endOfServerTransfer !== false) {
            push('/page4')
        }

    }, [endOfServerTransfer])

    return (

        <div className="page3">
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page2">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>
            {/*<Logo />*/}
            <div className="main-headline3">
                Thank You!
            </div>

            <div className="headline3">
                To move forward, we need
                some more information


                We are fully committed for
                keeping your privacy
            </div>

            <div className="policy3">
                You can View & Save our privacy policy
                <a href="" target="_blank">here</a>
            </div>

            <div className="nameBox3"> Please enter your name:</div>

            <textarea className="textboxName3"
                      name="name"
                      value={name} onChange={(e) => setName(e.target.value)}>
                  Name
                </textarea>


            <div className="emailBox3"> Your email address:</div>

            <textarea className="textboxEmail3"
                      name="email"
                      value={email} onChange={(e) => setEmail(e.target.value)}>
                  Email
                </textarea>

            <div className="checkbox3" type="checkbox" id="permission" name="permission" value="yes">
                <label htmlFor="emailPermission"> I give ADVOLINE my permission to
                    contact me via my email</label>
            </div>


            <div className="bottomText3">
                ADVOLINE will NOT use your details
                without your prior approval
            </div>

            {/*<button className="saveButton3" onClick={ sendDataHandler }>Save</button>*/}
            {/*<Link to="/page4"> <button className="nextButton3" onClick={sendNameToPage4}>Next</button> </Link>*/}
            <button
                type="button"
                className="nextButton3"
                onClick={sendDataHandler}
            >
                Next
            </button>


        </div>

    );
}

export default Page3;