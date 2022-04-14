import React from 'react';
import "../../UI/ScrollUp/ScrollUp";

import './FrontPage.scss';
import ScrollUp from "../../UI/ScrollUp/ScrollUp";
import ScrollDownArrow from "../../UI/ScrollDownArrow/ScrollDownArrow";
const FrontPage = () => {
    return (
        <div className={'FrontPage'}>
            {/*Estimates box*/}
            <div className={'FrontPageEstBox'}>
                <h1>Free Estimates</h1>
                <hr/>
                <a href={'mailto:vlodymyr@denvolcontracting.com'} target={'_blank'}  rel="noopener noreferrer">vlodymyr@denvolcontracting.com</a><br/>
                <a href={'tel:226-224-3658'}>(226)224-3858</a>
            </div>
            {/*  Title  */}
            <div className={'FrontPageTitle'}>
                 <h1>
                     WE KNOW HOW TO DO <br/>
                     YOUR IDEAL HOUSE REMODELING
                 </h1>
            </div>
            {/*Scroll down arrow*/}
            <ScrollDownArrow scrollTo={'LeaveReview'}/>
            {/*ScrollUp button*/}
            <ScrollUp/>
        </div>
    );
};

export default FrontPage;
