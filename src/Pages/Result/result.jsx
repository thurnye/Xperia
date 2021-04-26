import React, { Component } from 'react';
import NavBar from '../../components/Nav/navbar';
import Posts from '../../components/GetAllPost/allPosts'



// THIS IS A VISITED USER ACCOUNT AND ALSO IT CAN BE USED FOR PERSONAL ACCOUNT TOO

export default class profile extends Component {
    render () {
        return (
            <React.Fragment>
                <NavBar/>
                
                All Posts
                <Posts />
            </React.Fragment>
        );
    }
}

