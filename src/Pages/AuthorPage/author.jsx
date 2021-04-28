import React, { Component } from 'react';
import NavBar from '../../components/Nav/navbar';
import './author.css'
import AuthorInfo from '../../components/AuthorProfile/authorProfile'
import AuthorContents from '../../components/AuthorContents/authorContents'
import services from '../../components/util/services'


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
    
    //DELETE A USER
    deleteUser = async() => {
    //     const id = this.props.location.state;
    //    await services.remove(id)
    //    .then(result => {
    //         // this.props.history.push('/')
    //     })
    //     .catch(err=> console.log(err))
    }
    render () {
        return (
            <React.Fragment>
                {/* <NavBar/> */}
                
                <div className="container">
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

