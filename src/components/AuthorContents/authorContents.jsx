import  React,{Component} from 'react';
import Masonry from 'react-masonry-component';
import {Link } from 'react-router-dom';
// import Italy from '../../Public/Image/italy.jpeg'
import { $ }  from 'react-jquery-plugin'
import './authorContents.css'




// Get all posts where author === authorId
class authorPost extends Component {

  state = {
    authorPost : null,
    author: null
  }




  componentDidUpdate(prevProps, prevState) {
    if (this.props.author !== prevProps.author) {
           this.setState({
             authorPost: this.props.author.post,
             author: this.props.author
           })
    }
  }
  
  render () {
    const authorPost = this.state.authorPost
    console.log(authorPost)
    return (
      <React.Fragment> 
        <div class="masonry">
          <div class="masonry"></div>

            {
              authorPost ?  
              authorPost.map(el => {
                return (
                  <div class="item card" key={el._id}>
                  <img src="https://mdbootstrap.com/img/Photos/Others/food3.jpg"   style= {{width: "150px"}}alt=""/>
                  <div class="place">
                    <div className="preview-info">
                       <Link to={{
                         pathname: `/post/${el.trip._id}`,
                        search: `?title=${this.state.author.name}`,
                        state: {postId: el._id},
                        hash: this.state.author._id,
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
       
       
       
        
      </React.Fragment>
    );
  }
  
}

export default authorPost;
