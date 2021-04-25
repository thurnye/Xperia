import http from './http-commons';

class StuffDataService {

  // create new user
  create(data) {
    return http.post("/api", data);
  }
  // create experience
  createExperience(data) {
    return http.post("/api/experience", data);
  }
  find() {
    return http.get("/");
  }

  findById(id) {
    return http.get(`/api/${id}`);
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