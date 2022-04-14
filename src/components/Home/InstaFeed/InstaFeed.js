import React, {useEffect} from 'react';
import './InstaFeed.scss';

const InstaFeed = () => {

    useEffect(()=>{
        const script = document.createElement("script");

        script.src = 'https://apps.elfsight.com/p/platform.js';
        script.defer=true;

        document.body.appendChild(script);
    },[]);

    return (
        <div className={'InstaFeed'}>
            <h1>Our Projects</h1>
            <div className = "elfsight-app-bb7ac226-63ca-4440-9a6e-26533f8aa3fe"/>
            <div className={'hideLogo'}/>
        </div>
    );
};

export default InstaFeed;


