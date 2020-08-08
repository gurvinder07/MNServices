import React from 'react';
import {useField} from 'formik';
import classes from './input.module.css';
import HOC from '../../HOC/Hoc';
import { Checkbox } from '@material-ui/core';

const Input = (props) => {
    let label = null;
    let  inputElement = null;

    const [field, meta] = useField(props);



    switch(props.inputtype)
    {

        case('textArea'):
            console.log(classes.Input);
            inputElement = <textarea className={classes.Input} {...props} {...field} />
            label =<label htmlFor ={props.name} className = {classes.Label}>{props.label}</label>
            break;

        case('input'):
            inputElement = <input autoComplete= "none" className ={classes.InputElement}{...props} {...field}  />
            label =<label htmlFor ={props.name} className = {classes.Label}>{props.label}</label>
            break;

        case('inputParallel'):
            inputElement = <input autoComplete="none" className ={classes.InputElementParallel}{...props} {...field} />
            label=<label htmlFor ={props.name} className = {classes.LabelCheckbox}>{props.label}</label>
            break;

        case('submit'):
            inputElement = <input className = {classes.InputSubmit} {...props} {...field}/>
            label = <label htmlFor ={props.name} className = {classes.Label}>{props.label}</label>
            break;

        case('checkbox'):
            inputElement = <Checkbox className={classes.CheckboxForm} {...props} {...field}/>
            label= <label htmlFor ={props.name} className = {classes.LabelCheckbox}>{props.label}</label>
            break;

        case('label'):
            label= <label htmlFor ={props.name}  className = {classes.LabelCheckbox}>{props.label}</label>
            break;




    }


    if( inputElement != null)
        return(

            <HOC>

                {meta.touched && meta.error ?

                    <span className= "error"> {meta.error}</span>  :null
                }
                {label}

                {inputElement}

            </HOC>
        );

    else
        return (

            <HOC>

                {label}

            </HOC>
        )


}

export default Input;
