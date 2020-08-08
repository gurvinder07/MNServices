
import React from 'react';
import HOC from '../../../../HOC/Hoc'
import ProgressBar from '../../../ProgressBar/BarProgress'
import EmploymentBluePrint from './EmploymentBluePrint';
const AppForm4 = ()=>{


    return (
        <HOC>
            <ProgressBar page="4" />
            <h2 className="contact-title"> Employment Application Form - Step 4 </h2>
            <EmploymentBluePrint count="0"/>
            <EmploymentBluePrint count="1"/>
            <EmploymentBluePrint count="2"/>
        </HOC>
    );
}

export default AppForm4;
