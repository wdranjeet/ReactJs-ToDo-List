import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Title from './title';

export default function PostDetail() {
    const [detail, setDetail] = useState([])
    const {id} = useParams()
   
    useEffect( async () => {
        const PostDetail = await fetch(`//jsonplaceholder.typicode.com/posts/${id}`)
              .then(resonse => resonse.json())
              .then(data => data)
         setDetail(PostDetail)     
    }, [])

    return(
                <div>
                <h3>{detail.title}</h3>
                <p>{detail.body}</p>
                </div>
    )
}