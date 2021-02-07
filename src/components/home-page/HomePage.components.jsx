import React from "react"
import Hero from '../hero/Hero.component'
import { NotesList } from '../notes-list/NotesList.component'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button.component'

export const HomePage = ({allNotes}) => (
    <>
    <Hero>Nifty Notes App</Hero>
    <Link to='/counter'>Counter!</Link>
    <Link style={{'textAlign': 'center', 'display': 'block'}} to='/add_note'><Button classes="add-note">Add Note</Button></Link>
    <NotesList notes={allNotes}></NotesList>
    </>
)