import React from 'react';
import {FaYelp,FaInstagram,FaTwitter,FaFacebookF} from 'react-icons/fa';
import {useMediaQuery} from 'react-responsive';

import "./Socials.scss";

const Socials = ()=> {
        const isMobile = useMediaQuery({minWidth:767});
        return (
            <div className={"Socials"}>
                {isMobile&&<h3 className={'FooterH3'}>Socials</h3>}
                {/*Links*/}
                <div className={"SocialsContent"}>
                    <a href="https://www.facebook.com/denvolcontracting/" target={"_blank"} rel="noopener noreferrer" className={'SocialsLinks'}>
                        <div id={'fb'}><FaFacebookF size={25}/></div>
                    </a>
                    <a href="#" target={"_blank"} className={'SocialsLinks'}>
                        <div id={'tw'}><FaTwitter size={25}/></div>
                    </a>
                    <a href="https://www.instagram.com/denvolcontracting/" target={"_blank"} rel="noopener noreferrer" className={'SocialsLinks'}>
                        <div id={'in'}><FaInstagram size={25}/></div>
                    </a>
                    <a href="#" target={"_blank"} className={'SocialsLinks'}>
                        <div id={'yp'}><FaYelp size={25}/></div>
                    </a>
                </div>
            </div>
        );

};

export default Socials;
