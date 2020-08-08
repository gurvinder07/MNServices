
import React from 'react';
import FormikInput from '../../InputElement/InputControl';
import HOC from '../../../HOC/Hoc'
import ProgressBar from '../../ProgressBar/BarProgress';

const dropdownOptions = [
    { key: 'Select', value: '' },
    { key: 'Yes', value: 0 },
    { key: 'No', value: 1 },

]

const step1 = ()=>{


    return (
        <HOC>
            <ProgressBar page="1" />
            <h2 className="contact-title"> Employment Application Form</h2>
            <FormikInput    control="input"
                            label="First Name"
                            name="firstName"
                            placeholder="Enter First Name"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Last Name"
                            name="lastName"
                            placeholder="Enter Last Name"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Date"
                            name="date"
                            placeholder="Enter Date"
                            typecss="data-field"
            />

            <FormikInput    control="textarea"
                            label="Address"
                            name="address"
                            placeholder="Enter Address"
                            typecss="data-field address"
            />

            <FormikInput    control="input"
                            label="Apartment/Unit #"
                            name="unit"
                            placeholder="Enter Apartment or Unit#"
                            typecss="data-field"
            />


            <FormikInput    control="input"
                            label="City"
                            name="city"
                            placeholder="Enter City Name"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Phone Number"
                            name="phone"
                            placeholder="Enter Your phone"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Email"
                            name="email"
                            placeholder="Enter Your Email"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Social Security Number"
                            name="sin"
                            placeholder="Enter Your SIN Number"
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Desired Salary"
                            name="salary"
                            placeholder="Desired Salary Per Hour "
                            typecss="data-field"
            />

            <FormikInput    control="input"
                            label="Position Applied For"
                            name="position"
                            placeholder="Enter Position Name"
                            typecss="data-field full-width"
            />

            <div className="form-checkbox-groups">

                <FormikInput    control="select"
                                label="Are you a citizen of United States"
                                name="iscitizen"
                                typecss="data-field checkbox"
                                options ={dropdownOptions}
                />


                <FormikInput    control="select"
                                label="If no, Are you authorized to work in United States"
                                name="uswork"
                                typecss="data-field checkbox-parallel"
                                options ={dropdownOptions}
                />
            </div>

            <div className="form-checkbox-groups">

                <FormikInput    control="select"
                                label="Have you ever worked for this company?"
                                name="workedBefore"
                                typecss="data-field checkbox"
                                options ={dropdownOptions}
                />

                <FormikInput    control="textarea"
                                label="If yes, when"
                                name="workedBeforeExplanation"
                                typecss="data-field full-width"
                                placeholder="explain work period and reason for leaving"
                />

            </div>
            <div className="form-checkbox-groups">

                <FormikInput    control="select"
                                label="Have you ever convicted a felony?"
                                name="convictions"
                                typecss="data-field checkbox"
                                options ={dropdownOptions}
                />

                <FormikInput    control="textarea"
                                label="If yes, Explain"
                                name="convictionsExplanation"
                                typecss="data-field full-width"
                                placeholder="explain in detail"

                />
            </div>

        </HOC>

    );
}

export default step1;
