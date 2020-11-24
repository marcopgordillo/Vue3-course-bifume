<template>
  <div class="mt-10 w-1/2 mx-auto">
    <h1 class="text-2xl my-2 text-center">Vue Calendar</h1>
    <div class="mx-2 flex justify-between">
      <h2 class="font-bold">{{ currentMonth }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
    </div>
    <section class="flex">
      <p 
        class="w-10 h-10 text-center w-1/7" 
        v-for="day in days" 
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap my-2">
      <p 
        class="text-center w-1/7" 
        v-for="num in startDay" 
        :key="num"
      >
      </p>
      <p 
        class="text-center w-1/7" 
        :class="classCurrentDate(num)"
        v-for="num in daysInMonth" 
        :key="num"
      >
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between my-4">
      <button 
        class="px-2 border rounded"
        @click="prev"
      >
        Prev
      </button>
      <button 
        class="px-2 border rounded"
        @click="next"
      >
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  computed: {
    currentMonth: {
      get() {
        return this.currentDate.toLocaleString('default', { month: 'long' });
      },
      set(value) {
        this.currentDate = new Date(this.currentDate.setMonth(this.currentDate.getMonth() + value));
      }
    },
    currentYear() {
      return this.currentDate.getFullYear();
    },
    daysInMonth() {
      return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
    },
  },
  methods: {
    prev() {
      this.currentMonth = -1;
    },
    next() {
      this.currentMonth = 1;
    },
    classCurrentDate(num) {
      const calendarFullDate = new Date(this.currentYear, this.currentDate.getMonth(), num).toDateString();
      const currentFullDate = new Date().toDateString();

      return calendarFullDate === currentFullDate ? 'text-yellow-600 font-bold':'';
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

