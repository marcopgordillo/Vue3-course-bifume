<template>
  <div class="container mx-auto">
    <div class="mx-auto">
      <h1 class="text-2xl my-4 text-center">Markdown</h1>
      <section class="flex w-full">
        <article class="w-1/2 border">
          <textarea 
            class="w-full h-full" 
            :value="text" 
            @input="update"
            ref="markdownTextArea"
          ></textarea>
        </article>
        <article class="markdown w-1/2 border bg-gray-100 h-screen" v-html="markedText"></article>
      </section>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import debounce from '@/utilities/mixins/debounce';

export default {
  mixins: [debounce],
  data() {
    return {
      text: '',
    }
  },
  computed: {
    markedText() {
      return marked(this.text)
    }
  },
  methods: {
    update(e) {
      this.debounce(() => this.text = e.target.value, 500)
    },
  },
  mounted() {
    this.$refs.markdownTextArea.focus()
  }
}
</script>

<style>
.markdown h1 {
  @apply text-2xl font-bold;
}
</style>
