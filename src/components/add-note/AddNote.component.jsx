import React from 'react'
import { Link } from 'react-router-dom'
import './add-note.styles.css'

export const AddNote = () => {
    return (
        <>
        <h1>Add Note (To Do)</h1>
        <form id="add-note" action='/'>
            <input id="title" type='text' placeholder='Enter a Title'></input>
            <textarea id="body" placeholder='Enter the note'></textarea>
            <button onClick={e => e.preventDefault()} type="submit">ADDING NOTES COMING SOON!</button>
        </form>
        <Link to='/'>Go Back</Link>
        </>
    )

}