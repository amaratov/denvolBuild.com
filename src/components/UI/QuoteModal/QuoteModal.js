import React from 'react';

import Modal from '../Modal/Modal';
import Quote from "../../Home/Footer/Quote/Quote";


const QuoteModal=props=> {
    return (
        <Modal show={props.showModal} modalClosed={props.closeModal}>
            <Quote/>
        </Modal>
    );
};

export default QuoteModal;
