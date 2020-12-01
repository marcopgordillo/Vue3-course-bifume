<template>
  <div class="flex flex-wrap w-full">
    <div class="mx-auto">
      <h1 class="text-2xl my-5">Reusable Modal</h1>
      <Modal v-if="isModalOpen" @close="isModalOpen = false">
        <template #title>
          <h1 class="text-2xl text-red-500">Red Modal</h1>
        </template>
        <p>This is the body</p>
      </Modal>
      <button 
        @click="isModalOpen = true"
        class="border rounded px-4 py-2 mx-4 bg-blue-500 text-white"
      >
        Open Modal
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Modal from '@/components/Modal'

export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false)

    return {
      isModalOpen,
    }
  }
}
</script>
