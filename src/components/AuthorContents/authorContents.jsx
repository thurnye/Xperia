import  React,{Component} from 'react';
import Masonry from 'react-masonry-component';
import {Link } from 'react-router-dom';
// import Italy from '../../Public/Image/italy.jpeg'
import { $ }  from 'react-jquery-plugin'
import './authorContents.css'




// Get all posts where User === UserId
class myPost extends Component {

  state = {
    myPost : null,
    user: null
  }




  componentDidUpdate(prevProps, prevState) {
    if (this.props.author !== prevProps.author) {
           this.setState({
             myPost: this.props.author.post,
             user: this.props.author
           })
    }
  }
  
  render () {
    const myPost = this.state.myPost
    console.log(myPost)
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
       
       
       
        
        <div className="foot components">
          <p className="mb-0">© 2021 Tamunotonye Daniel, All Rights Reserved</p>
        </div>
      </React.Fragment>
    );
  }
  
}

export default myPost;
