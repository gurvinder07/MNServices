import React from 'react';
import FormikInput from '../../../InputElement/InputControl';


const EmploymentBluePrint=(props)=>{
    let {count} = props;
    const objectName = "employmentInfo["+count+"].";
    count = parseInt(count,10);
    count = count+1;
    return(

        <div className='application-form'>

            <div className="education-wrapper">
                <label className="edu-count">{count}.</label>
                <div>

                    <FormikInput control="input"
                                 label="Company"
                                 name={objectName+"company"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />
                    <FormikInput control="input"
                                 label="Phone"
                                 name={objectName+"phone"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />

                </div>


                <div>

                    <FormikInput control="input"
                                 label="Address"
                                 name={objectName+"address"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />
                    <FormikInput control="input"
                                 label="Supervisor"
                                 name={objectName+"supervisor"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />

                </div>
                <FormikInput control="input"
                             label="Job Title"
                             name={objectName+"jobtitle"}
                             typecss="education-groups three-components"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                />
                <FormikInput control="input"
                             label="Starting Salary"
                             name={objectName+"startingsalary"}
                             typecss="education-groups three-components"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                />
                <FormikInput control="input"
                             label="Ending Salary"
                             name={objectName+"endingsalary"}
                             typecss="education-groups three-components"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                />


                <FormikInput   control="textarea"
                               label="Responsibilities"
                               name={objectName+"responsibilities"}
                               typecss="data-field full-width"
                               placeholder="List All Responisibilities"
                               labelcss="edu-label"
                />


                <div>

                    <FormikInput control="input"
                                 label="From"
                                 name={objectName+"from"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />
                    <FormikInput control="input"
                                 label="To"
                                 name={objectName+"to"}
                                 typecss="education-groups"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"

                    />

                </div>
                <div>
                    <FormikInput   control="textarea"
                                   label="Reason For Leaving"
                                   name={objectName+"responsibilities"}
                                   typecss="data-field full-width"
                                   placeholder="Explain Your Reason For Leaving Job"
                                   labelcss="edu-label"
                    />
                </div>
            </div>
        </div>
    )}


export default  EmploymentBluePrint;
