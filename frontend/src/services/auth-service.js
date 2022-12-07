import axios from "axios";
import TokenService from "./token-service";

class AuthService {
  async login(user) {
    const response = await axios.post(process.env.VUE_APP_API_BASE_URL+"users/login", {
      uname: user.uname,
      pass: user.pass,
    });
    // console.log(response);
    if (response.data.accessToken) {
      TokenService.setUser(response.data);
    }
    return response.data;
  }

  async refreshToken() {
    await axios.get(process.env.VUE_APP_API_BASE_URL+"users/token")
    .then(function (response) {
      console.log(response.data.accessToken);
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    // console.log(response);
    return response.data;
  }

  async logout() {
    await axios
      .delete(process.env.VUE_APP_API_BASE_URL+"users/logout")
      .then(function (response) {
        if (response.status === 200) TokenService.removeUser();
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

export default new AuthService();
