<template>
  <li class="inline-block">
    <router-link :to="path">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  props: ['title', 'path']
}
</script>

<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>
