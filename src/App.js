import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import MyNavbar from './modules/AllPageStuff/Navbar.js';
import AboutWrapper from './modules/About/AboutWrapper';
import Projects from './modules/Projects/Projects';
import WorkExperience from './modules/WorkExperience/WorkExperience';
import Contact from './modules/Contact/Contact';


class App extends React.Component {
    render()
    {
        let ComponentsToRender = [];
        if(this.props.children){
            ComponentsToRender.push(this.props.children);
        }else{
            ComponentsToRender.push(<AboutWrapper/>);
            ComponentsToRender.push(<Projects/>);
            ComponentsToRender.push(<WorkExperience/>);
            ComponentsToRender.push(<Contact/>);
        }

        return (

            <div>
                <MyNavbar/>
                <div className="App-header App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Under Construction!</h2>
                </div>

                <div className="App">
                    {ComponentsToRender}
                </div>

            </div>
        );
    }


}



export default App;
