/**
 * Created by Stephen-PC on 1/12/2017.
 */

import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';

//main navbar component
export default class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect className="navbar-dark">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Stephen van Son</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem href="#">About </NavItem>
                        <NavItem href="#">Projects</NavItem>
                        <NavItem href="#">Work Experience</NavItem>
                        <NavItem href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}




