import React,{ Component } from 'react';
import jwt_decode from "jwt-decode";
import services from '../../components/util/services'

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  onChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      }
      services.postLogin(newUser)
      .then(res => {
        let token = res.data
        localStorage.setItem('token', token);  
        const userDoc = jwt_decode(token); 
        this.props.setUserInState(userDoc.user)
        // this.props.history.push(`/`)
     })
     .then(resp => {
       //REDIRECT TO THE /findbyid/${el.id} PAGE
      // this.props.history.goBack()
      this.props.history.push('/')
     } )
    .catch(e => {
      console.log(e);
    });
  }

  render() {
    return (

      <React.Fragment>
          {/* <NavBar/> */}
          <section className="guest">
            <div className="sign-up">
              <div className="card" style= {{width: "30rem"}} >
                <div className="card-header">
                  <h5 className="card-name"> Login to Share Your Experience</h5>
                  <hr></hr>
                </div>
                <div className="card-body">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form">
                      
                       {/* Email */}
                       <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9
                        ">
                          <input name="email" type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.onChange}/>
                        </div>
                      </div>

                      {/* password */}
                      <div className="form-group row">
                        <label  className="col-sm-3 col-form-label">password</label>
                        <div className="col-sm-9
                        ">
                        <input type='password' name="password" className="form-control" id="inputpassword" value={this.state.password} onChange={this.onChange}></input>
                        </div>
                      </div>
                      
                    </div>

                    <div className="getCook">  
                      <button type="submit" className="btn">Log In</button>
                    </div>
                  </form>

                </div>
                
              </div>
            </div>
            </section>
        </React.Fragment>
    );
  }
}