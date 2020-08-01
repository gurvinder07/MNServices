import React from 'react';
import Hoc from '../../HOC/Hoc'

const ServiceImages =(props)=> {

    return (
        <Hoc>
            <li className="service-image">
                <img src={props.image} />
                <div className="service-image-heading"> {props.heading}</div>
                <div className="service-image-summary">{props.summary}</div>
            </li>
            {/* <li className="service-image">
    <img src={Cor2} />
 <div className="service-image-heading"></div>
    <div className="service-image-summary"> Sample Text</div>
</li>

<li className="service-image">
    <img src={Cor3} />
    <div className="service-image-heading"> Sample Text</div>
    <div className="service-image-summary"> Sample Text</div>
</li> */}
        </Hoc>
    )

}

export default ServiceImages;
