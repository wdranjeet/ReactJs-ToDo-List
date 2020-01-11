import React from 'react';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
export default function Posts({posts=[]}) {
    return(
        posts.length ? posts.map( post => <Link to={`detail/${post.id}`}>{post.title}</Link>): "Loading"
    )
}