import React from 'react';
import { GoLocation,GoCalendar } from "react-icons/go"
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import {useMediaQuery} from 'react-responsive';


import "./GetInTouch.scss";
import Aux from "../../../../Layout/Aux";


const GetInTouch = (props) => {

    const isSmallMobile = useMediaQuery({minWidth:464});


    return (
        <div style={{height:'100%'}}>
            {props.showTitle&&<h3 className={'FooterH3'}>Get In Touch</h3>}
            <div className={"GetInTouch"}>
                <div>
                    <div className={'GetInTouchContent'}>
                        <GoLocation size={30} style={{marginTop:'5px'}}/>
                        <span>
                            220 Oakcrest Dr {isSmallMobile&&<br/>}
                            Komoka, ON, Canada N0L 1R0
                        </span>
                    </div>
                   {isSmallMobile&&<br/>}
                    <div className={'GetInTouchContent'}>
                        {isSmallMobile
                            ?(
                                <Aux>
                                    <AiOutlinePhone size={30}/>
                                    <span>
                                    <a href="tel:226-224-3658" className={'link'}>(226) 224-3658</a>
                                    </span>
                                </Aux>
                            )
                            :(
                                <a href="tel:226-224-3658" className={'link'}>
                                    <span>
                                        <AiOutlinePhone size={30}/>
                                    </span>
                                </a>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className={'GetInTouchContent'}>
                        {isSmallMobile?(
                                <Aux>
                                    <AiOutlineMail size={30}/>
                                    <span>
                                        <a href="mailto:vlodymyr@denvolcontracting.com" className={'link'}>vlodymyr@denvolcontracting.com</a>
                                    </span>
                                </Aux>
                            )
                            :(
                                <a href="mailto:vlodymyr@denvolcontracting.com" className={'link'}>
                                    <span>
                                        <AiOutlineMail size={30}/>
                                    </span>
                                </a>
                            )
                        }

                    </div>
                    {isSmallMobile&&<br/>}
                    <div className={'GetInTouchContent'}>
                        <GoCalendar size={30}  style={{marginTop:'5px'}}/>
                        <span>
                            <strong>Monday-Friday:</strong><br/>
                                    8:00 AM - 6:00 PM
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
