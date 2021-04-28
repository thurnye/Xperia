import React from 'react';
import './edit.css'

const editForm = () => {
    return (
            // <!-- Material form register -->
    <div class="container editForm">
        <h5 class="card-header info-color white-text text-center py-4"><strong>Edit Info</strong></h5>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Full Name</label>
                    <input name="fullName" value="" type="text" class="form-control" id="inputtext" placeholder="FullName"/>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input name="email" value="" type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                
            </div>

            <div class="form-row">
                <div class="form-group shadow-textarea col-md-6">
                <label for="exampleFormControlTextarea6">About Me</label>
                <textarea name="aboutMe" value="" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="2" placeholder="let us know how fun you are"></textarea>
                </div>
                <div class="form-group shadow-textarea col-md-6">
                <label for="exampleFormControlTextarea6">Slogan</label>
                <textarea name="slogan" value="" class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="2" placeholder=""></textarea>
                </div>
                
            </div>

            <div class="form-row">
                <div class="form-group col-md-4">
                <label for="inputCity">My City</label>
                <input name="city" value="" type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State/Province</label>
                <input name="state/province" value="" type="text" class="form-control" id="inputCountry"/>
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">Country</label>
                <input name="country" value="" type="text" class="form-control" id="inputCity"/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3">
                <label for="inputCity">Facebook Url:</label>
                <input name="facebook" value="" type="url" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-3">
                <label for="inputState">Instagram Url:</label>
                <input name="Instagram" value="" type="url" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-3">
                <label for="inputState">Twitter Url:</label>
                <input name="twitter" value="" type="url" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-3">
                <label for="inputState">Pinterest Url:</label>
                <input name="pinterest" value="" type="url" class="form-control" id="inputCity"/>
                </div>
            </div>
            {/* <div class="form-group">
                <div class="form-check">
                <input name="" value="" class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div> */}
            

            <div class="form-check form-group">
                <input name="newsletter" value="subscribed" type="checkbox" class="form-check-input" id="materialRegisterFormNewsletter"/>
                <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
            </div>

            {/* <!-- Terms of service -->
            <div class="form-group"> 
                <p>By clicking
                    <em> Update</em> you agree to our
                    <a href="" target="_blank">terms of service</a> 
                </p>
            </div> */}
            <button type="submit" class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0">Update</button>
        </form>


        <p>By clicking
            <em> Update</em> you agree to our
            <a href="#" target="_blank"> terms of service</a>
        </p>
    </div>

    );
}

export default editForm;
