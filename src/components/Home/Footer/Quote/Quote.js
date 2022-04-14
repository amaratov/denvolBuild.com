import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import "./Quote.scss";
import Spinner from "../../../UI/Spinner/Spinner";

const Quote = props => {
    //state
    const
        [type,setType] = useState(""),
        [fullName,setFullName] = useState(""),
        [email,setEmail] = useState(""),
        [phone,setPhone] = useState(""),
        [message,setMessage] = useState(""),
        [alert,setAlert] = useState(""),
        [loading,setLoading] = useState(false);

    const validateQuote = ()=>{
        setAlert("");

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        function validatePhone(phone){
            const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
            return re.test(phone);
        }


        if (fullName.trim()===""){
            setAlert("Please enter your name");
        } else if (!validateEmail(email)){
            setAlert("Please enter valid email");
        } else if (!validatePhone(phone)){
            setAlert("Please enter valid phone");
        }else if (message.trim()===""){
            setAlert("Please enter your message");
        }else {
            return true;
        }

    };
    const resetForm = ()=>{
      document.getElementById('quoteForm').reset();
    };


    const sendEmail=(e)=>{
        e.preventDefault();

        if (validateQuote()) {
            const data = {
                from_name: fullName,
                email:email,
                phone:phone,
                message:message,
                type:type
            };
            setLoading(true);
            emailjs.send(
                'service_n74704n',
                'template_f6mceb3',
                data,
                'user_VfyfjWeNBsqFU1KgbTTb0').then(result=>{
                    setLoading(false);
                    console.log(result);
                    resetForm();
                    setAlert("Email has been sent successfully");
            }).catch(err=>console.log(err.text));
        }


    };


    return (
        <div id={'Quote'}>
            {alert?
                <div className={'alert alert-dark'}>{alert}</div>
                :
                <h3 className={"FooterH3"}>Get a Quote</h3>
            }
            {loading&&<Spinner/>}
            <form action="#" id={'quoteForm'}>
                <select className={'form-control'}
                        onChange={event => setType(event.target.options[event.target.selectedIndex].text)}>
                    <option>Plumbing</option>
                    <option>Painting</option>
                    <option>Heating</option>
                    <option>Drywall</option>
                    <option>Electrical</option>
                    <option>Exterior</option>
                    <option>Custom home construction</option>
                    <option>Renovations</option>
                    <option>Kitchen remodeling</option>
                    <option>Bathroom remodeling</option>
                    <option>Smart home installations</option>
                    <option>Decks</option>
                    <option>Outdoor living</option>
                </select>
                <input type="text" placeholder={'Your Name'} onChange={event => setFullName(event.target.value)}/>
                <input type="text" placeholder={'Your Email'} onChange={event => setEmail(event.target.value)}/>
                <input type="text" placeholder={'Your Phone Number'} onChange={event => setPhone(event.target.value)}/>
                <textarea name="message" cols="30" rows="10" placeholder={'Your message'} onChange={event => setMessage(event.target.value)}/>
                <button className={'btn'} onClick={sendEmail}>Send</button>
            </form>
        </div>
    );
};

export default Quote;
