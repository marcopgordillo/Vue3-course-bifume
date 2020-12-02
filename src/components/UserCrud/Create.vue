<template>
  <button class="px-2 py-1 border rounded my-2" @click="isModalOpen = true">Add User</button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title>
        <h1 class="text-2xl">Add New User</h1>
      </template>
      <form @submit.prevent="submit">
        <div class="p-2">
          <label for="name">Name</label>
          <input class="w-full p-2 rounded border" id="name" v-model="state.form.name" type="text" placeholder="User Name">
        </div>
        <div class="p-2">
          <label for="name">Email</label>
          <input class="w-full p-2 rounded border" id="email" v-model="state.form.email" type="email" placeholder="User Email">
        </div>
        <div class="p-2">
          <label for="name">Avatar Url</label>
          <input class="w-full p-2 rounded border" id="avatar" v-model="state.form.avatar" type="url" placeholder="User Avatar">
        </div>
        <div class="p-2">
          <button class="w-full p-2 rounded border hover:bg-gray-300" type="submit">Create</button>
        </div>
      </form>
    </Modal>
  </teleport>
</template>

<script>
import { ref, reactive } from 'vue'

import axios from '@/plugins/axios'
import Modal from '@/components/Modal'

export default {
  emits: ['new-user-added'],
  components: {
    Modal
  },
  setup(_, { emit }) {
    const isModalOpen = ref(false)

    const state = reactive({
      form: {
        name: '',
        email: '',
        avatar: '',
      },
    })

    async function submit() {
      const { data } = await axios.post('/users', state.form)
      emit('new-user-added', data)
      clearForm()
      isModalOpen.value = false
    }

    function clearForm() {
      state.form.name = ''
      state.form.email = ''
      state.form.avatar = ''
    }

    return { isModalOpen, state, submit }
  }
}
</script>
