import React from 'react';
import Axios from 'axios';
import {Formik} from 'formik';
import Input from '../GraphicalControl/Input';
import * as Yup from 'yup';
import {confirmAlert} from 'react-confirm-alert';


class Contact extends React.Component {

    state = {

        firstname: "", lastname: "", subject: "", email: "", phone: "", message: ""
    }// componentDidMount() { // console.log("form submitted");
// Axios({// method: 'post',// url: 'http://localhost/MNServices/public/api/saveContactInfo',// data: {// firstName: 'Fred',// lastName: 'Flintstone'// }, // }) .then(function (response) {// console.log(response);// })// .catch(function (error) {// console.log(error);// });

// }

    onChangeHandler = (event) => {

        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    sendRequest1 = () => {
       alert("submitted");
    }

    sendRequest = () => {


        Axios({
            method: 'post',
            url: 'https://mnservice.ca/api/saveContactInfo',
            data: {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                phone: this.state.phone,
                subject: this.state.subject,
                message: this.state.message
            },
        }).then(function (response) {
            this.setState({firstname: "", lastname: "", subject: "", email: "", phone: "", message: ""})
            confirmAlert({
                title: 'Message',
                message: 'Enquiry submitted successfully',
                buttons: [{label: 'OK', onClick: () => console.log("OK")}]
            });
        }).catch(function (error) {
            confirmAlert({
                title: 'Message',
                message: 'Network Error! Please Try Again-Later!!',
                buttons: [{label: 'OK', onClick: () => console.log("OK")}]
            });
        });
    }



    render() {
       // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        console.log("wok")
        return (<div className="form-wrapper">

                <Formik initialValues={this.state}
                        onSubmit={(values, actions) => {
                                    this.setState(values);
                                    this.sendRequest();
                                    actions.setSubmitting(false);
                                            }}
                        validationSchema={Yup.object({

                firstname: Yup.string().min(2, 'Please fill at least 2 Characters').required('First Name Required'),
                lastname: Yup.string().min(2, 'Please fill at least 2 Characters').required(' Last Name Required'),
                email: Yup.string().email('Invalid email address').required('Email Required'),
               // phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
                subject : Yup.string().min('2','Please fill at least 2 Characters').required('Subject Required'),
                message:Yup.string().required('Detailed Message Required')

                     })}>

                    {({handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit} className="contact-form"><h2 className="contact-title"> Contact Form</h2>
                    <Input label="First Name" inputtype="input" type="text" name="firstname" placeholder="Enter First Name"
                           required value={this.state.firstname}/>


                    <Input  label="Enter Last Name"
                            inputtype="input"
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
                            required
                            value={this.state.lastname}/>

                    <Input  label="Subject"
                            inputtype="input"
                            type="text" name="subject"
                            placeholder="Enter Subject"
                            required
                            value={this.state.subject}/>


                    <Input label="Email"
                           inputtype="input"
                           type="email"
                           name="email"
                           placeholder="Enter Email"
                           required
                           value={this.state.email}/>

                    <Input label="Phone"
                           inputtype="input"
                           type="tel" name="phone"
                           placeholder="Enter Phone"
                           required
                           value={this.state.phone}/>

                     <Input label="Message"
                            inputtype="textArea"
                            type="text"
                            name="message"
                            placeholder="...."
                            required
                            value={this.state.message}/>


                        <input type="submit"
                               name="submit"
                               value="SUBMIT"
                               className="btn-Submit"/>


                </form>)}
            </Formik>
        </div>
        );
    }
}

export default Contact;
