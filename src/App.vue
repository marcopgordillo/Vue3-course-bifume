<template>
  <Header />
  <router-view/>
  <teleport to="body">
    <LoginModal />
  </teleport>
</template>

<script>
import Header from '@/components/Header'
import LoginModal from '@/components/LoginModal'
import firebase from '@/utilities/firebase'

export default {
  components: {
    Header,
    LoginModal
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true)
        this.$store.commit('setAuthUser', user)
      } else {
        this.$store.commit('setIsLoggedIn', false)
        this.$store.commit('setAuthUser', null)
      }
    })
  }
}
</script>
