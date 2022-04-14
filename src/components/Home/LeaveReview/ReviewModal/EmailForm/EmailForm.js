import React from 'react';
import Aux from '../../../../../Layout/Aux';
import './EmailForm.scss';

const EmailForm = (props) => {
    return (
        <Aux>
            <input type="input"
                   className={"emailFormInput"}
                   placeholder={"Name"}
                   name={"nameField"}
                   id={"nameField"}
                   required
                   onChange={props.nameChange}
            />
            <label htmlFor={'nameField'} className={"emailFormLabel"}>Name</label>
            <br/>
            <input type="input"
                   className={"emailFormInput"}
                   placeholder={"Email"}
                   name={"email"}
                   id={"email"}
                   required
                   onChange={props.emailChange}
            />
            <label htmlFor={'email'} className={"emailFormLabel"}>Email</label>
            <br/>
            <input type="input"
                   className={"emailFormInput"}
                   placeholder={"Phone Number"}
                   name={"phone"}
                   id={"phone"}
                   onChange={props.phoneChange}
            />
            <label htmlFor={'phone'} className={"emailFormLabel"}>Phone Number</label>
            <br/>
        </Aux>
    );
};

export default EmailForm;
