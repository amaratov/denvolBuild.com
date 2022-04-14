import React from 'react';

import './Info.scss';

const Info = () => {
    return (
        <div className={'Info'}>
            <h1>
                <span className="InfoTitleBlack" id={'den'}>DEN</span><span>VOL</span><br/>
                <span className="InfoTitleBlack">contr</span><span id={'act'}>acting</span>
            </h1>
            <div className={'InfoImage'}>
                <img src={require('../../../assets/home/interior.png')} alt="interior"/>
            </div>
            <div className={'InfoText'}>
                <p style={{margin:0}}>
                    We are a proudly local professional construction company in London, ON.
                    Denvol Contracting has earned a reputation for building unique houses,
                    which are carefully crafted to fit the specific desires of each of our customers.
                    Contact us to find out how we can help build your custom dream home.
                </p>
            </div>
        </div>
    );
};

export default Info;
