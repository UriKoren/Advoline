import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import service from "../../api";
import React, {Component} from 'react';
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";


function Page4(props) {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const hiddenFileInput = React.useRef(null);
    const [endOfServerTransfer, setEndOfServerTransfer] = useState(false)

    const {push} = useHistory()

    const handleClick = event => {
        hiddenFileInput.current.click();
    };


    const handleSubmit = (e) => {

        let form_data = new FormData();
        form_data.append('image', image, image.name);
        console.log(image.name)
        form_data.append('title', title);

        service.fileService.sendImage(form_data).then(response => {
            setEndOfServerTransfer(true)
        })

    }

    useEffect(() => {
        if (endOfServerTransfer !== false) {
            push('/page5')
        }

    }, [endOfServerTransfer])

    return (
        <div className="page4">

            <div className="logo4">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page3">
                <button className="arrow4">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>

            {/*<Logo />*/}
            <div className="main-headline4">
                Ok {props.name},
                We are almost done...
            </div>

            <div className="question4">Do you have another document
                that you want to upload??
            </div>

            <div className="headline4">(if not, just click Next)</div>

            <div className="formText4">Please upload it here:</div>

            <div className="box4">
                {/*<label>*/}
                {/*    Title*/}
                {/*    <input type = "text" value={title} onChange={(evt) => setTitle(evt.target.value)}/>*/}
                {/*</label>*/}
                {/*<br/>*/}
                <label>
                    <button className="button4" onClick={handleClick}>Upload</button>
                    <input className="upload4" type="file" ref={hiddenFileInput} id="image"
                           accept="image/png, image/jpeg" onChange={(evt) => setImage(evt.target.files[0])}/>
                </label>
                <br/>
            </div>

            <div className="bottomText4">
                You can upload multiple files at once
            </div>
            {/*<button onClick={(evt) => handleSubmit(evt)} className="submit4" type="submit">Submit</button>*/}


            {/*<Link to="/page5"><button className="next4" >Next</button> </Link>*/}
            <button
                type="button"
                className="next4"
                onClick={(evt) => handleSubmit(evt)}
            >
                Next
            </button>
        </div>
    );
    // }
}

export default Page4;

