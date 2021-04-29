import React,{Component} from 'react';
import './authorProfile.css'
import Avatar from '../../Public/Image/avatar.png'
import {Link } from 'react-router-dom';




// get author 
class authorProfile extends Component {

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
            console.log(this.state.author)
        }
      }
    
    render() {
        const author = this.state.author
        return (
            <React.Fragment>
                {author ? 
                <React.Fragment>
                    <div className="user-header container">
                    <div className=" user-nickname">
                        <div className="user-title">
                            <h4>{author.name}</h4>
                            <p><small className="text-mute">@{author.username}</small></p>
                        </div>
                        <div className="user-slogan ">
                            <p><i>{author.slogan}</i></p>
                        </div>
                    </div>
                    
                    <div className=" user-image">
                        <img src={Avatar} className="img-avatar" alt="..."/>
                    </div>
                    
                    </div>
                    <div className=" user-intro">
                        <div className="container">
                            <p>{author.aboutMe}</p>
                        </div>
                    </div>

                    <div className=" user-media">
                        <div className="container">
                            <div className="row g-0 justify-content-md-center">
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].facebook}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].instagram}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].twitter}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].pinterest}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].youtube}</span>
                                </div>
                                <div class="col col-lg-2">
                                    <span className="icon">{author.socialMedia[0].rss}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </React.Fragment>
                : <h1>Loading...</h1>
            }
    
            </React.Fragment>
        );
    }
}

export default authorProfile;
