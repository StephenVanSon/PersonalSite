/**
 * Created by Stephen-PC on 1/19/2017.
 */
import React from 'react';
import '../../css/creative.css';

export default class Header extends React.Component{
    render(){
        return(
            <header>

                <div className="header-content">
                    <div className="header-content-inner">
                        <h1 id="homeHeading">Stephen van Son</h1>
                        <hr/>
                        <p>This is a site I built to showcase my personal accomplishments. The site was built using React.js, React-router, React-bootstrap and ghpages, written in ES6</p>
                        <a href="#mainStuff" className="btn btn-primary btn-xl page-scroll"> Find out more </a>
                    </div>
                </div>

            </header>
        );

    }

}