import React from "react";
import Icon from '@material-ui/core/Icon'

// npm install @material-ui/core

const TopAddress = (props)=>{
    return (

        <div className = "address-container">
            <h4><Icon style={{ color: "#FF9000" }}>room</Icon> {props.address}</h4>
            <h4><Icon style={{ color: "#FF9000" }}>email</Icon> {props.email}</h4>
            <h4> <Icon style={{ color: "#FF9000" }}>phone</Icon>{props.phone}</h4>

        </div>

    );
}

export default TopAddress;
