import React from 'react'
import { Link } from 'react-router-dom'
import { StatusBox } from '../status-box/status-box.component'
import './add-note.styles.css'


export class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            status: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        // Check to see if both title and body are present.
        if (this.state.title === '' || this.state.body === '') {
            this.setState({status: 'You must fill out both title and body.'})
        } else {
            this.setState({status: ''})
        }
    }

    render() {
        return (
            <>
            <h1>Add Note (To Do)</h1>
            <form id="add-note" onSubmit={this.handleSubmit}>
                <input id="title" value={this.state.title} type='text' placeholder='Enter a Title' onChange={this.handleTitleChange}></input>
                <textarea onChange={this.handleBodyChange} id="body" placeholder='Enter the note'></textarea>
                <button type="submit">ADDING NOTES COMING SOON!</button>
            </form>
            <StatusBox status={this.state.status}></StatusBox>
            {/* <div className="status-box">{this.state.status}</div> */}
            <Link to='/'>Go Back</Link>
            </>
        )
    }
}
// export const AddNote = () => {
//     return (
//         <> //         <h1>Add Note (To Do)</h1>
//         <form id="add-note" action='/'>
//             <input id="title" type='text' placeholder='Enter a Title'></input>
//             <textarea id="body" placeholder='Enter the note'></textarea>
//             <button onClick={e => e.preventDefault()} type="submit">ADDING NOTES COMING SOON!</button>
//         </form>
//         <Link to='/'>Go Back</Link>
//         </>
//     )

// }