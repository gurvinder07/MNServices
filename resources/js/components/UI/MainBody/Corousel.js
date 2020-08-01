import React ,{Component} from 'react';
import Cor1 from '../../../../Images/cor1.jpg';
import Cor2 from '../../../../Images/cor2.jpg';
import Cor3 from '../../../../Images/cor3.jpg';
import Icon from '@material-ui/core/Icon'

const Corousel = (props)=> {


    let   images= [Cor1,Cor2,Cor3];
    let   textData =["SCREEN! TEXT", "SCREEN2 TEXT", "SCREEN3 TEXT"] ;

    //let img = require('../Images/cor3.jpg');
    return (


        <div className = "corousel-container">


            <Icon onClick={props.forwardClick} className="left-arrow-corousel" >arrow_back_ios_icon </Icon>
            <Icon onClick={props.backwardClick} className="right-arrow-corousel" >arrow_forward_ios_icon</Icon>
            <h3 className="corousel-img-text" value={textData[props.selected]}> {textData[props.selected]} </h3>

            <img src={images[props.selected]} alt="corousel-Image"/>
            <h3 className="corousel-img-text-after" value={textData[props.selected]}> {textData[props.selected]} </h3>
        </div>

    )




}



export default  Corousel;
