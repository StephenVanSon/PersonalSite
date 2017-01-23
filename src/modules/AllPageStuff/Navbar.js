/**
 * Created by Stephen-PC on 1/12/2017.
 */

import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../../css/Navbar.css';

//main navbar component
export default class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect id="mainNav" className="navbar-dark navbar-static-top">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Stephen van Son</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>

                        <LinkContainer to="/about">
                            <NavItem>About</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/projects">
                            <NavItem>Projects</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/work">
                            <NavItem>Work Experience</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/contact">
                            <NavItem>Contact</NavItem>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}




