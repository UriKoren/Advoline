import { HashRouter as Router, Route, Switch  } from 'react-router-dom';
import {useState} from "react";

import Page1 from "./Page1";
import Page2 from "./page2";
import Page3 from "./Page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import React from 'react'



function PagesRenderer() {
    const [lawyerType, setLawyerType] = useState("");
    const [name, setName] = useState("");


    const parenCallBack = (childData) => {
        setLawyerType(childData);

    }
    const parenCallBack2 = (childData) => {
        setName(childData);

    }

    return (
        <Router>
            <div className="App">

                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Page1 parenCallBack={ parenCallBack } />
                        </Route>
                        <Route path="/page2">
                            <Page2 lawyerType={ lawyerType } />
                        </Route>
                        <Route path="/page3">
                            <Page3 parenCallBack2={ parenCallBack2 }/>
                        </Route>
                        <Route path="/page4">
                            <Page4 name={ name }/>
                        </Route>
                        <Route path="/page5">
                            <Page5 name={ name }/>
                        </Route>
                        <Route path="/page6">
                            <Page6 name={ name }/>
                        </Route>
                        <Route path="/page7">
                            <Page7 />
                        </Route>
                        <Route path="/page8">
                            <Page8 />
                        </Route>
                        <Route path="/page9">
                            <Page9 />
                        </Route>



                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default PagesRenderer;


