import React from 'react'
import { Link } from 'react-router-dom'

export const AddNote = () => {
    return (
        <>
        <h1>Add Note</h1>
        <input id="title" type='text' placeholder='Enter a Title'></input>
        <textarea id="body" placeholder='Enter the note'></textarea>
        <button>ADDING NOTES COMING SOON!</button>
        <Link to='/'>Go Back</Link>
        </>
    )

}