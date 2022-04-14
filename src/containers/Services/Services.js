import React from 'react';
import Footer from "../../components/Home/Footer/Footer";
import FrontPage from "../../components/Services/FrontPage/FrontPage";
import GetAQutoe from "../../components/Services/GetAQuote/GetAQutoe";

import { useMediaQuery } from 'react-responsive';


const Services = () => {
    const isMobile=useMediaQuery({minWidth:767});
    return (
        <div>
            <FrontPage/>
            {isMobile&&<GetAQutoe/>}
            <Footer/>
        </div>
    );
};

export default Services;
