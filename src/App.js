import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Hero from './components/hero/Hero.component';
import { NotesList } from './components/notes-list/NotesList.component';
import { HomePage } from './components/home-page/HomePage.components';
import { Note } from './components/note/note.component'
import { AddNote } from './components/add-note/AddNote.component'
import NoteDetail from './components/note-detail/NoteDetail.component'

import './App.css';

function Child(props) {
  console.log(props)
  let {id} = useParams()
  fetch('api/single_note/1')
    .then(result => result.json())
  return <h3>{id}</h3>
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      allNotes: [],
      singleNote: ''
    };
  }

  componentDidMount() {
    fetch('/api/all_notes/')
    .then(result=>result.json())
    .then(notes => this.setState({allNotes: notes}))
    console.log(this)
  }

  render() {
    return(
      <div className="app">
        <Router>
          <Switch>        
            <Route exact path='/add_note' component={AddNote} />
            <Route exact path='/:id' component={NoteDetail} />
            <Route exact path='/'>
              <HomePage allNotes={this.state.allNotes}></HomePage>
            </Route>
          </Switch>
        </Router>


      </div>
    )
  };
}

export default App;
