import React, { Component } from 'react'
import './commentForm.css'

export default class Form extends Component {
    state = {
      comment: ""
    };


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    onSubmit = async () => {
       
      }

    render() {
      return(
        <React.Fragment>
          <div className="comment-form">
            <h4>POST A COMMENT</h4>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form">
                {/* textArea */}
                <div className="form-group row">
                  <div className="col-sm-9
                  ">
                  <textarea 
                  name="comment" 
                  className="form-control" 
                  id="inputAddress" 
                  rows="3" 
                  value={this.state.comment} 
                  onChange={this.onChange}></textarea>
                  </div>
                </div>
              </div>
              <div className="getComment">  
                <button type="submit" className="btn explore">SUBMIT</button>
              </div>
            </form>
          </div>
          <hr/>
        </React.Fragment>
      )
    }
}  
