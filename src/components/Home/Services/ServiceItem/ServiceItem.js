import React from 'react';
import './ServiceItem.scss';

const ServiceItem = props => {
    const redirectToServices = ()=>{
        props.history.replace('/services');
    };

    return (
        <div className={'ServiceItem'} onClick={redirectToServices}>
            <img src={props.src} alt={props.name}/>
            <h3>{props.name}</h3>
        </div>
    );
};

export default ServiceItem;
