import { ref } from 'vue'

export default function useDebounce() {
  const timeout = ref(null)
  
  return function debounce(func, wait = 1000) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(func, wait)
  }
}
