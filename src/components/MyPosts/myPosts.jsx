import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './myContent.css'




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
  
  render () {
    const myPost = this.state.myPost
    return (
      <React.Fragment> 
        <div class="masonry">
          <div class="masonry"></div>

            {
              myPost ?  
              myPost.map(el => {
                return (
                  <div class="item card" key={el._id}>
                  <img src="https://mdbootstrap.com/img/Photos/Others/food3.jpg"   style= {{width: "150px"}}alt=""/>
                  <div class="place">
                    <div className="preview-info">
                       <Link to={{
                         pathname: `/post/${el.trip._id}`,
                        //  state: props.eid    //store the user experience in state
      
                        // pathname: `/post/${post._id}` ,
                        search: `?title=${this.state.user.name}`,
                        state: {postId: el._id},
                        hash: this.state.user._id,
      
      
                         }} className="btn"> 
                        <p><small className="text-mute"><i>{el.trip.city}</i></small></p>
                        <h5><small className="text-mute">{el.trip.country}</small></h5>
                    </Link>
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
