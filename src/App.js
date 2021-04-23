import React from 'react';
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
// import Signup from './components/signup/signup';
// import Login from './components/LogIn/login';
// import FindById from './components/findbyId/findbyId';
// import Edit from './components/Update/edit'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/account/user"   component={Profile} />
          <Route path="/experience/user/"   component={SingleExp} />
          {/* <Route path="/signin" component={Signup} />
          <Route path="/login" component={Login} />       
          <Route path="/findbyid/" component={FindById} />       
          <Route path="/edit/" component={Edit} />        */}
        </Switch>
      </Router>
    </React.Fragment>
    
  );
}
export default App;
