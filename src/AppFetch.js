import React, {Component} from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Title from './title';
import { Container } from '@material-ui/core';
import Posts from './Post';
import PostDetail from './PostDetail';

class AppFetch extends Component{
    state = {
         posts:[]
    }
    componentDidMount(){
        fetch('//jsonplaceholder.typicode.com/posts')
           .then(response => response.json())
           .then(data => {
               this.setState({posts: data})
           })
           .catch(error =>console.log(error))
    }
    render() {
        return(
            <Container maxWidth="sm">
                <Router>
                 <Route path="/posts" >
                  <Title title="Posts"/>
                  <Posts posts={this.state.posts}></Posts>
                </Route>
                <Route path="/Detail/:id/">
                  <Title title="Detail"/>
                  <PostDetail></PostDetail>
                </Route>
                </Router>
            </Container>
        );
    }
}

export default AppFetch
