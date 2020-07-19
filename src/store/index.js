import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: localStorage.getItem('auth') || 'false'
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value
      localStorage.setItem('auth', value)
    }
  },
  actions: {
    checkAuth({commit}, value) {    
      return new Promise((resolve, reject) => {
        if(value.username === 'admin' && value.password === '12345') {
          resolve()
        } else {
          this.dispatch('setError')
        }
      })
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
