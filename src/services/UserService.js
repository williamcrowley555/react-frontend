import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8082/create-web-service/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  getUserByUserId(userId) {
    return axios.get(USER_API_BASE_URL + "/" + userId);
  }

  createUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  updateUser(user, userId) {
    return axios.put(USER_API_BASE_URL + "/" + userId, user);
  }

  deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL + "/" + userId);
  }
}

export default new UserService();
