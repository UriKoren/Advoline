import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import service from "../../api";
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";

function Page5(props) {

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
        form_data.append('title', title);

        service.fileService.sendImage2(form_data).then(response => {
            setEndOfServerTransfer(true);
        })
    }

    useEffect(() => {
        if (endOfServerTransfer !== false) {
            push('/page6');
        }

    }, [endOfServerTransfer])


    return (

        <div className="page5">
            {/*<Logo />*/}
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page4">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>


            <div className="main-headline5">
                Ok {props.name},

            </div>

            <div className="question5">Do you have documented copies
                of any interactions with
                the property owners,
                such as WhatsApp/email/letter?
            </div>

            <div className="headline5">(if not, just click Next)</div>

            <div className="formText5">Please upload it here:</div>

            <div className="box5">
                <button className="button4" onClick={handleClick}>Upload</button>
                {/*<input type = "text" value={title} onChange={(evt) => setTitle(evt.target.value)}/>*/}
                <input className="upload5" type="file" ref={hiddenFileInput} id="image" accept="image/png, image/jpeg"
                       onChange={(evt) => setImage(evt.target.files[0])}/>
            </div>

            <div className="bottomText5">
                You can upload multiple files at once
            </div>
            {/*<button onClick={(evt) => handleSubmit(evt)} className="submit5" type="submit">Submit</button>*/}


            {/*<Link to="/page6"><button className="next5" onClick="nextPage">Next</button> </Link>*/}
            <button
                type="button"
                className="next5"
                onClick={(evt) => handleSubmit(evt)}
            >
                Next
            </button>
        </div>

    );
}

export default Page5;