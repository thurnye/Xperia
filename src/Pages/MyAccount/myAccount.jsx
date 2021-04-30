import React, { Component } from 'react';
import MyInfo from '../../components/MyInfo/myInfo'
import MyPosts from '../../components/MyPosts/myPosts'
import services from '../../components/util/services'
import './myAccount.css'
import JumbotronImg from '../../Public/Image/atlas.png'



// THIS IS A VISITED USER ACCOUNT AND ALSO IT CAN BE USED FOR PERSONAL ACCOUNT TOO

export default class myAccount extends Component {
    // get a user myAccount find by id
    state = {
        user: null,
        userId: null,

    }

 
    //RETRIEVING A PARTICULAR USER
    componentDidUpdate(prevProps, prevState) {
        if (this.props.loggedInUser !== prevProps.loggedInUser) {
              services.findMyAccount(this.props.loggedInUser._id)
            .then(user => {
                this.setState({
                    user: user.data.user,
                    userId: user.data.user._id,
                })
            })
            .catch(err => console.log(err));
          }
    }
    
    render () {
        return (
            <React.Fragment>
                <div className="container account" >
                    <div class="jumbotron container jumbotron-fluid" style={{backgroundImage: `url(${JumbotronImg})`}}>
                        <div class="container">
                            <h1 class="display-4"></h1>
                        </div>
                    </div>
                    <div class="card mb-3" >
                        <div class="row">
                            <div class="col-md-4 container userInfo">
                                <MyInfo loggedInUser={this.state.user}/>
                            </div>
                            <div class="col-md-8 components">
                                <MyPosts user={this.state.user}  userId={this.state.userId}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot components">
                    <p className="mb-0">© 2021 Tamunotonye Daniel, All Rights Reserved</p>
                </div>
             
            </React.Fragment>
        );
    }
}

