import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { StatusBox } from '../status-box/status-box.component'
import './add-note.styles.css'
import { Button } from '../button/Button.component'


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
            fetch("/api/add_note", {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                //make sure to serialize your JSON body
                body: JSON.stringify({
                    title: this.state.title,
                    body: this.state.body
                })
            })
            .then( (response) => { 
                //do something awesome that makes the world a better place
                console.log(response)
                this.setState({status: 'Note Saved Successfully! Returning to home page.'})
                setTimeout( () => {                       
                    window.location.href = '/'
                }, 500)
            });
        }
    }

    render() {
        return (
            <>
            <h1>Add Note (To Do)</h1>
            <form id="add-note" onSubmit={this.handleSubmit}>
                <input id="title" value={this.state.title} type='text' placeholder='Enter a Title' onChange={this.handleTitleChange}></input>
                <textarea onChange={this.handleBodyChange} id="body" placeholder='Enter the note'></textarea>
                <Button type="submit">Add Note</Button>
            </form>
            <StatusBox status={this.state.status}></StatusBox>
            <Link to='/'>Go Back</Link>
            </>
        )
    }
}