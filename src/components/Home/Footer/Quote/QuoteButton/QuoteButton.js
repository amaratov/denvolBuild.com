import React, {useState} from 'react';
import Aux from "../../../../../Layout/Aux";
import QuoteModal from "../../../../UI/QuoteModal/QuoteModal";

const QuoteButton = (props) => {
    const [clicked,setClicked] = useState(false);

    const showModalTrigger = () =>{
        setClicked(!clicked);
    };
    return (
        <Aux>
            <div className={props.class}>
                <button onClick={showModalTrigger}>Get a Quote</button>
            </div>
            <QuoteModal showModal={clicked} closeModal={showModalTrigger}/>
        </Aux>
    );
};

export default QuoteButton;
