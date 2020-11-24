<template>
  <nav class="flex justify-between items-center w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link to="/"><h2 class="text-3xl font-bold">DC Heros</h2></router-link>
    <ul class="space-x-4">
      <li class="inline-block">
        <router-link to="/">Home</router-link>
      </li>
      <li class="inline-block">
        <router-link to="/about">About</router-link>
      </li>
      <li class="inline-block">
        <router-link to="/heros">Heros</router-link>
      </li>
      <li class="inline-block">
        <router-link to="/calendar">Calendar</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>
