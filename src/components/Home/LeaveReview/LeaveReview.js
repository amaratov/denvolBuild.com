import React, {useState} from 'react';
import './LeaveReview.scss';
import ReviewModal from './ReviewModal/ReviewModal';
import Aux from "../../../Layout/Aux";

const LeaveReview = () => {
    const [clicked,setClicked] = useState(false);

    const showModalTrigger = () =>{
        setClicked(!clicked);
    };

    return (
        <Aux>
            <div id={'LeaveReview'}>
                <h1>Leave us a Review!</h1>
                <button onClick={showModalTrigger}>Review</button>
            </div>
            <ReviewModal showModal={clicked} closeModal={showModalTrigger}/>
        </Aux>

    );
};

export default LeaveReview;
