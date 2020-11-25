<template>
  <Header @open-login-modal="isLoginOpen = true" :isLoggedIn="isLoggedIn" />
  <router-view/>
  <teleport to="body">
    <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
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
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: null
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
        this.authUser = user
      } else {
        this.isLoggedIn = false
        this.authUser = null
      }
    })
  }
}
</script>
