import React, { Component } from 'react';
import services from '../util/services'
import NavBar from '../Nav/navbar';
import './signup.css';




 export default class createAnAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      userName: '',
      password: '',
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

 
    
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      userName: this.state.userName,
      password: this.state.password,
      number: this.state.number,
      email: this.state.email,
      }
    services.create(newUser)
    .then(res => {
      console.log(res)
      this.props.history.push(`/`)
       // this.setState({
      //   // id: response.newUser.id,
      //   name: response.newUser.name,
      //   userName: response.newUser.userName,
      //   password: response.newUser.password,
      //   number: response.newUser.number,
      //   email: response.newUser.email,
      // });
      // console.log(response.newUser);

    })
    .catch(e => {
      console.log(e);
    });
    }

    newUser() {
      this.setState({
          id: null,
          name: '',
          userName: '',
          password: '',
          email: '',
        
      });
    }

   render() { 
     return (
        <React.Fragment>
          <NavBar/>
          <section className="guest">
            <div className="sign-up">
              <div className="card" style= {{width: "30rem"}} >
                <div className="card-header">
                  <h5 className="card-name"> Register to Share Your Experience</h5>
                  <hr></hr>
                </div>
                <div className="card-body">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form">
                      
                      {/* First Name */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">First Name</label>
                        <div className="col-sm-9
                        ">
                          <input name="name" type="text" className="form-control" id="inputname" value={this.state.name} onChange={this.onChange}/>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">Last Name</label>
                        <div className="col-sm-9
                        ">
                          <input name="userName" type="text" className="form-control" id="inputuserName" value={this.state.userName} onChange={this.onChange}/>
                        </div>
                      </div>

                      {/* password */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">password</label>
                        <div className="col-sm-9
                        ">
                        <textarea name="password" className="form-control" id="inputpassword" rows="3" value={this.state.password} onChange={this.onChange}></textarea>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9
                        ">
                          <input name="email" type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.onChange}/>
                        </div>
                      </div>
                      
                    </div>

                    <div className="getCook">  
                      <button type="submit" className="btn">Sign Up</button>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
            </section>
        </React.Fragment>
    )}
}





