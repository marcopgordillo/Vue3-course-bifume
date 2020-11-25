<template>
  <div class="container mx-auto">
    <div class="w-1/2 mx-auto mt-10">
      <h1 class="text-2xl my-2 text-center">DC Heros {{ herosCount }}</h1>
      <ul>
        <li 
          class="flex justify-between"
          v-for="(hero, index) in heros" 
          :key="hero.id"
        >
          <div>
            {{ index + 1 }} {{ hero.name }} 
          </div>
          <button @click="remove(index)">&times;</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="saveHero">
        <input class="border rounded" type="text" v-model.lazy.trim="newHero">
        <button 
          class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white ml-2 px-2"
          type="submit" 
          :disabled="isDisabled"
        >
          Add Hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
const heros = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'Superman' },
  { id: 3, name: 'Wonder Woman' },
  { id: 4, name: 'Green Lantern' },
  { id: 5, name: 'Black Panter' },
]

export default {
  data() {
    return {
      newHero: '',
      heros: heros
    }
  },
  computed: {
    isDisabled() {
      return this.newHero === ''
    },
    herosCount() {
      return this.heros.length
    }
  },
  methods: {
    saveHero() {
      if (this.newHero !== '') {
        this.heros.push({id: Math.random(), name: this.newHero })
        this.newHero = ''
      }
    },
    remove(index) {
      this.heros = this.heros.filter((hero, i) => i !== index)
    }
  }
}
</script>
