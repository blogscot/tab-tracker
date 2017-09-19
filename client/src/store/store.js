import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      // FIXME
      // This implementation makes the user logged in
      // as soon as they register!
      state.isUserLoggedIn = !!token
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    }
  }
})
