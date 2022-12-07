import TokenService from ".token-service";

export default function authHeader() {
    let user = TokenService.getUser();
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }