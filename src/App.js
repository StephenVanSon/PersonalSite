import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import MyNavbar from './modules/Navbar.js';



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

                <div className="App">
                    {this.props.children}
                </div>

            </div>
        );
    }


}



export default App;