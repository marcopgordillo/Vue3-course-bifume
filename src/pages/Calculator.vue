<template>
  <div class="container flex w-full mx-auto">
    <div class="mt-10 mx-auto">
      <h1 class="text-2xl my-2 text-center">Calculator</h1>
      <p class="text-3xl text-right mt-10 w-44 h-10 overflow-x-hidden direction-rtl">{{ currentNumber }}</p>
      <div class="h-10">
        <small class="h-5" v-if="selectedOperation">
        {{ prevNumber }} {{ selectedOperation }} {{ currentNumber }}
        </small>
      </div>
      <div class="grid grid-cols-4 gap-1">
        <button
          v-for="(char, index) in chars"
          :key="index"
          @click="pressed(char)" 
          class="p-2 h-10 w-10 border rounded shadow"
        >
          {{ char }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import useWindowEvent from '@/utilities/composition/useWindowEvent'

const charsArray = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/']

export default {
  setup() {
    const chars = ref(charsArray)
    const operations = ['+', '-', '*', '/']
    const validDigits = [...Array(10).keys()].map(d => d.toString())
    const currentNumber = ref('0')
    const prevNumber = ref('')
    const selectedOperation = ref('')

    function appendNumber(value) {
      if (+currentNumber.value === 0) {
        currentNumber.value = ''
      }
      currentNumber.value += value
    }

    function applyOperation(value) {
      calculate()
      prevNumber.value = currentNumber.value
      selectedOperation.value = value
      currentNumber.value = ''
    }

    function sum() {
      currentNumber.value = Number(prevNumber.value) + Number(currentNumber.value)
    }

    function substract() {
      currentNumber.value = Number(prevNumber.value) - Number(currentNumber.value)
    }

    function multiply() {
      currentNumber.value = Number(prevNumber.value) * Number(currentNumber.value)
    }

    function divide() {
      currentNumber.value = Number(prevNumber.value) / Number(currentNumber.value)
    }

    function calculate() {
      switch(selectedOperation.value) {
        case '+':
          sum()
          break;
        case '-':
          substract()
          break;
        case '*':
          multiply()
          break;
        case '/':
          divide()
          break;
      }
    }

    function clear() {
      currentNumber.value = '0'
    }

    function pressed(value) {

      if (value === '=' || value === 'Enter') {
        calculate()
      } else if (operations.includes(value)) {
        applyOperation(value)
      } else if (/c/i.test(value)) {
        clear()
      } else if (validDigits.includes(value)) {
        appendNumber(value)
      }
    }

    const handleKeydown = (e) => pressed(e.key)
    
    useWindowEvent('keydown', handleKeydown)

    return {
      currentNumber,
      chars,
      pressed,
      prevNumber,
      selectedOperation,
    }
  }
}
</script>

<style scoped>
.direction-rtl {
  direction: rtl;
}
</style>

