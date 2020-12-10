import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from './components/home-page/HomePage.components';
import { AddNote } from './components/add-note/AddNote.component'
import NoteDetail from './components/note-detail/NoteDetail.component'
import EditNote from './components/edit-note/EditNote.component'

import './App.css';

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
            <Route exact path='/edit_note/:id' component={EditNote} />
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
