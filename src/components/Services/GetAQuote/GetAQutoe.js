import React, {useState} from 'react';

import "./GetAQuote.scss";
import Aux from "../../../Layout/Aux";
import QuoteModal from '../../UI/QuoteModal/QuoteModal';


const GetAQutoe = () => {
    const [clicked,setClicked] = useState(false);

    const showModalTrigger = () =>{
        setClicked(!clicked);
    };
    return (
        <Aux>
            <div id={'GetAQuote'}>
                <p>
                    For every single customer - free consultation on choosing the right <br/>
                    manufacturer and the quality of the product.
                </p>
                <button onClick={showModalTrigger}>Get a quote</button>
            </div>
            <QuoteModal showModal={clicked} closeModal={showModalTrigger}/>    
        </Aux>
    );
};

export default GetAQutoe;
