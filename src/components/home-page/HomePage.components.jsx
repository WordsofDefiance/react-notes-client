import React from "react"
import Hero from '../hero/Hero.component'
import { NotesList } from '../notes-list/NotesList.component'
import { Link } from 'react-router-dom'

export const HomePage = ({allNotes}) => (
    <>
    <Hero>Nifty Notes App</Hero>
    <NotesList notes={allNotes}></NotesList>
    <Link to='/add_note'><button>Add Note</button></Link>
    </>
)