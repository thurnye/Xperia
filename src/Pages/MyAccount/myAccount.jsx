import React, { Component } from 'react';
import NavBar from '../../components/Nav/navbar';
import MyInfo from '../../components/MyInfo/myInfo'
import MyPosts from '../../components/MyPosts/myPosts'
import services from '../../components/util/services'



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
            console.log(this.props.loggedInUser)
              services.findMyAccount(this.props.loggedInUser._id)
            .then(user => {
                // console.log(user)
                this.setState({
                    user: user.data.user,
                    userId: user.data.user._id,
                })
            })
            .catch(err => console.log(err));
          }
    }
    
    
    //DELETE A USER
    deleteUser = async() => {
        // const id = this.props.location.state;
        // await services.remove(id)
        // .then(result => {
        //         // this.props.history.push('/')
        //     })
        //     .catch(err=> console.log(err))
    }
    render () {
        // let displayInfo;
        // user = this.state.user
        //  if (user){
        //    return  displayed = 
        //  }

        return (
            <React.Fragment>
                {/* <NavBar/> */}
                
                <div className="container">
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

