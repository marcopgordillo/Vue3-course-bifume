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
        <input 
          class="border rounded" 
          type="text" 
          v-model.lazy.trim="newHero"
          ref="newHeroRef"
        >
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
import { ref, onMounted, computed } from 'vue'

const herosData = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'Superman' },
  { id: 3, name: 'Wonder Woman' },
  { id: 4, name: 'Green Lantern' },
  { id: 5, name: 'Black Panter' },
]

export default {
  setup() {
    const newHeroRef = ref('');
    const newHero = ref('');
    const heros = ref(herosData);

    function saveHero() {
      if (newHero.value !== '') {
        heros.value.unshift({id: Math.random(), name: newHero.value })
        newHero.value = ''
      }
    }

    function remove(index) {
      heros.value = heros.value.filter((hero, i) => i !== index)
    }

    const isDisabled = computed({
      get: () => newHero.value === ''
    })

    const herosCount = computed({
      get: () => heros.value.length
    })

    onMounted(() => {
      newHeroRef.value.focus()
    })

    return {
      newHero,
      heros,
      saveHero,
      remove,
      newHeroRef,
      isDisabled,
      herosCount
    }
  },
}
</script>
