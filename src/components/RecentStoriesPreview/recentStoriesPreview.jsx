import React from 'react';
import './recentStories.css'
import PreviewImg from '../../Public/Image/preview.jpeg'
import ItalyImg from '../../Public/Image/italy.jpeg'
import ItalyBkImg from '../../Public/Image/italytravelbooks.jpeg'

const recentStoriesPreview = () => {
    return (
        <React.Fragment>
            <div className="story-preview ">
                <div className="preview-head">
                    <div className="preview-title">
                        <h4>RECENT STORIES FROM</h4>
                        <h6>DIFFERENT CITIES</h6>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora ipsa, tenetur explicabo sint ut molestias saepe nulla reiciendis, facilis distinctio, earum cum magnam porro! Recusandae impedit voluptas eaque.</p>
                    </div>
                </div>
                <div class=" mb-3">
                    <div class="row g-0">
                        <div class="col-md-6 first-part">
                            <div className="container">
                                <div className="card">
                                <div class="jumbotron jumbotron-fluid">
                                <img src= {PreviewImg} class="card-img-top" alt="..."/>
                            </div>
                            <div className="preview-info">
                                    <h6>INDIA</h6>
                                    <h6>7 PERFECT DAY TRIPS</h6>
                                        <p><small class="text-muted">WORLD</small></p>
                            </div>
                            <div className="preview-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla voluptatum mollitia hic exercitationem vel amet error ex voluptates natus tenetur pariatur fugiat incidunt omnis, nam expedita aut quo.</p>
                                <div className="preview-keep-reading">
                                    <a href="#">KEEP READING...</a>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 second-part">
                            <div className="row g-0">
                                <div class="col-md-6 third-part">
                                    <div className="container">
                                        <div class="card" style={{width: '18rem;'}}>
                                            <img src={ItalyImg} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <div className="preview-info">
                                                    <h6>Marano di Napoli</h6>
                                                    <h6>BEAUTIFUL ITALY</h6>
                                                    <p><small class="text-muted">TRAVEL GUIDES</small></p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="card" style={{width: '18rem;'}}>
                                            <img src={ItalyBkImg} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <div className="preview-info">
                                                    <h6>Italy</h6>
                                                    <h6>TRAVEL BOOKS</h6>
                                                    <p><small class="text-muted">TRAVEL GUIDES</small></p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                               
                                </div>
                                <div class="col-md-6 fourth-part">
                                    <div class="card">
                                        <div class="card-body">
                                            <div className="preview-list">
                                                <a href="#">46 AMAZING TRAVEL PICTURES</a>
                                                <p><small class="text-muted">VACATIONS</small></p>
                                                <hr></hr>

                                            </div>
                                            <div className="preview-list">
                                                <a href="#">7 GREAT BOOKS YOU MUST READ</a>
                                                <p><small class="text-muted">VACATIONS</small></p>
                                                <hr></hr>

                                            </div>
                                            <div className="preview-list">
                                                <a href="#">PEOPLE, NATURE, & EVERYDAY LIFE</a>
                                                <p><small class="text-muted">VACATIONS</small></p>
                                                <hr></hr>

                                            </div>
                                            <div className="preview-list">
                                                <a href="#">WHAT TO EAT FOR BREAKFAST</a>
                                                <p><small class="text-muted">VACATIONS</small></p>
                                                <hr></hr>

                                            </div>
                                            <div className="preview-list">
                                                <a href="#">THE BEST CITIES IN EUROPE</a>
                                                <p><small class="text-muted">VACATIONS</small></p>
                                                <hr></hr>

                                            </div>
                                            <div className="preview-list">
                                                <a href="#">THE MOST BEAUTIFUL RIVER CITIES</a>
                                                <p><small class="text-muted">VACATIONS</small></p>

                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default recentStoriesPreview;
