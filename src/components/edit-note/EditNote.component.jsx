import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom'

const EditNote = (props) => {
    const id = props.match.params.id;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    // https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm
    useEffect(() => {
        fetch(`/api/single_note/${id}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      }, []);
    return (
        <div>
        {!isLoading &&
        <>
        <h1>Edit Note</h1>
        <form>
            <div>
                <input type='text' defaultValue={data.title} />
            </div>
            <div>
                <textarea defaultValue={data.body}></textarea>
            </div>
        </form>
        <Link to={`/${id}`}>Cancel</Link>
        </>
        }
        </div>
    )
}

export default withRouter(EditNote)
