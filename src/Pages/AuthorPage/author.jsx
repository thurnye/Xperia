import React, { Component } from 'react';
import './author.css'
import AuthorInfo from '../../components/AuthorProfile/authorProfile'
import AuthorContents from '../../components/AuthorContents/authorContents'
import services from '../../components/util/services'
import JumbotronImg from '../../Public/Image/atlas.png'


// THIS IS A VISITED USER ACCOUNT AND ALSO IT CAN BE USED FOR PERSONAL ACCOUNT TOO

export default class profile extends Component {
    // get a user profile find by id
    state = {
        data: []
    }

    //RETRIEVING A PARTICULAR USER
    componentDidMount() {
        const id = this.props.location.state.authorId
        // console.log(id)
        services.findMyAccount(id)
        .then(user => {
            // console.log(user.data.user)
            this.setState({
                data: user.data.user
            })
        })
        .catch(err => console.log(err));
    }
    
   
    render () {
        return (
            <React.Fragment>
                <div className="container account">
                    <div class="jumbotron container jumbotron-fluid" style={{backgroundImage: `url(${JumbotronImg})`}}>
                        <div class="container">
                            <h1 class="display-4"></h1>
                        </div>
                    </div>
                <div class="card mb-3" >
                    <div class="row">
                        <div class="col-md-4 container userInfo">
                            <AuthorInfo author={this.state.data}/>
                        </div>
                        <div class="col-md-8 components">
                            <AuthorContents author={this.state.data}/>
                        </div>
                    </div>
                </div>
                </div>
               
            
            </React.Fragment>
        );
    }
}

