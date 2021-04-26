import React, { Component } from 'react';
import NavBar from '../../components/Nav/navbar';
import './newExp.css'
import services from '../../components/util/services'

class newExp extends Component {
    state = {
        title: '',
        city: '',
        country: '',
        tags: [],
        images: [],
    };
  
  
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log([e.target.name], e.target.value )
    }
      
    onSubmit = async (e) => {
        e.preventDefault();
        const newExp = {
            userId: this.props.userId,
            title: this.state.title,
            city: this.state.city,
            country: this.state.country,
            tags: [],
            images: []
        }
        console.log(newExp)
        services.createExperience(newExp)
        .then(res => {
          console.log(res)
        //   this.props.history.push(`/`)
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
                                    value="Resturants" />
                                    <label class="form-check-label" for="inlineCheckbox3">Resturants</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="night life" 
                                    id="inlineCheckbox3"
                                    value="Night Life" />
                                    <label class="form-check-label" for="inlineCheckbox3">Night Life</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="camping" 
                                    id="inlineCheckbox3"
                                    value="Camping" />
                                    <label class="form-check-label" for="inlineCheckbox3">Camping</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input 
                                    class="form-check-input" 
                                    onChange={this.onChange} 
                                    type="checkbox"
                                    name="Others" 
                                    id="inlineCheckbox3"
                                    value="Others" />
                                    <label class="form-check-label" for="inlineCheckbox3">Others</label>
                                </div>
                            </div>

                            <span class="input-group-text "><i>Tell Us Your Experience</i></span>
                            <div class="input-group mb-3">
                                <textarea class="form-control exp-story"
                                name="experience" 
                                aria-label="With textarea"
                                // value={this.state.comment} 
                                onChange={this.onChange}></textarea>
                            </div>
                            <div class="input-group mb-3">
                                <input 
                                class="form-control" 
                                type="file" 
                                id="formFileMultiple" 
                                multiple 
                                style={{height: 'auto'}}/>
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
