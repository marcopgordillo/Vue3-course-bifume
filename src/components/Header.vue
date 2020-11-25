<template>
  <nav class="flex justify-between items-center w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link to="/"><h2 class="text-3xl font-bold">DC Heros</h2></router-link>
    <ul class="space-x-4">
      <NavLink v-for="(link, index) in links" :key="index" v-bind="link" />
    </ul>
  </nav>
</template>

<script>
import NavLink from './NavLink'

const links = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/heros', title: 'Heros' },
  { path: '/calendar', title: 'Calendar' },
  { path: '/markdown', title: 'Markdown' },
  { path: '/slider', title: 'Slider' },
];

export default {
  components: {
    NavLink
  },
  data() {
    return {
      links,
    }
  }
}
</script>
