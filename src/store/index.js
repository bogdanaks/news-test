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
      if(value.username === 'admin' && value.password === '12345') {
        commit('setAuth', value)
      } else {
        this.dispatch('setError')
      }
    },
    setError() {
      // commit('setError')
      M.toast({html: 'Username or password incorrect!'})
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.auth
    }
  }
})
