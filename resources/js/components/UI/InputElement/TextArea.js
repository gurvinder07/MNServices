import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './input.module.css';
import TextError from './TextError'

const TextArea=(props)=>  {


    const {label, name, typecss,labelcss, ...rest} = props;
    return (
        <div className={typecss}>
            <ErrorMessage name={name} component={TextError}/>

            <label className={labelcss} htmlFor= {name}> {label}</label>
            <Field as="textarea" id={name} name={name} {...rest} className = {classes.TextArea}/>

        </div>
    )
}

export default TextArea;
