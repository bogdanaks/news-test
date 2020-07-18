import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
      localStorage.setItem('auth', value)
    }
  },
  actions: {
    checkAuth({commit}, value) {
      console.log(value)
      if(value.username === 'admin' && value.password === '12345') {
        commit('setAuth', true)
      } else {
        this.dispatch('setError')
      }
    },
    setAuth({commit}, value) {
      commit('setAuth', value)
    },
    setError() {
      M.toast({html: 'Username or password incorrect!'})
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.auth
    }
  }
})
