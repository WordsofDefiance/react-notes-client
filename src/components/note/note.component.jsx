import React from "react"
import './note.styles.css'
import { Link } from 'react-router-dom'

export const Note = ({note}) => {
    return(
        <div className='note-single'>
            <h3 className='note-title'>{note.title}</h3>
            <p className='note-body'>{note.body}</p>
            <Link className='note-link' to={`/${note.ID}`}>View Detail</Link>
        </div>
    )
}