import React from 'react';
import {useHistory} from 'react-router-dom';
import logoImg from '../../../assets/toolbar/logo.svg';
import  './Logo.scss';

const Logo = () => {
    const history = useHistory();
    const goHome = () =>{
        history.push('/');
        window.scrollTo(0,0);
    };

    return (
        <div className={'Logo'} onClick={goHome}>
            <img src={logoImg} alt="Logo"/>
            <div className={'LogoTitle'}>
                <h2>DENVOL</h2>
                <span>
                    <hr/>contracting <hr/>
                </span>
            </div>

        </div>
    );
};

export default Logo;
