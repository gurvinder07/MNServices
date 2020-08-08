import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router';

const Footer = () => {

    return(

        <footer className="footer-container">

            <ul className="footer-items"> <h2><Icon style={{ color: "#FF9000" }}>contactsupport</Icon>  Contact Info </h2>
                <li> <Icon style={{ color: "#FF9000" }}>room</Icon> 35 Fountainhead Road, Toronto, ON</li>
                <li> <Icon style={{ color: "#FF9000" }}>phone</Icon> +1 (647) 271-7864</li>
                <li> <Icon style={{ color: "#FF9000" }}>email</Icon> seelano@mnservice.ca</li>
            </ul>
            <ul className="footer-items"> <h2><Icon style={{ color: "#FF9000" }}>schedule</Icon> Open Hours </h2>
                <li><Icon style={{ color: "#FF9000" }}>schedule</Icon> <strong>Mon - Thu</strong>  09:00 - 17:00</li>
                <li><Icon style={{ color: "#FF9000" }}>schedule</Icon> <strong>Fri - Sat</strong>  09:00 - 17:00</li>
                <li><Icon style={{ color: "#FF9000" }}>schedule</Icon> <strong>Sun - Sun</strong>  09:00 - 17:00</li>
            </ul>

            <ul className="footer-items"> <h2><Icon style={{ color: "#FF9000" }}>business</Icon> Company </h2>
                <li><Icon style={{ color: "#FF9000" }}>work</Icon> <strong><Link to="/career/application">Careers</Link></strong> </li>
                <li><Icon style={{ color: "#FF9000" }}>info</Icon> <strong> About Us</strong>  </li>

            </ul>



        </footer>


    );


}

export default Footer;
