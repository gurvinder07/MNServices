import React from 'react';
import { Field, ErrorMessage } from 'formik';


const Select=(props) => {


    const {label, name, typecss, options, ...rest } = props;

    return (

        <div className={typecss}>
            <ErrorMessage name={name} component="div"/>
            <label className={props.labelcss} htmlFor= {name}>{label}</label>
            <Field as='select'  id={name} name={name} {...rest} className= {props.selectcss}>
                {options.map(option=>{

                    return (
                        <option key={option.value} value={option.value}>

                            {option.key}
                        </option>
                    )

                })}

            </Field>
        </div>

    )


}
export default Select;
