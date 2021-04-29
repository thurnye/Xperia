import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './myContent.css'
import services from '../../components/util/services'



// Get all posts where User === UserId
class myPost extends Component {

  state = {
    myPost : null,
    user: null
  }




  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) {
           this.setState({
             myPost: this.props.user.post,
             user: this.props.user
           })
    }
  }


    //DELETE A Post
    deletePost = (postId) => {
      console.log(postId)
      services.deleteUser(postId)
      .then(result => {
        console.log(result)
      })
      // window.location.reload()
  }
  
  render () {
    const myPost = this.state.myPost
    return (
      <React.Fragment> 
        <div class="masonry">
          <div class="masonry"></div>

            {
              myPost ?  
              myPost.map(el => {
                console.log(el)
                return (
                  <div class="item card myPost" key={el._id}>
                  <img src="https://mdbootstrap.com/img/Photos/Others/food3.jpg"   style= {{width: "150px"}}alt=""/>
                  <div class="place">
                    <div className="preview-info">
                       <Link to={{
                         pathname: `/post/${el.trip._id}`,
                        search: `?title=${this.state.user.name}`,
                        state: {postId: el.trip._id},
                        hash: this.state.user._id,
                         }} className="btn"> 
                        <p><small className="text-mute"><i>{el.trip.city}</i></small></p>
                        <h5><small className="text-mute">{el.trip.country}</small></h5>
                    </Link>
                    </div>
                    
                </div>
                <div>
                  <div className="post-action">
                    <a href="" class="badge badge-secondary">Edit</a>
                    {/* <!-- Button trigger modal --> */}
                    <a href="delete-post"  class="badge badge-danger" data-toggle="modal" data-target="#exampleModalCenter">Del</a>
                  </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title text-muted" id="exampleModalLongTitle">{el.trip.title}</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                      <h5><i>Are you sure you want to delete this post?</i></h5>
                    </div>
                    <div class="modal-footer">

                        <input type="button" class="btn btn-secondary" data-dismiss="modal" value="Cancel"/>
                        <button type="submit" class="btn btn-danger " data-dismiss="modal" 
                        onClick={()=>this.deletePost(el.trip._id)}>Confirm Delete </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                
                </div>
                )
              })
              
              : " "}

          

          
        </div>
       
       
       
       {/* This is for adding new experience */}
        <div class="item card">
          <img src="#"   style= {{width: "250px"}}alt=""/>
          <div class="place">
            <div className="preview-info">
              <Link to={{
                pathname: `/experience/create`,
                state: this.props.userId
                }} className="btn"> 
              <p><small className="text-mute"><i>Form Element</i></small></p>
              <h5><small className="text-mute">Form</small></h5>
            </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  
}

export default myPost;
