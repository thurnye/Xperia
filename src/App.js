import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/home';
import Profile from './Pages/MyAccount/myAccount';
import Author from './Pages/AuthorPage/author';
import SingleExp from './Pages/SinglePost/singlePost'
import NewExp from './Pages/NewExp/newExp'
import Posts from './Pages/Result/result'
import Signup from './components/signup/signup';
import { render } from '@testing-library/react';
// import Login from './components/LogIn/login';
// import FindById from './components/findbyId/findbyId';
// import Edit from './components/Update/edit'


class App extends Component {
  state = {
    user:null,
    // these are just test datas
    
    _id : '60861b7746965b0d1e9c7de0', //the dummy user id
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({user: userDoc.user})      
    }
  }
  

render() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/"  exact component={Home} />
          {/* <Route path="/register" component={Signup} /> */}

          <Route path="/register" render={() => (
              <Signup setUserInState={this.setUserInState}/>
            )}/>

          <Route path="/posts" render={() => (
              <Posts setUserInState={this.setUserInState}/>
            )}/>
          <Route path="/myaccount" render={(props) => (
              <Profile {...props} userId={this.state._id} />
            )}/>

          <Route path="/account/author" render={(props) => (
              <Author {...props} userId={this.state._id} />
            )}/>
          <Route path="/experience/create" render={(props) => (
              <NewExp {...props} userId={this.state._id}/>
            )}/>

          <Route path="/post" render={(props) => (
              <SingleExp {...props}/>
            )}/>










          {/* <Route path="/login" component={Login} />        */}
          {/* <Route path="/findbyid/" component={FindById} />        */}
          {/* <Route path="/edit/" component={Edit} />         */}
        </Switch>
      </Router>
    </React.Fragment>
    
  )
}
}
export default App;
