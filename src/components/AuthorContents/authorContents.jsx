import * as React from 'react';
import Masonry from 'react-masonry-component';
import {Link } from 'react-router-dom';
// import Italy from '../../Public/Image/italy.jpeg'
import { $ }  from 'react-jquery-plugin'
import './authorContents.css'




const userXperience = (props) => {
    $(window).onload = () => {
        const $grid = $('.grid').masonry({
            itemSelector: '.item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
          });
          
          // layout Masonry after each image loads
          $grid.imagesLoaded().progress( function() {
            $grid.masonry();
          });  
    }
    return (
      <React.Fragment> 
        <div class="masonry">
          <div class="masonry"></div>
          <div class="item card">
            <img src="https://mdbootstrap.com/img/Photos/Others/food3.jpg"   style= {{width: "150px"}}alt=""/>
            <div class="place">
              <div className="preview-info">
                 <Link to={{
                   pathname: `/post`,
                  //  state: props.eid    //store the user experience in state
                   }} className="btn"> 
                  <p><small className="text-mute"><i>Marano di Napoli</i></small></p>
                  <h5><small className="text-mute">Italy</small></h5>
              </Link>
              </div>
              
          </div>
          </div>
          
        </div>   
        <div className="foot components">
          <p className="mb-0">© 2021 Tamunotonye Daniel, All Rights Reserved</p>
        </div>
      </React.Fragment>
    );
  
}

export default userXperience;
