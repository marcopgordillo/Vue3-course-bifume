<template>
  <nav class="flex justify-between items-center w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link to="/"><h2 class="text-3xl font-bold">DC Heros</h2></router-link>
    <ul class="space-x-4">
      <NavLink v-for="(link, index) in links" :key="index" v-bind="link" />
      <li class="inline-block">
        <button 
          v-if="!isLoggedIn"
          @click="openLogin"
          class="mx-2"
        >
          Login
        </button>
        <button 
          v-else
          @click="logout"
          class="mx-2"
        >
          Logout
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from './NavLink'
import firebase from '@/utilities/firebase'

const links = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/heros', title: 'Heros' },
  { to: '/calendar', title: 'Calendar' },
  { to: '/markdown', title: 'Markdown' },
  { to: '/slider', title: 'Slider' },
  { to: '/calculator', title: 'Calculator' },
  { to: '/modal', title: 'Modal' },
  { to: '/chat', title: 'Chat' },
  { to: '/user-crud', title: 'User Crud' },
  { to: '/tensorflow', title: 'Tensorflow' },
];

export default {
  emits: ['open-login-modal'],
  components: {
    NavLink
  },
  data() {
    return {
      links,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
    },
    openLogin() {
      this.$store.commit('setIsLoginOpen', true)
    }
  }
}
</script>
