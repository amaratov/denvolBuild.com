import React from 'react';
import "./ScrollDownArrow.scss";

const ScrollDownArrow = (props) => {

    const scrollDown = () =>{
        let element = document.getElementById(props.scrollTo);
        element.scrollIntoView({
            behavior:"smooth"
        })
    };
    return (
        <div id={'ScrollDownArrow'} onClick={scrollDown}>
            <img src={require("../../../assets/home/arrowDown.png")} alt="arrow"/>
        </div>
    );
};

export default ScrollDownArrow;
