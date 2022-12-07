import AuthService from '../services/auth-service.js';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      console.log(user);
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          console.log('login sukses');
          return Promise.resolve(user);
        },
        error => {
            commit('loginFailure');
            console.log('login Gagal');
          return Promise.reject(error);
        }
      );
    },

    token({ commit }, accessToken) {
      commit('token', accessToken);
    },

    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },

  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    token(state, accessToken) {
      state.status.loggedIn = true;
      state.user = { ...state.user, accessToken: accessToken };
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
  getters: {
    getIdUser(state){
      return state.user.filter(function(item){
        return 
      })
    }
  }
};