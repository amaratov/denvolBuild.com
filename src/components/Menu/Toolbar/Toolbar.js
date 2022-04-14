import React from 'react';
import './Toolbar.scss';
import Logo from '../Logo/Logo';
import NavItems from '../Navigation/NavigationItems';
import {AiOutlineMenu} from 'react-icons/ai';


const Toolbar = (props) => {
    return (
        <header className={'Toolbar'}>
            <Logo/>
            <nav className={'Nav'}>
                <NavItems/>
            </nav>
            <div onClick={props.clicked} className={'Hamburger'}>
                <AiOutlineMenu size={30}/>
            </div>
            <hr style={{margin:'0 -20px',borderBottom:'0'}}/>
        </header>
    );
};

export default Toolbar;
