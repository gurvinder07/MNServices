import React from 'react';
import FormikInput from '../../../InputElement/InputControl';


const ReferenceBlueprint=(props)=>{
    let {count} = props;
    const objectName = "referenceInfo["+count+"].";
    count = parseInt(count,10);
    count = count+1;
    return(

        <div className="education-wrapper">
            <label className="edu-count">{count}.</label>

            <div>

                <FormikInput control="input"
                             label="Full Name"
                             placeholder="Enter Full Name"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                             name={objectName+"fullName"}
                />


                <FormikInput control="input"
                             label="Relationship"
                             placeholder="Enter Relationship"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                             name={objectName+"relationship"}
                />
            </div>


            <div>

                <FormikInput control="input"
                             label="Company"
                             placeholder="Enter Company Name"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                             name={objectName+"company"}
                />


                <FormikInput control="input"
                             label="Phone"
                             placeholder="Enter Phone"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                             name={objectName+"phone"}
                />
            </div>
            <FormikInput    control="input"
                            label="Address"
                            labelcss="edu-label"
                            name={objectName+"address"}
                            placeholder="Enter Full Address Of Company"
                            typecss="data-field full-width"
            />

        </div>
    )

}


export default ReferenceBlueprint;
