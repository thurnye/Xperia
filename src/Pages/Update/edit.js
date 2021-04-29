import React, { Component } from 'react';
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";
import services from '../../components/util/services'
import EditForm from './editForm'
import Avatar from '../../Public/Image/avatar.png'



 export default class Settings extends Component {

  state = {
    id: '',
    name: '',
    email: '',
    aboutMe: '',
    slogan: '',
    myCity: '',
    myStateProvince: '',
    myCountry: '',
    facebook: "",
    twitter: '',
    instagram:'',
    pinterest: '',
    youtube: '',
    rss: ''
  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.loggedInUserId !== prevProps.loggedInUserId) {
      
      // RETRIEVE THE USER
      const user = this.props.loggedInUserId
      // console.log(user)
      // console.log(user._id)
      this.setState({
      id: user._id,
      name: user.name,
      email: user.email,
      aboutMe: user.aboutMe,
      slogan: user.slogan,
      myCity: user.myCity,
      myStateProvince: user.myStateProvince,
      myCountry: user.myCountry,
      facebook: user.socialMedia[0].facebook,  //later change the socialMedia[0].facbook......
      twitter: user.socialMedia[0].twitter,
      instagram:user.socialMedia[0].instagram,
      pinterest: user.socialMedia[0].pinterest,
      youtube: user.socialMedia[0].youtube,
      rss: user.socialMedia[0].rss
  })
  // console.log(this.state)
    }
  }
  
    
  
  
  onUpdate = (e) => {
    e.preventDefault();

    // //GET CURRENT VALUES
    const id = this.state.id
    const updatedUser = {
      name: this.state.name,
      email: this.state.email,
      aboutMe: this.state.aboutMe,
      slogan: this.state.slogan,
      myCity: this.state.myCity,
      myStateProvince: this.state.myStateProvince,
      myCountry: this.state.myCountry,
      socialMedia: [{
        'facebook': this.state.facebook,
        'twitter': this.state.twitter,
        'instagram':this.state.instagram,
        'pinterest': this.state.pinterest,
        'youtube': this.state.youtube,
        'rss': this.state.rss
      }]
    }
    services.postEdit(id, updatedUser)
    .then(res=> {
      // console.log(res)
      
      let token = res.data
      localStorage.setItem('token', token);  
      const userDoc = jwt_decode(token); 
      console.log(userDoc)
      this.props.setUserInState(userDoc.user)
    }).then(result => {
      //REDIRECT TO THE user account PAGE
      this.props.history.goBack()
    })
    .catch(err => console.log(err))
  }


    //DELETE My Account
    deleteAccount = () => {
      console.log(this.state.id)
      services.deleteUser(this.state.id)
      .then(result => {
        console.log(result.data)
        // remove the token from local storage
        localStorage.removeItem('token') 
        this.props.history.push('/register')
      })
  }

  render() { 
    // console.log(this.props)
    return (
      <React.Fragment>
        <div className="container edit">
          <div class="card mb-3" >
            <div class="row">
              <div class="col-md-4 container userInfo">
                {/* <!-- Jumbotron --> */}
                <div class="jumbotron text-center">

                  {/* <!-- Title --> */}
                  <h4 class="card-title h4 pb-2"><strong>My adventure</strong></h4>

                  {/* <!-- Card image --> */}
                  <div class="view overlay my-4">
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" class="img-fluid" alt=""/>
                    <a href="#">
                      <div class="mask rgba-white-slight"></div>
                    </a>
                  </div>

                  <div className=" user-image">
                    <img src={Avatar} className="img-avatar" alt="..."/> 
                  </div>

                  <p class="card-text"></p>

                </div>

                    

              </div>





































              <div class="col-md-8 components">
                <div class="container editForm">
                  <h5 class="card-header info-color white-text text-center py-4"><strong>Edit Info</strong></h5>
                  <form noValidate onSubmit={this.onUpdate}>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                          <label for="inputPassword4">Full Name</label>
                          <input onChange={this.onChange} name="fullName" value={this.state.name} type="text" class="form-control" id="inputtext" placeholder="FullName"/>
                      </div>

                      <div class="form-group col-md-6">
                          <label for="inputEmail4">Email</label>
                          <input onChange={this.onChange} name="email" value={this.state.email} type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                      </div>
                        
                    </div>

                    <div class="form-row">
                        <div class="form-group shadow-textarea col-md-6">
                          <label for="exampleFormControlTextarea6">About Me</label>
                          <textarea onChange={this.onChange} name="aboutMe" value={this.state.aboutMe} class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="2" placeholder="let us know how fun you are"></textarea>
                        </div>
                        <div class="form-group shadow-textarea col-md-6">
                          <label for="exampleFormControlTextarea6">Slogan</label>
                          <textarea onChange={this.onChange} name="slogan" value={this.state.slogan} class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="2" placeholder="your adventure motto"></textarea>
                        </div>
                        
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                          <label for="inputCity">My City</label>
                          <input onChange={this.onChange} name="myCity" value={this.state.myCity} type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputState">State/Province</label>
                          <input onChange={this.onChange} name="myStateProvince" value={this.state.myStateProvince} type="text" class="form-control" id="inputStatePprovince"/>
                        </div>
                        <div class="form-group col-md-4">
                          <label for="inputState">Country</label>
                          <input onChange={this.onChange} name="myCountry" value={this.state.myCountry} type="text" class="form-control" id="inputCountry"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-3">
                          <label for="inputCity">Facebook Url:</label>
                          <input onChange={this.onChange} name="facebook" value={this.state.facebook} type="url" class="form-control" id="inputFacebook"/>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState">Instagram Url:</label>
                          <input onChange={this.onChange} name="instagram" value={this.state.instagram} type="url" class="form-control" id="inputInstagram"/>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState">Twitter Url:</label>
                          <input onChange={this.onChange} name="twitter" value={this.state.twitter} type="url" class="form-control" id="inputTwitter"/>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState">Pinterest Url:</label>
                          <input onChange={this.onChange} name="pinterest" value={this.state.pinterest} type="url" class="form-control" id="inputPinterest"/>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState">Youtube url:</label>
                          <input onChange={this.onChange} name="youtube" value={this.state.youtube} type="url" class="form-control" id="inputYoutube"/>
                        </div>
                        <div class="form-group col-md-3">
                          <label for="inputState">RSS Url:</label>
                          <input onChange={this.onChange} name="rss" value={this.state.rss} type="url" class="form-control" id="inputRss"/>
                        </div>
                    </div>
                    <div class="form-check form-group">
                        <input onChange={this.onChange} name="newsletter" value={this.state.subscribed} type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter"/>
                        <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                    </div>
                    <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0">Update</button>
                  </form>


                  <p>By clicking<em> Update</em> you agree to our<a href="#" target="_blank"> terms of service</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  )}
}

















