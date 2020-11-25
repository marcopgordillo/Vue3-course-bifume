<template>
  <div>
    <div
      @click="close"
      class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
    ></div>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow w-1/3 z-30">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Login</h1>

            <GoogleLogin @close="close" />
            
            <p class="my-3 text-center">Or</p>
            <p 
              class="text-center font-bold text-red-400" 
              v-if="error"
            >
              Wrong user or password!
            </p>
            <form class="p-2 m-2 space-y-4" @submit.prevent="submit">
              <div>
                <label for="email">Email or Username</label>
                <input 
                  type="text" 
                  id="email" 
                  class="rounded shadow p-2 w-full" 
                  placeholder="Enter your email o uesrname"
                  v-model="email"
                  ref="emailRef"
                >
              </div>
              <div>
                <label for="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  class="rounded shadow p-2 w-full" 
                  placeholder="Enter your password"
                  v-model="password"
                >
              </div>
              <div>
                <button 
                  type="submit" 
                  class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>&#x23f3;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '@/utilities/firebase'
import GoogleLogin from './Login/Google'

export default {
  emits: ["close-login-modal"],
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
    }
  },
  methods: {
    async submit() {
      this.isLoading = true
      this.error = null
      try {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        this.email = ''
        this.password = ''
        this.close()
      } catch(error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    },
    close() {
      this.$emit('close-login-modal')
    },
  },
  mounted() {
    this.$refs.emailRef.focus()
  }
}
</script>
