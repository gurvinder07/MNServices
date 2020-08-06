import React from 'react';
import Nav from '../UI/Nav/Nav';
import Footer from '../UI/Footer/Footer';
import TopAddress from '../UI/Nav/TopAddress';




class Home extends React.Component{

    componentDidUpdate = () => { window.scrollTo(0, 0)}
    render() {

        return (
            <div className="app">

                <div className="nav-fixed-top">
                    <TopAddress address="714-35 Fountainhead Road, North York, ON"
                                phone = "+1 (647) 271-7864"
                                email ="seelano@mnservice.ca"
                    />
                    <Nav/>
                </div>
                <section className="main">
                    {this.props.children}
                </section>
                <Footer/>
            </div>

        );
    }
}
export default Home;
