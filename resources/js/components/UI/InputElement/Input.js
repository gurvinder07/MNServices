import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './input.module.css';
import TextError from './TextError'

const Input =(props)=>{


    const {label, name, typecss, ...rest} = props;
    return (

        <div className={typecss}>
            <ErrorMessage name={name} component={TextError}/>
            <label className={props.labelcss} htmlFor={name}>{label}</label>
            {props.inputcss?<Field id={name} name={name} {...rest} className = {props.inputcss} />:
                <Field id={name} name={name} {...rest} className = {classes.Input} />}

        </div>

    );

}


export default Input;
