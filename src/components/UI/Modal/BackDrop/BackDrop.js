import React from 'react';
import './BackDrop.scss';

const BackDrop = props => {
    return (
        props.show ? <div className={'BackDrop'} onClick={props.clicked}/> : null
    );
};

export default BackDrop;
