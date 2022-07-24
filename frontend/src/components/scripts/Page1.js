import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import "./page2";
import {Link} from 'react-router-dom';
import {useEffect, useState} from "react";
import service from "../../api";
import advoline_logo from "../images-forpages-style/advoline_logo.png";
import React from 'react'
import {useHistory} from 'react-router-dom'


function Page1(props) {
    const [userStory, setUserStory] = useState("");
    const [lawyerType, setLawyerType] = useState(null);
    const [isPending, seIsPending] = useState(true);
    const {push} = useHistory()

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }


    const sendDataHandler = async () => {
        service.userStoryService.sendUserStory(userStory)
            .then(response => {
                setLawyerType(response)
            })


    }

    const changeLayerType = () => {
        props.parenCallBack(lawyerType);
        console.log("in changeLayerType")
    }
    useEffect(() => {
        if (lawyerType !== null) {
            changeLayerType();
            push('/page2')
        }

    }, [lawyerType])

    return (


        <div className="page1">
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <div className="welcome1">
                Welcome!
            </div>

            <div className="headline1">Tell us your story in your own words</div>
            <textarea className="textbox1"
                      name="userStory"
                      value={userStory}
                      onChange={(e) => setUserStory(e.target.value)}
            >
              My landlord terminated my contract without any prior notice
          </textarea>

            <div className="bottomText1">
                only one story can be told at this time
                if you have more than one story
                it will be possible for you later
            </div>

            <button
                type="button"
                className="next1"
                onClick={sendDataHandler}
            >
                Next
            </button>

        </div>

    );
}

export default Page1;