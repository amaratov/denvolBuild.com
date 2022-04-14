import React from 'react';
import Aux from '../../../Layout/Aux';
import BackDrop from './BackDrop/BackDrop';
import './Modal.scss';


const Modal = props => {

    if (props.show){
        document.body.classList.add('lockScroll');
        document.documentElement.classList.add('lockScroll');
    }else {
        document.body.classList.remove('lockScroll');
        document.documentElement.classList.remove('lockScroll');
    }


    return (
        <Aux>
            <BackDrop show={props.show} clicked={props.modalClosed}/>

            <div className={'Modal'}
                style={{
                    transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
            {props.alert?
                <div className={'alert alert-danger'} role={'alert'}>
                    {props.alert}
                </div>
                :null}


                {props.children}
            </div>
        </Aux>
    );
};

export default Modal;
