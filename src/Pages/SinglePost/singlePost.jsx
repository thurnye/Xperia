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
        const postId = this.props.location.state.postId
        console.log('postId:',this.props.location.state.postId)
        // Get Single Post
        services.findById(postId)
        .then(result => {
            console.log(result)
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
                <div className="" style={{marginLeft: "10px"}}>
                <h2>Xperia</h2>
                <p style={{marginTop: "-20px"}}><small className="text-muted"><i>Tales of a journey...</i></small></p>
                </div>
                
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

