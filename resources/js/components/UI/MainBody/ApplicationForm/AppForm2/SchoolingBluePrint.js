import React from 'react';
import FormikInput from '../../../InputElement/InputControl';

const SchoolingBluePrint=(props) =>
{
    const dropdownOptions1 = [
        { key: 'Select', value: '' },
        { key: 'Yes', value: 0 },
        { key: 'No', value: 1 },

    ]
    let {count} = props;
    const objectName = "schoolingInfo["+count+"].";
    count = parseInt(count,10);
    count = count+1;
    return (

        <div className='application-form'>

            <div className="education-wrapper">

                <label className="edu-count">{(count)+"."}</label>
                <div>
                    <FormikInput    control="input"
                                    label={props.label}
                                    name={objectName+"instituteName"}
                                    placeholder="Name Of Institution"
                                    typecss= "education-groups"
                                    labelcss="edu-label"
                                    inputcss="edu-textField"
                    />
                    <FormikInput    control="input"
                                    label="Address"
                                    name={objectName+"address"}
                                    placeholder="Institution Address"
                                    typecss= "education-groups"
                                    labelcss="edu-label"
                                    inputcss="edu-textField"
                    />
                </div>

                <div className ="edu-dates">
                    <FormikInput    control="input"
                                    label="From"
                                    name={objectName+"from"}
                                    placeholder="Select From Date"
                                    typecss= "edu-dates-group"
                                    labelcss="edu-label"
                                    inputcss="edu-dateField"
                    />

                    <FormikInput    control="input"
                                    label="To"
                                    name={objectName+"to"}
                                    placeholder="Select To Date"
                                    typecss= "edu-dates-group"
                                    labelcss="edu-label"
                                    inputcss="edu-dateField"
                    />

                    <FormikInput    control="select"
                                    label="Did You Graduate"
                                    name={objectName+"isGraduated"}
                                    typecss= "edu-dates-group"
                                    labelcss="edu-label"
                                    inputcss="edu-select"
                                    options ={dropdownOptions1}
                    />
                </div>
                <FormikInput    control="input"
                                label={props.certificaiton}
                                labelcss="edu-label"
                                name={objectName+"certificationName"}
                                placeholder="Enter Certificaiton  Name"
                                typecss="data-field full-width"
                />


            </div>

        </div>
    )
}

export default SchoolingBluePrint;
