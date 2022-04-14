import React from 'react';
    import {useMediaQuery} from 'react-responsive';

import "./Footer.scss";
import Quote from "./Quote/Quote";
import Location from "./Location/Location";
import Socials from "./Socials/Socials";
import GetInTouch from "./GetInTouch/GetInTouch";
import QuoteButton from './Quote/QuoteButton/QuoteButton';

const Footer=()=>{

    const isMobile = useMediaQuery({minWidth:768});


        return (
            <div id={'Footer'}>
                <h1>Contact Us</h1>
                <div id={'mainFooter'}>
                    <div id={'mainFooterQuote'}>
                        {isMobile ? <Quote/> : <QuoteButton class={'QuoteButton'}/>}
                    </div>
                    <div id="mainFooterLocation">
                        <Location showTitle={isMobile}/>
                    </div>
                    <div id="mainFooterSocials">
                        {isMobile&&<Socials/>}
                    </div>
                    <div id="mainFooterTouch">
                        <GetInTouch showTitle={isMobile}/>
                    </div>
                </div>
            </div>
        );

};

export default Footer;
