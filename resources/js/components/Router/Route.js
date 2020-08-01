import React from 'react';
import {Route , IndexRoute} from 'react-router';
import App from '../Main/App';
import Home from '../Main/Home';

// import Contact from './Components/Contact';
// import WizardFrom from './Components/UI/ApplicationForm/WizardFrom';





export default (
    <Route path="/" component = {Home}>

        <IndexRoute component ={App} />
        {/*<Route path="/contact" component = {Contact}></Route>*/}
        {/*<Route path="/careers/application" component = {WizardFrom}> </Route>*/}

    </Route>
);
