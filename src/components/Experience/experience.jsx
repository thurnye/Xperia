import React from 'react';
import moment from 'moment';
import './experience.css'
import LandScape from '../../Public/Image/landscape.jpeg'
import Avatar from '../../Public/Image/avatar.png'
import {Link } from 'react-router-dom';
import CommentForm from '../Comment/FORM/commentForm'
import CommentsList from '../Comment/CommentList/commentList'
import { Component } from 'react';
// import CommentList from '../Comment/COMMENTSLIST/commentList';

class  experience extends Component {
    render () {
        const post = this.props.post
        const author = this.props.author
        console.log(author._id)
        return (
            <React.Fragment>
                <div className="experience">
                    <div className="container">
                        <div className="experience-head">
                            <div className="experience-Img">
                                <img src={LandScape} className="card-img" alt="..."/>
                            </div>
                            <div className="experience-head-content">
                                <h5><i>{post.city}, {post.country}</i></h5>
                                <p>{post.title}</p>
                                <p><small className="text-mute">Category</small></p>
                            </div>
                        </div>
                        <div className="experience-text">
                            <p>{post.story}</p>
                            
                            <div className="exp-img">
                                <img src={LandScape} alt="" style={{width: "250px", margin: '10px'}}/>
                                <img src={LandScape} alt="" style={{width: "250px", margin: '10px'}}/>
                                <img src={LandScape} alt="" style={{width: "250px", margin: '10px'}}/>
                                <img src={LandScape} alt="" style={{width: "250px", margin: '10px'}}/>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, sint dicta. Saepe, officiis! Quos, ipsum? Nisi maxime obcaecati assumenda quisquam?</p>
                        </div>
                            
                        <hr/>
                        <div className="experience-created">
                            <h4><small className="text-muted">{author.name}</small></h4>
                            <h5><small className="text-muted">{moment(post.createdAt).format('MMM Do YYYY')}</small></h5>
                        </div>
                        <hr/>
                        <div className="user-experience">


                            {/* <Avatar author={this.props.author}/> */}
                            <div className=" user-image">
                                {author ?  
                                <Link to={{
                                    pathname: `/account/author/${author._id}`,
                                    search: `?author=${author.name}`,
                                    state: `${author._id}`,
                                }}>
                                    <img src={Avatar} className="img-avatar" alt="..."/>
                                </Link>
                        
                                :  '' }
                            </div>




                            <div className="user-name">
                            <h4><small className="text-muted">{author.name}</small></h4>
                            <h6><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis atque mollitia nam autem excepturi soluta?</small></h6>
                            </div>
                        </div>
                        <CommentsList post={this.props.post}/>
                        <hr/>
                        
                        <CommentForm post={this.props.post} userId={this.props.userId}/>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default experience;
