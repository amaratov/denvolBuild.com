import React from 'react';
import {HashLink as NavLink} from 'react-router-hash-link';

import './NavItem.scss';

const NavItem = props => {

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <li className={'NavItem'}>
            <NavLink smooth to={props.to} scroll={scrollWidthOffset}>
                {props.value}
            </NavLink>
        </li>
    );
};

export default NavItem;
