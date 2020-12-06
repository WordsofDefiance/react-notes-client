import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';


const NoteDetail = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState()
    const id = props.match.params.id

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
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <Link to='/'>Back</Link>
        </>
        }
        </div>
      );
}

export default withRouter(NoteDetail)