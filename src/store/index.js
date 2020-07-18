import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: true
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
      localStorage.setItem('auth', value)
    }
  },
  actions: {
    setAuth({commit}, value) {
      commit('setAuth', value)
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.auth
    }
  }
})
