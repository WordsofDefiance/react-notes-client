import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Button } from '../button/Button.component'
import { StatusBox } from '../status-box/status-box.component'

const EditNote = (props) => {
    const id = props.match.params.id;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [editTitle, setEditTitle] = useState();
    const [editBody, setEditBody] = useState();
    const [statusText, setStatusText] = useState('');

    // https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm
    useEffect(() => {
        fetch(`/api/single_note/${id}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setEditTitle(response.title)
            setEditBody(response.body)
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(editTitle, editBody, id)
        fetch(`/api/update_note/`, {
            method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    title: editTitle,
                    body: editBody,
                    id: id
                })
        })
        .then( (response) => { 
            console.log(response)
            console.log(this)
            setStatusText('Updated Successfully!!')
            setTimeout( () => {                       
                // window.location.href = `/${id}`
                setData({title: editTitle, body: editBody})
            }, 500)
        });
    }

    return (
        <div>
        {!isLoading &&
        <>
        <h1>Edit Note</h1>
        <form type="post" onSubmit={event=>handleSubmit(event)}>
            <div>
                <input onChange={event => setEditTitle(event.target.value)} type='text' defaultValue={data.title} />
            </div>
            <div>
                <textarea onChange={event => setEditBody(event.target.value)} defaultValue={data.body}></textarea>
            </div>
            <div>
                <Button onChange={event => handleSubmit(event)} type='submit'>Save Edit</Button>
            </div>
        </form>
        <Link to={`/${id}`}>Cancel</Link>
        <StatusBox>{statusText}</StatusBox>
        </>
        }
        </div>
    )
}

export default withRouter(EditNote)
