import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import services from '../util/services'
import SubNav from '../SubNav/subNav'

export default class displayUsers extends Component {

    state = {
        data: [],
    } 

    componentDidMount() {

        //DISPLAY ALL Posts
        services.find()
        .then(result => {
            console.log(result)
            this.setState({
                data: result.data.posts
            })
        })
        .catch( err=> console.log(err))
    }



    render() {
       const Inventory =  this.state.data.map((post)=> {
            return (
                <React.Fragment>
                    {/* <h6>{this.props.location.state}</h6> */}
                <div class="card" key={post._id}>
                        <img src="" class="card-img-top" alt="anImage"/>
                        <div class="card-body">
                        <h5 class="card-title">{post.title} </h5>
                        <p class="card-text">{post.city},{post.country} </p>
                        <p class="card-text">{post.title} </p>
                        <p class="card-text">{post._id}</p>
                        </div>
                        <Link to={{
                            pathname: `/post/${post._id}` ,
                            search: `?author=${post.author.name}`,
                            state: `${post._id}`,
                            hash: post.author._id,
                        }}
                        className="btn explore">EXPLORE </Link>
                </div>
                </React.Fragment>
            )
        })

        return (
            <div>
                <SubNav/>
                <div className="card-group">
                    
                    {Inventory}
                </div>
            </div>
        )
    }
}
