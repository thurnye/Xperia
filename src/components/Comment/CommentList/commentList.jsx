import React,{Component} from 'react';
import moment from 'moment';
import Avatar from '../../../Public/Image/avatar.png'
import Avatar2 from '../../../Public/Image/peru2.jpeg'
import './comments.css'


// Retrieve all the comments
class commentList extends Component  {
    state = {
        comments : this.props.post.comments
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.post.comments !== prevProps.post.comments) {
               this.setState({
                comments : this.props.post.comments
               })
        }
        
      }
    render () {
        const comments = this.state.comments   //this contains all posts
        // console.log(comments)
        return (
            <React.Fragment>
                {   comments ? 
                <div className="container comment-list ">
                    <h4>COMMENTS:</h4>
                    <div className="comments" >
                    {comments.map((el) => {
                        // console.log(moment(el.comment.updatedAt.toString()).format('MMM Do YYYY'))
                       return <div className="row g-0 comments-items" key={el.comment._id}>
                            <div className="col-md-2 comment-img">
                                <img src={Avatar2} alt=""  style={{width: '100px',marginLeft: '20px'}} className="rounded float-start"/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <div className="experience-created">
                                        <h4><small className="text-muted">{el.comment.userId.name}</small></h4>
                                        <h6><small className=" comment-date">{moment(el.comment.createdAt.toString()).format('MMM Do YYYY')}</small></h6>
                                    </div>
                                    <h5 className="card-text">
                                        <small className="text-muted">{el.comment.comment}</small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    })
}
                        {/* <div className="row g-0 comments-items ">
                            <div className="col-md-2 comment-img">
                                <img src={Avatar} alt=""  style={{width: '100px',marginLeft: '20px'}} className="rounded float-start"/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <div className="experience-created">
                                        <h4><small className="text-muted">commenter</small></h4>
                                        <h6><small className=" comment-date">April 23, 2021</small></h6>
                                    </div>
                                    <h5 className="card-text">
                                        <small className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam corporis aperiam labore officiis temporibus laboriosam consequatur quas repellat. Et hic tempora doloremque consectetur sit exercitationem velit eius ad modi corrupti!
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 comments-items ">
                            <div className="col-md-2 comment-img">
                                <img src={Avatar2} alt=""  style={{width: '100px',marginLeft: '20px'}} className="rounded float-start"/>
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <div className="experience-created">
                                        <h4><small className="text-muted">commenter</small></h4>
                                        <h6><small className=" comment-date">April 23, 2021</small></h6>
                                    </div>
                                    <h5 className="card-text">
                                        <small className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam corporis aperiam labore officiis temporibus laboriosam consequatur quas repellat. Et hic tempora doloremque consectetur sit exercitationem velit eius ad modi corrupti!
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                : 
                    ''
                }
            </React.Fragment>
        );
    }
}

export default commentList;
