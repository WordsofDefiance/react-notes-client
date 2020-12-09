import React from "react"
import { Note } from "../note/note.component"
import './notes-list.styles.css'

export const NotesList = ({notes}) => (
    <>
    <div className='notes-list'>
        {notes.map(note => (
            <Note key={note.id} note={note}></Note>
        ))}
    </div>
    </>
)