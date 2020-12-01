<template>
  <li class="inline-block">
    <router-link :to="to">{{ title }}</router-link>
  </li>
</template>

<script>
export default {
  props: ['title', 'to']
}
</script>

<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>
