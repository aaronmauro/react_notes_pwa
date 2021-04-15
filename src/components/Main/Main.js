import React from 'react';
import {Card, Container, Button} from 'react-bootstrap';

function refreshApp() {
  window.location.reload(false);
}

const mainpage = () => {
        return(
    
            <Container>
            <Card>
              <Card.Header>About</Card.Header>
              <Card.Body>
                <Card.Title>React Notes</Card.Title>
                <Card.Text>
                  <p>This is a sample React based Progressive Web App developed for the students of Interactive Arts and Science 3F02 at Brock University.</p>
                  <p>Please find the project on <a href="https://github.com/aaronmauro/react_notes_pwa">Github</a></p>
                  <hr />
                  <p>For the latest version, click the refresh button. No data will be lost!</p>
                  <Button title="For the latest version, refresh the app here." onClick={refreshApp}>Refresh App</Button>
                </Card.Text>
              </Card.Body>
            </Card>
            </Container>
        );
    }


export default mainpage;