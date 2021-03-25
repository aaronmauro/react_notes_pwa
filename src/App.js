import React, {useState} from 'react';
import Layout from './containers/Layout/Layout';
import NavExpand from './containers/NavExpand/NavExpand';
import {Switch, Route} from 'react-router-dom';
import Boards from './components/Boards/Boards';
import NewNote from './components/NewNote/NewNote';
import MainPage from './components/Main/Main';
import 'react-bootstrap';
import 'bootswatch/dist/superhero/bootstrap.min.css'; // quick style provided here
import './App.css';

function App() {

  const [notes,setNotes] = useState([])

  return (
    <div className="App">
      <Layout>
        <NavExpand />
      </Layout>
      <Switch>
        <Route exact path="/react_notes_pwa/">
          <NewNote setNotes={setNotes}/>
        </Route>
        <Route path="/react_notes_pwa/about">
          <MainPage/>
        </Route>
        <Route path="/react_notes_pwa/notes">
          <Boards notes={notes} setNotes={setNotes}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
