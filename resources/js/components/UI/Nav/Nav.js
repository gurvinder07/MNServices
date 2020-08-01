import React from "react";
import {Link} from 'react-router';
import CompanyLogo from '../../../../Images/mnLogo.jpeg';


const Nav =() =>{

    return (
        <nav>

            <div className="flex-container">

                <div className="ctx"> <img src={CompanyLogo} alt ="company logo" style={{width:"70px", height:"40px", borderRadius:"20%"}}/> </div>

                <ul className="menu-items">

                    <li className="menu-item"><Link to = "/" className="item" >Home </Link></li>
                    <li className="menu-item"><Link to ="/Contact">Contact</Link></li>
                    <li className="menu-item"><Link to ="/About">About</Link></li>

                </ul>

            </div>
        </nav>

    );
}

export default Nav;
