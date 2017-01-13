import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MyNavbar from './Navbar.js';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

class App extends React.Component {
    render()
    {
        return (

            <div className="App">
                <MyNavbar/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Work in Progress!</h2>
                </div>
            </div>
        );
    }


}



export default App;
