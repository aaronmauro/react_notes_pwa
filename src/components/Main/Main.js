import React from 'react';
import {Card, Container} from 'react-bootstrap';

const mainpage = () => {
        return(
            <Container>
            <Card>
              <Card.Header>About</Card.Header>
              <Card.Body>
                <Card.Title>React Notes</Card.Title>
                <Card.Text>
                  This is a sample React based Progressive Web App developed for the students of Interactive Arts and Science 3F02 at Brock University.
                </Card.Text>
              </Card.Body>
            </Card>
            </Container>
        );
    }


export default mainpage;