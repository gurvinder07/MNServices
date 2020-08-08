
import React from 'react';
import HOC from '../../../../HOC/Hoc';
import ProgressBar from '../../../ProgressBar/BarProgress';
import ReferenceBlueprint from './ReferencesBluePrint';
const AppForm2 = ()=>{


    return (
        <HOC>

            {/* <FormikInput    control="input"
label="institution Name"
name="schoolingInfo[0].instituteName"
placeholder="Enter institution Name"
typecss="data-field"

/> */}
            <ProgressBar page="3" />
            <h2 className="contact-title"> Employment Application Form</h2>
            <h4 > Please list three professional references</h4>
            <ReferenceBlueprint  count = "0" />
            <ReferenceBlueprint  count = "1" />
            <ReferenceBlueprint  count = "2" />
        </HOC>
    );
}

export default AppForm2;
