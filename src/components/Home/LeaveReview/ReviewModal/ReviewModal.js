import React, {useReducer, useState,useEffect} from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import {useMediaQuery} from 'react-responsive';
import './ReviewModal.scss';
import StarRatings from 'react-star-ratings';
import Modal from '../../../UI/Modal/Modal';
import {GrClose, GrFacebookOption, GrFormPreviousLink, GrMail} from 'react-icons/gr';
import {auth, database, provider, storage} from "../../../../fb";
import EmailForm from "./EmailForm/EmailForm";


const ReviewModal = props => {
    const [rating, setRating] = useState(0),
          [loading,setLoading] = useState(false),
          [emailForm,setEmailForm] = useState(false),
          [emailName,setEmailName] = useState(""),
          [emailEmail,setEmailEmail] = useState(""),
          [emailPhone,setEmailPhone] = useState(""),
          [review,setReview] = useState(""),
          [progress,setProgress] = useState(0),
          [reviewTitle,setReviewTitle] = useState(""),
          [alert,setAlert] = useState(""),
          [dimension,setDimension] = useState('');

    const isMobile = useMediaQuery({query:'(max-width:500px)'});

    useEffect(()=>{
        if(isMobile){
            setDimension('30px');
        }else{
            setDimension('50px');
        }
    },[isMobile]);

    const changeRating = newRating=>{
        setRating(newRating);
    };

    const uploadImages = async (image) => {
        try {
            await Promise.all(image.map(picture =>
                new Promise((resolve, reject) => {
                    setLoading(true);
                    setProgress(0);
                    storage.ref(`/images/${picture.name}`)
                        .put(picture)
                        .on('state_changed', (snapshot) => {
                                setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
                                console.log("Progress:" + Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
                                setLoading(true);
                            },
                            reject, () => {
                                storage.ref(`/images/`)
                                    .child(picture.name)
                                    .getDownloadURL()
                                    .then(url => {
                                        console.log(picture.name);
                                        console.log("uploaded link: "+url);
                                        picture.url = url;
                                        resolve(url);
                                    }).catch(()=>{
                                        setProgress(0);
                                        setLoading(false);
                                    })
                            })
                })
            ));
            dispatch({type:'ADD_FILE_TO_LIST',files:image});
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    const handleImage= (e) => {
        let image = e.target.files;

        const validTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (image.length > 10) {
            setAlert("You're only allowed up to 10 pictures");
            return;
        }
        for (let i = 0; i < image.length; i++) {
            const fileType = image[i]['type'];
            if (!validTypes.includes(fileType)) {
                setAlert(fileType + "Not an image");
                return;
            }
        }

        // const existingFiles = data.fileList.map(f=>f.name);
        // image = image.filter(f=>!existingFiles.includes(f.name));
        image = Array.from(image);
        uploadImages(image);

    };

    provider.setCustomParameters({
        'display':'popup'
    });

    const validateModal = () =>{
        setAlert("");
        if(rating===0){
            setAlert("Please click on a star to show your rating");
        }else if(review.trim()===""){
            setAlert("Please write your review");
        }else {
            return(true);
        }
    };
    const validateEmailForm = () =>{
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        function validatePhone(phone){
            const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
            return re.test(phone);
        }
        setAlert("");
        if(emailName.trim()===""){
            setAlert("Enter valid Name");
        }else if(emailName.length>20){
            setAlert("Name is too long");
        }else if (!validateEmail(emailEmail)){
            setAlert("Enter valid email");
        }else if (!validatePhone(emailPhone)){
            setAlert("Enter valid phone number");
        }else{
            return true;
        }
    };
    const enterFbHandler = () =>{
        if (validateModal()){
            auth.signInWithPopup(provider).then(async result => {
                console.log(result);
                const profile = result.additionalUserInfo.profile,
                    email = profile.email,
                    name = profile.name,
                    picture = profile.picture.data.url,
                    userId = profile.id,
                    imgs = Array.from(data.fileList,x=>x.url),
                    currentDate = new Date().toDateString();
                console.log(imgs);
                if (imgs.length > 0) {
                    try {
                        database.ref('Reviews/').push().set({
                            userId: userId,
                            email: email,
                            name: name,
                            picture: picture,
                            review: review,
                            rating: rating,
                            reviewPics: imgs,
                            currentDate:currentDate,
                            reviewTitle:reviewTitle

                        });
                        setLoading(false);
                        (props.closeModal)();
                    } catch (e) {
                        console.log(e);
                        setLoading(false);
                    }
                } else {
                    database.ref('Reviews/').push().set({
                        userId: userId,
                        email: email,
                        name: name,
                        picture: picture,
                        review: review,
                        rating: rating,
                        currentDate:currentDate,
                        reviewTitle:reviewTitle
                    });
                    (props.closeModal)();
                }
            }).catch(error=>{console.log(error);});
        }
    };
    const emailClicked = ()=>{
      if (validateModal()) {
          setEmailForm(true);
      }
    };

    const enterEmailHandler = () =>{
        if(validateEmailForm()){
            const imgs = Array.from(data.fileList,x=>x.url),
                currentDate = new Date().toDateString();;

            if(imgs.length>0){
                database.ref('Reviews/').push().set({
                    email: emailEmail,
                    name: emailName,
                    review: review,
                    rating: rating,
                    reviewPics: imgs,
                    phoneNumber: emailPhone,
                    currentDate:currentDate,
                    reviewTitle:reviewTitle
                });
            }else {
                database.ref('Reviews/').push().set({
                    email: emailEmail,
                    name: emailName,
                    review: review,
                    rating: rating,
                    phoneNumber: emailPhone,
                    currentDate:currentDate,
                    reviewTitle:reviewTitle
                });
            }
            (props.closeModal)();
        }
    };

    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({type:'SET_DROP_DEPTH',dropDepth:data.dropDepth+1});
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 });
        if (data.dropDepth > 0) return;
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();

        e.dataTransfer.dropEffect = 'copy';
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true });
    };
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();

        let files = [...e.dataTransfer.files];

        if (files && files.length > 0) {
            const existingFiles = data.fileList.map(f => f.name);
            files = files.filter(f => !existingFiles.includes(f.name));

            e.dataTransfer.clearData();
            dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 });
            dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false });
            uploadImages(files);

        }
    };

    const removePicture = (image) =>{

        storage.ref(`images/${image.name}`).delete().then(()=>console.log(image.name+" Removed")).catch((e)=>console.log(e));

        const files = data.fileList.filter(file=>file.name!==image.name);
        dispatch({type:'UPDATE_FILE_LIST',files});
        console.log(files);
    };


    const reducer = (state,action)=>{
        switch (action.type) {
            case 'SET_DROP_DEPTH':
                return {...state,dropDepth:action.dropDepth};
            case 'SET_IN_DROP_ZONE':
                return {...state,inDropZone:action.inDropZone};
            case 'ADD_FILE_TO_LIST':
                return {...state,fileList:state.fileList.concat(action.files)};
            case 'UPDATE_FILE_LIST':
                return {...state,fileList:action.files};
            default:
                return state;
        }
    };
    const [data,dispatch] = useReducer(
        reducer,{dropDepth:0,inDropZone: false, fileList: []}
    );
    let content;
    if (emailForm){
        content = (
            <div className={'ReviewModal'}>
                <span onClick={props.closeModal} className={'ReviewModalClose'}>
                    {isMobile?
                        <GrClose size={20}/>
                        :
                        <GrClose size={32}/>
                    }
                </span>
                <span onClick={()=>setEmailForm(false)} className={'ReviewModalBack'}>
                    {isMobile?
                        <GrFormPreviousLink size={30}/>
                        :
                        <GrFormPreviousLink size={42}/>
                    }
                </span>
                <h1>Your contact information</h1>
                <div className={'ReviewModalEmailForm'}>
                    <EmailForm nameChange={event=>setEmailName(event.target.value)}
                               emailChange={event=>setEmailEmail(event.target.value)}
                               phoneChange={event=>setEmailPhone(event.target.value)}
                    />
                </div>

                <button onClick={enterEmailHandler}
                        className={"BtnVar"}>
                    Submit Review
                </button>
            </div>);
    }else {
       content = (
            <div className={data.inDropZone?'highlight ReviewModal':'ReviewModal'}
                 onDrop={e => handleDrop(e)}
                 onDragOver={e => handleDragOver(e)}
                 onDragEnter={e => handleDragEnter(e)}
                 onDragLeave={e => handleDragLeave(e)}
            >
                <span onClick={props.closeModal} className={'ReviewModalClose'}>
                    {isMobile?
                        <GrClose size={20}/>
                        :
                        <GrClose size={32}/>}
                </span>
                <h1>Leave us a Review!</h1>
                <StarRatings
                    rating={rating}
                    starRatedColor={'gold'}
                    starHoverColor={'orange'}
                    changeRating={changeRating}
                    numberOfStars={5}
                    starDimension={dimension}
                /><br/>
                <div className={'review'}>
                    <label htmlFor={'reviewTitle'} className={'review-label'}>Overall Experience:</label><br/>
                    <input type={'text'} id={'reviewTitle'} placeholder={'Overall Experience'}
                           onChange={event => setReviewTitle(event.target.value)} value={reviewTitle}/>
                </div>
                <div className={'review'}>
                    <label htmlFor={'review'} className={'review-label'}>Your Review:</label>
                     <textarea name="review"
                               id={'review'}
                               placeholder={'Enter your review here...'}
                               onChange={event => setReview(event.target.value)}
                               value={review}
                     />
                </div>
               <br/>
                <input type="file" id={'fileSelect'} onChange={handleImage} multiple={true}/>
                <label htmlFor={'fileSelect'} className={"BtnVar"} id={'fileSelectLabel'}>Select some images...</label>
                {data.fileList.length>0
                    ?
                    <ol className={'list-group'}>
                        {data.fileList.map(f=>{
                            return(<li className={'list-group-item'} key={f.name}>
                                {f.name}
                                <button className={'btn btn-light'} style={{float:'right'}} onClick={()=>removePicture(f)}>
                                    <GrClose />
                                </button>
                            </li>)
                        })}
                    </ol>
                    : !isMobile &&
                    <p style={{display:"inline-block",fontSize:"small",margin:'10px'} }>Or drag-and-drop them</p>
                }
                {loading?
                    <div className={'progress'}>
                        <div className={'progress-bar progress-bar-striped progress-bar-animated'}
                             role={'progressbar'}
                             aria-valuenow={progress}
                             aria-valuemin="0"
                             aria-valuemax="100"
                             style={{ width: progress + "%" }}
                        >
                            {progress}%
                        </div>
                    </div>
                    :null}
                <progress id={'progress-bar'} max={100} value={0} hidden/>
                <br/>
                <div className={'ReviewModalButtons'}>
                    <button className={'ReviewModalButtonsEmail'} onClick={emailClicked}>
                        {isMobile?
                            <GrMail color={'white'} size={15}/>
                            :
                            <GrMail color={'white'} size={30}/>
                        }
                        <span>Email</span>
                    </button>
                    <span className={'ReviewModalButtonsOr'}>or</span>
                    <button className={'ReviewModalButtonsFb'} onClick={enterFbHandler}>
                        {isMobile?
                            <GrFacebookOption color={'white'} size={15}/>
                            :
                            <GrFacebookOption color={'white'} size={30}/>
                        }

                        <span>Continue with Facebook</span>
                    </button>
                </div>
            </div>
        );
    }
    return (
        <Modal show={props.showModal} modalClosed={props.closeModal} alert={alert}>
            {content}
        </Modal>
    );
};

export default ReviewModal;
