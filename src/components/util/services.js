import http from './http-commons';

class StuffDataService {

  // create new user
  create(data) {
    return http.post("/api", data);
  }
  // create experience
  createExperience(data) {
    return http.post("/api/post", data);
  }
  // create experience comments
  createExperienceComment(data) {
    return http.post("/api/post/comment", data);
  }
  // get all posts
  find() {
    return http.get("/");
  }

// this retrieves a single post
  findById(id) {
    return http.get(`/api/${id}`);
  }

  // this retrieves a user
  findMyAccount(id) {
    return http.get(`/api/user/${id}`);
  }

  postLogin(data) {
    return http.post(`/api/user/login`, data);
  }
  
  findOne(id) {
    return http.get(`/edit/${id}`);
  }

  postEdit(id, data) {
    return http.post(`/edit/${id}`, data);
  }

  remove(id) {
    return http.post(`/api/${id}`);
  }

  deleteAll() {
    return http.delete(`/api`);
  }

  findByTitle(title) {
    return http.get(`/api?title=${title}`);
  }
}

export default new StuffDataService();