<template>
  <Header />
  <div class="w-full flex">
    <Calendar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Calendar from '@/components/Calendar'

export default {
  name: 'App',
  components: {
    Header,
    Calendar
  },
  data() {
    return {
      title: 'Vue 3 course'
    }
  }
}
</script>
