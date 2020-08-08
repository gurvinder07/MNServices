
import React from 'react';

import HOC from '../../../../HOC/Hoc'
import SchoolingSkeleton from './SchoolingBluePrint';
import ProgressBar from '../../../ProgressBar/BarProgress'
const AppForm2 = ()=>{


    return (
        <HOC>

            {/* <FormikInput    control="input"
label="institution Name"
name="schoolingInfo[0].instituteName"
placeholder="Enter institution Name"
typecss="data-field"

/> */}
            <ProgressBar page="2" />
            <h2 className="contact-title"> Employment Application Form</h2>
            <SchoolingSkeleton label="High School" count = "0" certificaiton="Diploma"/>
            <SchoolingSkeleton label="College" count = "1" certificaiton="Degree"/>
            <SchoolingSkeleton label="Other" count = "2" certificaiton="Degree"/>
        </HOC>
    );
}

export default AppForm2;
