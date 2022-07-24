import Logo from './Logo.js';
import '../styles/Style_for_all_pages.css';
import {Link, useHistory} from "react-router-dom";
import React, {useEffect, useState} from "react";
import service from "../../api";
import arrow from "../images-forpages-style/arrow.png";
import advoline_logo from "../images-forpages-style/advoline_logo.png";

function Page6(props) {
    const [title, setTitle] = useState("");
    const [usercomment, setUsercomment] = useState("");
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
        console.log(image.name);
        form_data.append('usercomment', usercomment);
        form_data.append('title', title);

        service.fileService.sendImage3(form_data).then(response => {
            setEndOfServerTransfer(true);
        })
    }

    useEffect(() => {
        if (endOfServerTransfer !== false) {
            push('/page7');
        }

    }, [endOfServerTransfer])
    return (


        <div className="page6">
            <div className="logo5">
                <img src={advoline_logo} alt="arrow"/>
            </div>
            <Link to="/page5">
                <button className="arrow5">
                    <img src={arrow} alt="arrow"/>
                </button>
            </Link>

            {/*<Logo />*/}
            <div className="main-headline6">
                Ok {props.name}

            </div>

            <div className="question6">Do you have any other
                relevant information?
            </div>

            <div className="note6">(if not, just click Next)</div>

            <div className="formText6">Please upload it here:</div>

            <div className="box6">
                <button className="button4" onClick={handleClick}>Upload</button>
                <input className="upload6" type="file" ref={hiddenFileInput} id="image" accept="image/png, image/jpeg"
                       onChange={(evt) => setImage(evt.target.files[0])}/>
            </div>

            <div className="bottomNote6">
                You can upload multiple files at once
            </div>

            <div className="write-it-here6">
                Write it here:

            </div>
            <input className="textbox6" type="text" value={usercomment}
                   onChange={(evt) => setUsercomment(evt.target.value)}/>
            {/*<textarea className="textbox6">*/}
            {/*</textarea>*/}

            {/*<button onClick={(evt) => handleSubmit(evt)} className="submit6" type="submit">Submit</button>*/}


            {/*<Link to="/page7">  <button className="next6" onClick="nextPage">Next</button></Link>*/}
            <button
                type="button"
                className="next6"
                onClick={(evt) => handleSubmit(evt)}
            >
                Next
            </button>

            <div className="bottomText6">
                by clicking `NEXT` I give ADVOLINE my permission
                to use my details and documents for legal
                examination purpose
            </div>
        </div>

    );
}

export default Page6;