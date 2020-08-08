import  React from 'react';
import classes from './progress.module.css';


const ProgressBar = (props) => {



    return (

        <div className= {classes.ProgressWrapper} style={{width: 19.8 * props.page + "%"}}>
            <label> completed {props.page * 20 + "%"} </label>

        </div>

    );

}


export default ProgressBar;
