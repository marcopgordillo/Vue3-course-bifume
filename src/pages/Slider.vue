<template>
  <div class="mx-auto">
    <div
      class="relative"
      v-for="(color, index) in sliders"
      :key="index"
    >
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          class="absolute w-full h-350"
          :class="color"
        ></div>
      </transition>
    </div>
    <div class="relative w-full h-340">
      <div class="absolute bottom-0 w-full flex justify-center space-x-2">
        <div
          v-for="(slider, index) in sliders"
          :key="index"
          @click="makeActive(index)"
          class="w-4 h-4 rounded-full cursor-pointer shadow-md"
          :class="currentSlide === index ? 'bg-gray-700':'bg-gray-300'"
        ></div>
      </div>
    </div>
    <!-- <div -->
      <!-- class="w-full h-350" -->
      <!-- :class="currentColor" -->
    <!-- > -->
    <!-- </div> -->
    <!-- <div class="my-10 flex w-full"> -->
      <!-- <div class="mx-auto"> -->
        <!-- <transition name="title"> -->
          <!-- <h1 v-if="showTitle">Slider Carousel</h1> -->
        <!-- </transition> -->
        <!-- <button  -->
          <!-- @click="showTitle = !showTitle" -->
          <!-- class="px-2 rounded border" -->
        <!-- > -->
          <!-- Toggle Text -->
        <!-- </button> -->
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: [
        'bg-teal-600',
        'bg-blue-600',
        'bg-yellow-600'
      ],
      showTitle: true,
      interval: null,
    }
  },
  computed: {
    currentColor() {
      return this.sliders[this.currentSlide]
    }
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      ++this.currentSlide
    }, 2000)
  },
  beforeUmount() {
    clearInterval(this.interval)
  },
  watch: {
    currentSlide (newValue) {
      if (newValue === this.sliders.length) {
        this.currentSlide = 0
      }
    }
  }
}
</script>
<style scoped>
.title-enter-active,
.title-leave-active {
  transition: opacity 0.5s ease;
}

.title-enter-from,
.title-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-from {
  transform: translateX(100%);
}
.fade-leave-to {
  transform: translateX(-100%);
}
</style>
