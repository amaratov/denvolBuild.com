import React, {useState, useEffect} from 'react';
import Slider from 'react-slick/lib';
import {useMediaQuery} from 'react-responsive';

import './CustomerReviews.scss';
import ReviewItem from './ReviewItem/ReviewItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {database} from "../../../fb";
import Spinner from "../../UI/Spinner/Spinner";
import Aux from '../../../Layout/Aux';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const CustomerReviews = () => {
    const[reviews,setReviews] = useState([]),
         [isViewerOpen,setIsViewerOpen] = useState(false),
         [src,setSrc] = useState([]),
         [slidesToShow,setSlidesToShow] = useState(4),
         [slideToScroll,setSlidesToScroll] = useState(2);



    const show3SLides = useMediaQuery({minWidth:1210,maxWidth:1562}),
          show2Slides = useMediaQuery({minWidth: 844,maxWidth: 1210}),
          show1Slides = useMediaQuery({maxWidth:844});

    useEffect(()=>{
        if (show3SLides){
            setSlidesToShow(3);
        }else if (show2Slides){
            setSlidesToShow(2)
        }else if (show1Slides){
            setSlidesToShow(1);
            setSlidesToScroll(1);
        }else{
            setSlidesToShow(4);
            setSlidesToScroll(2);
        }
    },[show3SLides, show2Slides, show1Slides]);

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slideToScroll,
        initialSlide: 0
    };


    const handleViewer = (data) =>{
        document.getElementsByClassName("Toolbar")[0].style.display='none';
        document.body.classList.add('lockScroll');
        document.documentElement.classList.add('lockScroll');
        const urls = data.urls;
        setSrc(urls);
        setIsViewerOpen(true);
    };
    const closeViewer = ()=>{
        document.getElementsByClassName("Toolbar")[0].style.display='block';
        setIsViewerOpen(false);
        document.body.classList.remove('lockScroll');
        document.documentElement.classList.remove('lockScroll');
    };

    useEffect(()=>{
        database.ref('Reviews/').on('value',snapshot=>{
            let reviewsToArray = [];
            snapshot.forEach(childSnapshot=>{
                reviewsToArray.push(childSnapshot.val());
            });
            setReviews(reviewsToArray);
        });
    },[]);

    let content = <Spinner/>;
    if (reviews.length>0){
        content = reviews.map((review,i)=>(
            <ReviewItem
                key={i}
                date={review.currentDate}
                stars={review.rating}
                name={review.name}
                avatar={review.picture}
                review={review.review}
                reviewPics={review.reviewPics}
                viewerData={handleViewer}
                title={review.reviewTitle}
            />
        ));
    }
    return (
        <Aux>
            <div className={"CustomerReviews"} id={'Reviews'}>
                <h2>Customers reviews</h2>
                <div className={"Reviews"}>
                    <Slider {...settings}>
                        {content}
                    </Slider>
                </div>
            </div>
            {isViewerOpen&&(
                <Lightbox images={src} onClose={closeViewer} buttonAlign={'center'}/>
            )}
        </Aux>
    );
};
export default CustomerReviews;
