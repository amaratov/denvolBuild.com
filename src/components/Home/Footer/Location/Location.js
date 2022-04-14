import React from 'react';
import "./Location.scss";


const Location = (props) => {
    let height;
    if (props.showTitle){
        height='90%';
    }else{
        height='100%';
    }

    return (
        <div className={'Location'}>
            {props.showTitle&&<h3 className={"FooterH3"}>Location</h3>}
            <iframe
                title={'location'}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220696.104991416!2d-81.46135956392497!3d42.9727677711996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882efc69329106af%3A0xf4d040cbee62bc04!2s220%20Oakcrest%20Dr%2C%20Komoka%2C%20ON%20N0L%201R0!5e0!3m2!1sen!2sca!4v1607990644713!5m2!1sen!2sca"
                width="100%" height={height} frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                tabIndex="0"/>
        </div>
    );
};

export default Location;
