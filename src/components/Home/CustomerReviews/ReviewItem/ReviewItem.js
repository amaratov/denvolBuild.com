import React from 'react';
import StarRating from 'react-star-ratings';


import './ReviewItem.scss';

const ReviewItem = props => {


    const openImageViewer = () =>{

      props.viewerData({
          urls: props.reviewPics
      });
    };

    let pics = null;
    if(props.reviewPics){
        pics = props.reviewPics.slice(0,3).map((pic,id)=>{
            if (id===0){
                return (<div id={'FirstPic'} key={id}>
                    <img className={'ReviewPics'} src={pic}  alt={'first pic'} onClick={openImageViewer}/>
                </div>)
            }else {
                return(<div className={'OtherTwoPics'} key={id}>
                    <img className={'ReviewPics'}  src={pic} alt={'other pics'} onClick={openImageViewer}/>
                </div>)
            }
        })
    }

    return (
        <div className={'ReviewItem'} key={props.key}>
            <div className={'UserInfo'}>
                <span id={"date"}>{props.date.substr(4)}</span>
                <img src={props.avatar?props.avatar:require('../../../../assets/home/avatar.png')} alt="User's profile" id={"avatar"}/>
                <div id={"smallInfo"}>
                    <strong>{props.name}</strong>
                    <img src={require("../../../../assets/home/verified.png")} alt="verified"/><br/>
                </div>
                <br/>
                <StarRating
                rating={5}
                starRatedColor={'orange'}
                starHoverColor={'gold'}
                numberOfStars={props.stars}
                starDimension={"25px"}
                starSpacing={"2px"}/>
            </div>
            <div id={"ReviewText"}>
                <h4>{props.title}</h4>
                <div>
                    {props.review}
                </div>
            </div>
            <div id={"CustomerPics"}>
                {pics}
            </div>
        </div>
    );
};

export default ReviewItem;
