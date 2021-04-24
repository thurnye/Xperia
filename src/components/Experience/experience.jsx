import React from 'react';
import './experience.css'
import LandScape from '../../Public/Image/landscape.jpeg'
import Avatar from '../Avatar/avatar'
import CommentForm from '../Comment/FORM/comment'
import CommentsList from '../Comment/COMMENTSLIST/commentList'
import CommentList from '../Comment/COMMENTSLIST/commentList';

const experience = () => {
    return (
        <React.Fragment>
            <div className="experience">
                <div className="container">
                    <div className="experience-head">
                        <div className="experience-Img">
                            <img src={LandScape} class="card-img" alt="..."/>
                        </div>
                        <div className="experience-head-content">
                            <h5><i>City,Country</i></h5>
                            <p>Title</p>
                            <p><small className="text-mute">Category</small></p>
                        </div>
                    </div>
                    <div className="experience-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non voluptatibus reprehenderit soluta. Iure voluptatibus reiciendis eaque velit perferendis numquam ex alias ea nam magni, exercitationem laudantium officiis omnis maiores. Officiis quaerat necessitatibus molestias quasi quia deleniti iusto, ut laboriosam ipsum harum ex corporis inventore in quae unde vero fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem tenetur sapiente magni sed corrupti eius tempora, ratione explicabo doloribus. Dolorum neque eum impedit illo debitis nisi, officiis in iste, ut suscipit quibusdam labore. Temporibus pariatur, consequatur ex, illum ullam ad aperiam, reprehenderit iure voluptatem deserunt explicabo nostrum sed soluta sapiente blanditiis tempora non tempore officiis! Ab quod sint dolores, voluptatem nemo corrupti, repellendus, nulla impedit quae veniam vel quo.</p>



                        <p><i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellat nam possimus voluptatibus, enim dolor inventore impedit repudiandae facere error nemo cumque tempore doloremque amet provident tenetur laborum repellendus blanditiis!</i></p>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem tenetur sapiente magni sed corrupti eius tempora, ratione explicabo doloribus. Dolorum neque eum impedit illo debitis nisi, officiis in iste, ut suscipit quibusdam labore. Temporibus pariatur, consequatur ex, illum ullam ad aperiam, reprehenderit iure voluptatem deserunt explicabo nostrum sed soluta sapiente blanditiis tempora non tempore officiis! Ab quod sint dolores, voluptatem nemo corrupti, repellendus, nulla impedit quae veniam vel quo.</p>
                        
                        <div className="exp-img">
                            <img src={LandScape} alt="" srcset="" style={{width: "250px", margin: '10px'}}/>
                            <img src={LandScape} alt="" srcset="" style={{width: "250px", margin: '10px'}}/>
                            <img src={LandScape} alt="" srcset="" style={{width: "250px", margin: '10px'}}/>
                            <img src={LandScape} alt="" srcset="" style={{width: "250px", margin: '10px'}}/>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, sint dicta. Saepe, officiis! Quos, ipsum? Nisi maxime obcaecati assumenda quisquam?</p>
                    </div>
                        
                    <hr/>
                    <div className="experience-created">
                        <h4><small className="text-muted">Name</small></h4>
                        <h5><small className="text-muted">April 23, 2021</small></h5>
                    </div>
                    <hr/>
                    <div className="user-experience">
                        <Avatar/>
                        <div className="user-name">
                        <h4><small className="text-muted">Name</small></h4>
                        <h6><small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis atque mollitia nam autem excepturi soluta?</small></h6>
                        </div>
                    </div>
                    <CommentsList/>
                    <hr/>
                    
                    <CommentForm />
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default experience;
