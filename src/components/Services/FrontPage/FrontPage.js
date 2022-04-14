import React from 'react';

import {BsCheckCircle} from 'react-icons/bs';
import "./FrontPage.scss";
import ScrollDownArrow from "../../UI/ScrollDownArrow/ScrollDownArrow";

const FrontPage = () => {

    return (
        <div id={"FrontPage"}>
            <h1>SERVICES</h1>
            <div className={'Content'}>
                <h2>We will renovate your house better <br/> than you have imagined it.</h2>
                <ul>
                    <li><BsCheckCircle/>Custom home construction</li>
                    <li><BsCheckCircle/>Renovations</li>
                    <li><BsCheckCircle/>Kitchen Remodeling</li>
                    <li><BsCheckCircle/>Bathroom remodeling</li>
                    <li><BsCheckCircle/>Smart home installations</li>
                    <li><BsCheckCircle/>Exterior renovations</li>
                    <li><BsCheckCircle/>Drywall</li>
                </ul>
                <ul>
                    <li><BsCheckCircle/>Painting</li>
                    <li><BsCheckCircle/>Decks</li>
                    <li><BsCheckCircle/>Outdoor living</li>
                    <li><BsCheckCircle/>Basement finishing</li>
                    <li><BsCheckCircle/>Plumbing</li>
                    <li><BsCheckCircle/>Heating</li>
                    <li><BsCheckCircle/>Electrical</li>
                </ul>
                <ScrollDownArrow scrollTo={'Footer'}/>
            </div>
        </div>
    );
};

export default FrontPage;
