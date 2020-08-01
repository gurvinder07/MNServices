import React from 'react';
import Corousel from '../UI/MainBody/Corousel'
import Services from '../UI/MainBody/Service'
import ServiceImage from '../UI/MainBody/ServiceImages'
import ScheduleNow from '../UI/MainBody/ScheduleNow';
import HOC from '../HOC/Hoc';


class App extends React.Component {
    state = {selected : 0}


    componentDidMount(){
        setInterval (() => {

            this.setNewStateForSelected("forward");
        }, 8000);

    }

    setNewStateForSelected(type){

        if( type === "forward")
        {
            this.state.selected === 2 ? this.setState({selected : 0}) : this.setState({selected : this.state.selected + 1})
        }

        else {
            this.state.selected === 0 ? this.setState({selected : 2}) : this.setState({selected : this.state.selected - 1})
        }
    }


    render () {

        const cleaningServImg = [require('../../../Images/cor1.jpg') , require('../../../Images/cor2.jpg') , require('../../../Images/cor3.jpg')];
        const cleaningHeading = ["Service-1","Service-2","Service-3"];
        const cleaningSummary = ["I am Summary 1 Done", "I am Summary 2","I am Summary 3"];



        return (
            <HOC>



                <Corousel selected = {this.state.selected} forwardClick={()=>this.setNewStateForSelected("forward")}  backwardClick={()=>this.setNewStateForSelected("forward")}/>

                <Services name= "Cleaning Services"
                          text="Our professional and experienced cleaning staff does the job right the first time, giving you confidence that you office and building will always look their best.">

                    {cleaningServImg.map((it, index) => <ServiceImage key={index} summary = {cleaningSummary[index]} heading = {cleaningHeading[index]} image= {cleaningServImg[index]}  />) }

                </Services>

                <Services name= "LandScaping Services"
                          text="Our professional and experienced LandScaping staff does the job right the first time, giving you confidence that you office and building will always look their best.">
                    {cleaningServImg.map((it, index) => <ServiceImage key={index} summary = {cleaningSummary[index]} heading = {cleaningHeading[index]} image= {cleaningServImg[index]}  />) }

                </Services>
                <ScheduleNow />


            </HOC>
        );
    }
}
export default App;
