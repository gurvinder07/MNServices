import React from 'react';
import FormikInput from '../../InputElement/InputControl';
import HOC from '../../../HOC/Hoc';
import ProgressBar from '../../ProgressBar/BarProgress';

const AppForm5 = ()=>{


    return (
        <HOC>
            <ProgressBar page="5" />
            <h2 className="contact-title"> Employment Application Form - Step 5 </h2>
            <h4 > Military Service</h4>
            <div className='application-form'>

                <div className="education-wrapper">
                    <FormikInput control="input"
                                 label="Branch"
                                 name="militaryService.branch"
                                 typecss="education-groups three-components"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />
                    <FormikInput control="input"
                                 label="From"
                                 name="militaryService.from"
                                 typecss="education-groups three-components"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />
                    <FormikInput control="input"
                                 label="To"
                                 name="militaryService.to"
                                 typecss="education-groups three-components"
                                 labelcss="edu-label"
                                 inputcss="edu-textField"
                    />


                    <div>

                        <FormikInput control="input"
                                     label="Rank At Discharge"
                                     name="militaryService.rank"
                                     typecss="education-groups"
                                     labelcss="edu-label"
                                     inputcss="edu-textField"
                        />
                        <FormikInput control="input"
                                     label="Type Of Discharge"
                                     name="militaryService.typeofdischarge"
                                     typecss="education-groups"
                                     labelcss="edu-label"
                                     inputcss="edu-textField"
                        />

                    </div>
                    <div>
                        <FormikInput   control="textarea"
                                       label="If Other Than Honorable, Explain"
                                       name="militaryService.otherthanhonorable"
                                       typecss="data-field full-width"

                                       labelcss="edu-label"
                        />
                    </div>

                </div>
            </div>

            <h2 className="contact-title"> Disclaimer and Signature</h2>

            <div className="education-groups full-width">
                <label className="edu-label">I Certify that my answers are true to the best of my knowledge</label>
                <div></div>
                <label className="edu-label">If this application leads to employment, I understand that false or misleading information in my application or interview may result in my release</label>


            </div>
            <div>

                <FormikInput control="input"
                             label="Signature"
                             name="signature"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                />
                <FormikInput control="input"
                             label="Date"
                             name="signedOn"
                             typecss="education-groups"
                             labelcss="edu-label"
                             inputcss="edu-textField"
                />

            </div>
        </HOC>
    );
}

export default AppForm5;
