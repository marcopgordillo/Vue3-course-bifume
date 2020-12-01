import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      authUser: null,
      isLoginOpen: false,
    }
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload
    },
    setAuthUser(state, payload) {
      state.authUser = payload
    },
    setIsLoginOpen(state, payload) {
      state.isLoginOpen = payload
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store
