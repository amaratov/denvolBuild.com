import React,{useState,useEffect} from 'react';
import {RiArrowUpSLine} from "react-icons/ri";

import "./ScrollUp.scss";

const ScrollUp = () => {
    const [isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if(window.pageYOffset>300){
            setIsVisible(true);
        }else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () =>{
      window.scrollTo({
          top:0,
          behavior:"smooth"
      })
    };

    useEffect(()=>{
        document.addEventListener("scroll",function (e) {
            toggleVisibility();
        },false);
    },[]);

    return (
        <div className={"ScrollUp"}>
            {isVisible && (
                <div onClick={()=>scrollToTop()}>
                    <RiArrowUpSLine size={50}/>
                </div>
            )}
        </div>
    );
};

export default ScrollUp;
