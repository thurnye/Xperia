import React, { Component } from 'react';
import MultipleFile from '../../components/FileUpload/Multiple/multipleFileUpload'
import './newPost.css'
import services from '../../components/util/services'

class newExp extends Component {
    state = {
        title: '',
        city: '',
        country: '',
        story: '',
        tags: [],
        images: [],
    };
  
  
    onChange = (e) => {
        // current array of tags
        const tags = this.state.tags
        let index
        if (e.target.checked) {
            // add the value of the checkbox to tags array
            tags.push(e.target.value)
        } else {
            // or remove the value from the unchecked checkbox from the array
            index = tags.indexOf(e.target.value)
            tags.splice(index, 1)
        }
        // update the state with the new array of tags
        // this.setState({ tags: tags })
        this.setState({ [e.target.name]: e.target.value, tags: tags  });
    }
      
    onSubmit = async (e) => {
        e.preventDefault();
        
        console.log(this.state.tags)
        const newExp = {
            userId: this.props.location.state,
            title: this.state.title,
            city: this.state.city,
            country: this.state.country,
            story: this.state.story,
            tags: this.state.tags,
            images: this.state.images
        }
        console.log(newExp)
        services.createExperience(newExp)
        .then(res => {
          console.log(res)
          this.props.history.push(`/myaccount`)
        })
        .catch(e => {
          console.log(e);
        });
    }

    render() {
        return (
            <React.Fragment>
                {/* <NavBar /> */}
                <div className="container newExp"> 
            
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">Title</span>
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="give your trip a title...."
                                name="title" 
                                aria-label="title" 
                                aria-describedby="basic-addon1" 
                                // value={this.state.comment} 
                                onChange={this.onChange}/>
                            </div>

                            <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">City</span>
                                <input 
                                type="text" 
                                class="form-control" 
                                placeholder="what city?"
                                name="city" 
                                aria-label="trip-city" 
                                aria-describedby="basic-addon2" 
                                // value={this.state.comment} 
                                onChange={this.onChange}/>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon3">Country</span>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="basic-url"
                                name="country" 
                                aria-describedby="basic-addon3" 
                                // value={this.state.comment} 
                                onChange={this.onChange}/>
                            </div>

                            <label for="exampleFormControlInput1" class="form-label">
                            <span class="input-group-text" id="basic-addon2"><i>Tag Your Experience</i></span>
                                </label>
                            <div class="input-group mb-3">
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="low budget" 
                                    id="inlineCheckbox1"
                                    value="Low Budget"/>
                                    <label class="form-check-label" for="inlineCheckbox1">Low Budgets</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="beaches" 
                                    id="inlineCheckbox2"
                                    value="Beaches"/>
                                    <label class="form-check-label" for="inlineCheckbox2">Beaches</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="animal friendly" 
                                    id="inlineCheckbox3"
                                    value="Animal Friendly" />
                                    <label class="form-check-label" for="inlineCheckbox3">Animal Friendly</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="resturants" 
                                    id="inlineCheckbox3"
                                    value="Resturants"/>
                                    <label class="form-check-label" for="inlineCheckbox4">Resturants</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="night life" 
                                    id="inlineCheckbox3"
                                    value="Night Life" />
                                    <label class="form-check-label" for="inlineCheckbox5">Night Life</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="camping" 
                                    id="inlineCheckbox3"
                                    value="Camping" />
                                    <label class="form-check-label" for="inlineCheckbox6">Camping</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="Others" 
                                    id="inlineCheckbox3"
                                    value="Others" />
                                    <label class="form-check-label" for="inlineCheckbox7">Others</label>
                                </div>
                            </div>

                            <span class="input-group-text "><i>Tell Us Your Experience</i></span>
                            <div class="input-group mb-3">
                                <textarea class="form-control exp-story"
                                name="story" 
                                aria-label="With textarea"
                                // value={this.state.comment} 
                                onChange={this.onChange}></textarea>
                            </div>
                            <div class="input-group mb-3 dragndrop">
                                <MultipleFile setUploadInState={this.state.images} {...this.props}/>
                            </div>
                        </div>
                        <div class="input-group-submit mb-3">
                        <button type="submit" className="btn explore">SUBMIT</button>
                        </div>
                    </form> 
                    
                </div>
            </React.Fragment>
        );
    }
}

export default newExp;
