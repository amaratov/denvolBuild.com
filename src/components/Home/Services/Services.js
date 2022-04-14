import React from 'react';

import './Services.scss';
import ServiceItem from './ServiceItem/ServiceItem';
import * as imgs from './action';

const Services = props => {
    return (
        <div className={'Services'}>
            <h1>Services</h1>
            <ServiceItem
                src={imgs.basement}
                name={'Basement'}
                {...props}
            />
            <ServiceItem
                src={imgs.plumbing}
                name={'Plumbing'}
                {...props}
            />
            <ServiceItem
                src={imgs.heating}
                name={'Heating'}
                {...props}
            />
            <ServiceItem
                src={imgs.drywall}
                name={'Drywall'}
                {...props}
            />
            <ServiceItem
                src={imgs.electrical}
                name={'Electrical'}
                {...props}
            />
            <ServiceItem
                src={imgs.exterior}
                name={'Exterior'}
                {...props}
            />
        </div>
    );
};

export default Services;
