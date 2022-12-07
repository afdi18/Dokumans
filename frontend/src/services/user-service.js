import api from "./api";
import TokenService from "./token-service";

class UserService {
  getUsers() {
    return api.get('users/all');
  }

  getUserInfo(id) {
    return api.post('users/id');
  }


  // getUserBoard() {
  //   return axios.get(API_URL + 'user', { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();