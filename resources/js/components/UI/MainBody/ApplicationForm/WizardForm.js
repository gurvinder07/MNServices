import React from 'react';
import {Formik, Form, Field, ErrorMessage, FormikProvider} from 'formik';
import * as Yup from 'yup';
import Step1 from './AppForm1';
import Step2 from './AppForm2/AppForm2';
import Step3 from './AppForm3/AppForm3';
import Step4 from './AppForm4/AppForm4';
import Step5 from './AppForm5';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import School from '../../../../Classes/Schooling';
import Reference from '../../../../Classes/Reference';
import MilitaryService from '../../../../Classes/MilitaryService';
import Axios from 'axios';


const initialValues = {

    firstName:'',
    lastName:'',
    date:'',
    address:'',
    unit:'',
    city:'',
    phone:'',
    email:'',
    sin:'',
    salary:'',
    position:'',
    iscitizen:'',
    uswork:'',
    workedBefore:'',
    workedBeforeExplanation:'',
    convictions:'',
    convictionsExplanation:'',
    schoolingInfo: [new School(), new School(),new School()],
    referenceInfo:[new Reference(), new Reference(), new Reference()],
    militaryService: new MilitaryService(),
    signature:'',
    signedOn:'',
    page:0

}

const validationSchema = Yup.object({

    firstName: Yup.string().required('First Name Required').min(2,'More Than 2 Characters Needed'),
    // lastName: Yup.string().required('Last Name Required').min(2,'More Than 2 Characters Needed'),
    // date:Yup.string().required('Date Required'),
    // address:Yup.string().required('Address Required').min(5, 'Please Full Address'),
    // city:Yup.string().required('City Name Required'),
    // phone:Yup.string().required('Phone Number Required'),
    // email:Yup.string().required('Email Required').email('Enter Correct Email'),
    // sin:Yup.string().required('SIN Number Required'),
    // salary:Yup.string().required('Desired Salary Field Required'),
    // position:Yup.string().required('Position Applied For Required'),
    // iscitizen:Yup.string().required('Please Select One Option'),
    // uswork:Yup.string().when("iscitizen",{
    //             is:"yes",
    //             then:Yup.string().required("Please Select One Option")

    // }),
    // workedBefore:Yup.string().required('Please Select One Option'),
    // workedBeforeExplanation: Yup.string().when("workedBefore",{
    //     is:"yes",
    //     then:Yup.string().required("Please Explain Past Work")

    //     }),
    // convictions:Yup.string().required('Please Select One Option'),
    // convictionsExplanation: Yup.string().when("convictions",{
    //     is:"yes",
    //     then:Yup.string().required("Please Explain Convictions")

    //     })
});

const onSubmit=(values) => {

    Axios({
        method: 'post',
        url: 'https://mnservice.ca/api/saveNewApplicationForm',
        data: values

    }).then(function (response) {
        // this.setState({firstname: "", lastname: "", subject: "", email: "", phone: "", message: ""})
        // confirmAlert({
        //     title: 'Message',
        //     message: 'Enquiry submitted successfully',
        //     buttons: [{label: 'OK', onClick: () => console.log("OK")}]
        // });
        console.log(response);
    }).catch(function (error) {
        //     confirmAlert({
        //         title: 'Message',
        //         message: 'Network Error! Please Try Again-Later!!',
        //         buttons: [{label: 'OK', onClick: () => console.log("OK")}]
        //     });
        console.log(error);
    });
}

const nextForm = (Formik ,val)=>{

    Formik.validateForm();

    if(Formik.isValid && Formik.dirty)
    {
        Formik.setFieldValue('page',val)
    }
    else
    {
        confirmAlert({
            title: 'Error !!',
            message: 'Please fill the form first!!',
            buttons: [
                {
                    label: 'Continue',
                    // onClick: () => alert('Click Yes')
                }
            ]
        });
    };
}


const Home= ()=>{
    return(
        <Formik

            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
            validateOnMount
        >
            {(Formik)=> (



                <Form>
                    {Formik.values.page ==0?
                        <div>
                            <Step1 />
                            <input  type="button" name="button" value="Continue To Step 2" onClick = {()=>nextForm(Formik,1)}  />

                        </div>
                        : null}

                    {Formik.values.page ==1?
                        <div>
                            <Step2 />
                            <input type="button" name="button" value="Continue to Step 3" onClick = {()=>Formik.setFieldValue('page',2)}  />
                            <input type="button" name="button" value="PREV" onClick = {()=>Formik.setFieldValue('page',0)}  />
                        </div>
                        : null}


                    {Formik.values.page ==2?
                        <div>
                            <Step3 />
                            <input type="button" name="button" value="Continue to Step 4" onClick = {()=>Formik.setFieldValue('page',3)}  />
                            <input type="button" name="button" value="PREV" onClick = {()=>Formik.setFieldValue('page',1)}  />
                        </div>
                        : null}


                    {Formik.values.page ==3?
                        <div>
                            <Step4 />
                            <input type="button" name="button" value="Continue to Step 5" onClick = {()=>Formik.setFieldValue('page',4)}  />
                            <input type="button" name="button" value="PREV" onClick = {()=>Formik.setFieldValue('page',2)}  />
                        </div>
                        : null}

                    {Formik.values.page ==4?
                        <div>
                            <Step5 />
                            <input type="submit" name="submit" value="SUBMIT"   />
                            <input type="button" name="button" value="PREV" onClick = {()=>Formik.setFieldValue('page',3)}  />
                        </div>
                        : null}
                </Form>



            )}





        </Formik>


    );
}


export default Home;










































// import React ,{useRef } from 'react';
// import {Formik ,Form ,Field, ErrorMessage, useFormik  } from 'formik';
// import * as Yup from 'yup';
// import { TextField } from '@material-ui/core';


//   const validate = values => {
//         let errors = {}
//         errors.firstName = 'required';

//         return errors;
//   }

//   const validationSchema = Yup.object({


//     firstName:Yup.string().required('Required!!')
//               .min(2, 'First must be at least 2 characters long')

//   })
// const initialValues = {
//     firstName: ''


// }

// const onSubmit =(values)=> {

// console.log(values);

// }
// const  Home =() => {


//     // const formik = useFormik({

//     //     initialValues ,
//     //     onSubmit,
//     //     validationSchema


//     // })

//  return (
//        <Formik

//        initialValues = {initialValues}
//        validationSchema = {validationSchema}
//        onSubmit ={onSubmit}
//        >
//            <Form>
//                 <Field type="text"
//                         name="firstName"
//                          />
//                 <ErrorMessage name="firstName"/>
//                 </Form>
//                  </Formik>
//  )





// }

// export default Home;
