import React,{Component} from 'react';
import Avatar from '../../../Public/Image/avatar.png'
import Avatar2 from '../../../Public/Image/peru2.jpeg'
import './comments.css'


// Retrieve all the comments
class commentList extends Component  {
    render () {
        const comments = this.props.post.comments
        console.log(comments)
        return (
  
            <React.Fragment>
                
                <div className="container comment-list ">
                    <h4>COMMENTS:</h4>
                    <div className="comments" >
                        <div class="row g-0 comments-items ">
                            <div class="col-md-2 comment-img">
                                <img src={Avatar} alt="" srcset="" style={{width: '100px',marginLeft: '20px'}} className="rounded float-start"/>
                            </div>
                            <div class="col-md-10">
                                <div class="card-body">
                                    <div className="experience-created">
                                        <h4><small className="text-muted">commenter</small></h4>
                                        <h6><small className=" comment-date">April 23, 2021</small></h6>
                                    </div>
                                    <h5 class="card-text">
                                        <small class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam corporis aperiam labore officiis temporibus laboriosam consequatur quas repellat. Et hic tempora doloremque consectetur sit exercitationem velit eius ad modi corrupti!
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="row g-0 comments-items ">
                            <div class="col-md-2 comment-img">
                                <img src={Avatar2} alt="" srcset="" style={{width: '100px',marginLeft: '20px'}} className="rounded float-start"/>
                            </div>
                            <div class="col-md-10">
                                <div class="card-body">
                                    <div className="experience-created">
                                        <h4><small className="text-muted">commenter</small></h4>
                                        <h6><small className=" comment-date">April 23, 2021</small></h6>
                                    </div>
                                    <h5 class="card-text">
                                        <small class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam corporis aperiam labore officiis temporibus laboriosam consequatur quas repellat. Et hic tempora doloremque consectetur sit exercitationem velit eius ad modi corrupti!
                                        </small>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default commentList;
