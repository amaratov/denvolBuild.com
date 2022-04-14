import React from 'react';
import './NavItems.scss';
import NavItem from './NavItem/NavItem';
import {useLocation} from 'react-router-dom';


const NavigationItems = () => {
    let location = useLocation().pathname;
    if(location!=='/'){location+='/';}
    return (
        <ul className={'NavItems'}>
            <NavItem value={'Home'} to={'/#'}/>
            <NavItem value={'Reviews'} to={'/#Reviews'}/>
            <NavItem value={'Services'} to={'/services#top'}/>
            <NavItem value={'Contact Us'} to={location+'#Footer'}/>
        </ul>
    );
};

export default NavigationItems;
