export default {
  data() {
    return {
      timeout: null,
    }
  },
  methods: {
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, wait)
    }
  }
}
