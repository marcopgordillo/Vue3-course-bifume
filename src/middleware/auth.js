export default function (next, store) {
  if (!store.state.isLoggedIn) {
    store.commit('setIsLoginOpen', false)
    next('/')
  }
}
