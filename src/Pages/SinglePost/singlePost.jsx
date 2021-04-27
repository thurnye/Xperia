import React,{Component} from 'react';
import NavBar from '../../components/Nav/navbar';
import Experience from '../../components/Experience/experience'
import ExpInfo from '../../components/ExpInfo/expInfo'
import services from '../../components/util/services'
import './single.css'

// FIND ONE POST HERE 




class singlePost extends Component { 

    state = {
        post: [],
        author: [],
        
    } 

    componentDidMount() {
        // const authorID = ''the ExpInfo will get the author Id
        const postID = this.props.location.state
        console.log(this.props.location.state)
        // Get Single Post
        services.findById(postID)
        .then(result => {
            // console.log(result)
            this.setState({
                post: result.data.post,
                author: result.data.author
            })
            // console.log(this.state.post.author)
        })
        .catch( err=> console.log(err))
    }



    render () {
        return (
            <React.Fragment>
                {/* <NavBar/> */}
                <h2>Xperia</h2>
                <p><small className="text-mute">User Slogan</small></p>
                <div className="container">
                <div className=" mb-3" >
                    <div className="row">
                        <div className="col-md-8 container ">
                            <Experience  post={this.state.post} author={this.state.author} userId={this.props.userId}/>
                        </div>
                        <div className="col-md-4 ">
                            <ExpInfo author={this.state.author}/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="foot components">
                    <div className="right-reserved">
                        <p className="text-muted">&copy;2021 Tamunotonye Daniel, All Right Reserved</p>
                    </div>
            </div>
             
            </React.Fragment>
        );
    }
    
}

export default singlePost;