// <section className="guest">
//           <div className="sign-up">
//             <div className="card" style= {{width: "30rem"}} >
//               <div className="card-header">
//                 <h5 className="card-firstName"> I WANT a cook</h5>
//                 <hr></hr>
//               </div>
//               <div className="card-body">
//                 <form noValidate onSubmit={this.onUpdate}>
//                   <div className="form">
                    
//                     <div className="form-group row">
//                       <label  className="col-sm-3 col-form-label">First Name</label>
//                       <div className="col-sm-9
//                       ">
//     onChange={this.onChange}                     <input name="firstName" type="text" className="form-control" id="inputFirstName" value={this.state.firstName} onChange={this.onChange}/>
//                       </div>
//                     </div>

//                     <div className="form-group row">
//                       <label  className="col-sm-3 col-form-label">Last Name</label>
//                       <div className="col-sm-9
//                       ">
//     onChange={this.onChange}                     <input name="lastName" type="text" className="form-control" id="inputlastName" value={this.state.lastName} onChange={this.onChange}/>
//                       </div>
//                     </div>

//                     <div className="form-group row">
//                       <label  className="col-sm-3 col-form-label">Address</label>
//                       <div className="col-sm-9
//                       ">
//                       <textarea name="address" className="form-control" id="inputAddress" rows="3" value={this.state.address} onChange={this.onChange}></textarea>
//                       </div>
//                     </div>
//                     <div className="form-group row">
//                       <label  className="col-sm-3 col-form-label">Phone No.</label>
//                       <div className="col-sm-9
//                       ">
//     onChange={this.onChange}                     <input name="number" className="form-control" id="inputNumber" value={this.state.number} onChange={this.onChange}/>
//                       </div>
//                     </div>

//                     <div className="form-group row">
//                       <label  className="col-sm-3 col-form-label">Email</label>
//                       <div className="col-sm-9
//                       ">
//     onChange={this.onChange}                     <input name="email" type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.onChange}/>
//                       </div>
//                     </div>
                    
//                   </div>

//                   <div className="getCook">  
//                     <button type="submit" className="btn">Update</button>
//                   </div>
//                 </form>

//               </div>
              
//             </div>
//           </div>
//           </section>