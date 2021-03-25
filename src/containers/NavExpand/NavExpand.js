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
                <Navbar.Brand href="/react_notes_pwa/">N</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/react_notes_pwa/">New</Nav.Link>
                <Nav.Link href="/react_notes_pwa/notes">Notes</Nav.Link>
                <Nav.Link href="/react_notes_pwa/about">About</Nav.Link>
                </Nav>
            </Navbar>
                
        )
    }
}
export default NavExpand;