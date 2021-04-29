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
import NavBar from './components/Nav/navbar'
import SubNav from './components/SubNav/subNav'
import Home from './Pages/Home/home';
import MyAccount from './Pages/MyAccount/myAccount';
import Author from './Pages/AuthorPage/author';
import SinglePost from './Pages/SinglePost/singlePost'
import NewExp from './Pages/CreatePost/createPost'
import Auth from './Pages/AuthPage/AuthPage'
import Posts from './Pages/Result/result'
import Signup from './Pages/Signup/signup';
import Login from './Pages/LogIn/login';
import jwt_decode from "jwt-decode";
// import FindById from './components/findbyId/findbyId';
import Update from './Pages/Update/edit'


class App extends Component {
  state = {
    user:null,
  }
  
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }
  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      const userDoc = jwt_decode(token);  // decode jwt token
      this.setState({user: userDoc.user})      
    }
  }
  

render() {
  return (
    <React.Fragment>
    <NavBar />
    <SubNav/>
      <Switch>

        <Route path="/" exact render={(props) => (
            <Home {...props} setUserInState={this.setUserInState}/>
          )}/>
        <Route path="/register" render={(props) => (
            <Signup {...props} setUserInState={this.setUserInState}/>
          )}/>
        <Route path="/account/login" render={(props) => (
            <Login {...props} setUserInState={this.setUserInState}/>
          )}/>

        <Route path="/posts" render={(props) => (
            <Posts {...props} loggedInUser={this.state.user}/>
          )}/>
        <Route path="/myaccount" render={(props) => (
            <MyAccount {...props} loggedInUser={this.state.user} />
          )}/>

        <Route path="/account/author" render={(props) => (
            <Author {...props} loggedInUserId={this.state.user} />
          )}/>
        <Route path="/experience/create" render={(props) => (
            <NewExp {...props} loggedInUserId={this.state.user}/>
          )}/>
          <Route path="/settings" render={(props) => (
            <Update {...props} loggedInUserId={this.state.user} {...props} setUserInState={this.setUserInState}/>
          )}/>

        <Route path="/post" render={(props) => (
            <SinglePost {...props} userId={this.state.user}/>
          )}/>
      </Switch>
  </React.Fragment>
  )
}
}
export default App;


// <React.Fragment>
//       <NavBar />
//       <SubNav/>
//       <Route path="/"  exact component={Home} />
//       { this.state.user ? 
//         <Switch>
//           {/* <Route path="/register" component={Signup} /> */}

//           <Route path="/register" render={(props) => (
//               <Signup {...props} setUserInState={this.setUserInState}/>
//             )}/>
//           <Route path="/account/login" render={(props) => (
//               <Login {...props} setUserInState={this.setUserInState}/>
//             )}/>

//           <Route path="/posts" render={(props) => (
//               <Posts {...props} loggedInUser={this.state.user}/>
//             )}/>
//           <Route path="/myaccount" render={() => (
//               <MyAccount  loggedInUser={this.state.user} />
//             )}/>

//           <Route path="/account/author" render={(props) => (
//               <Author {...props} loggedInUserId={this.state.user} />
//             )}/>
//           <Route path="/experience/create" render={(props) => (
//               <NewExp {...props} loggedInUserId={this.state.user}/>
//             )}/>
//             <Route path="/settings" render={(props) => (
//               <Update  loggedInUserId={this.state.user} {...props} setUserInState={this.setUserInState}/>
//             )}/>

//           <Route path="/post" render={(props) => (
//               <SinglePost {...props} userId={this.state.user}/>
//             )}/>
//         </Switch>
//         :
//         <AuthPage setUserInState={this.setUserInState}/>
//         </React.Fragment>
//     </React.Fragment>