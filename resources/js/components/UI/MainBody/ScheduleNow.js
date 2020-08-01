import React from 'react';

import {Link} from 'react-router';

const ScheduleNow = (props) =>{


    return(


        <div className="bottom-splashy-container">

            <h2> Wanted a Free Consultation?  <p>We are always ready to welcome you!</p>  </h2>

            <Link to="/contact"  className = "custom-decoration1" > Contact Us Now</Link>

        </div>
    );
}


export default ScheduleNow;
