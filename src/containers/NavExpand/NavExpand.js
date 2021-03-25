import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
//import {LinkContainer} from 'react-router-bootstrap';
import './NavExpand.css';
import "bootstrap/dist/css/bootstrap.min.css";


class NavExpand extends Component {
   
    render()
    {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">N</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">New</Nav.Link>
                <Nav.Link href="/notes">Notes</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>
                
        )
    }
}
export default NavExpand;