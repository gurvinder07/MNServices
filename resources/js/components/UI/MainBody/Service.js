import React  from 'react';

const Services = (props) => {

    return (

        <div className="servicesContainer">
            <h1> {props.name}</h1>
            <h4 style={{ paddingLeft: '20%', paddingRight: '20%' }}> {props.text} </h4>
            <ul className="service-images">
                {/* <li className="service-image">
                    <img src={Cor1} />
                    <div className="service-image-heading"> Sample Text</div>
                    <div className="service-image-summary">Sample Cleaning all over the place <br/>yeah</div>
                </li>
                <li className="service-image">
                    <img src={Cor2} />
                 <div className="service-image-heading"></div>
                    <div className="service-image-summary"> Sample Text</div>
                </li>

                <li className="service-image">
                    <img src={Cor3} />
                    <div className="service-image-heading"> Sample Text</div>
                    <div className="service-image-summary"> Sample Text</div>
                </li> */}


                {props.children}
            </ul>
            <div style={{background:"white", padding:"5px"}}>  </div>
        </div>

    );
}

export default Services;
