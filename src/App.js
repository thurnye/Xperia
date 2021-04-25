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
import Profile from './Pages/Profile/profile';
import SingleExp from './Pages/SingleExperience/singleExperience'
import NewExp from './Pages/NewExp/newExp'
import Signup from './components/signup/signup';
import { render } from '@testing-library/react';
// import Login from './components/LogIn/login';
// import FindById from './components/findbyId/findbyId';
// import Edit from './components/Update/edit'


class App extends Component {
  state = {
    user:null,
    _id : '6084d6f8757359cfec1aa6f6'
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
          <Route path="/account/user" render={(props) => (
              <Profile {...props}/>
            )}/>
          <Route path="/experience/create" render={(props) => (
              <NewExp {...props} userId={this.state._id}/>
            )}/>
          <Route path="/experience/user/" render={(props) => (
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
