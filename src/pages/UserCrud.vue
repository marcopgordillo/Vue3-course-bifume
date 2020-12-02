<template>
  <div class="flex w-full">
    <div class="mx-auto">
      <div class="mt-10">
        <Create @new-user-added="addUser" />
        <table>
          <thead>
            <tr>
              <th class="border px-4 py-2">ID</th>
              <th class="border px-4 py-2">Avatar</th>
              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Email</th>
              <th class="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user.id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">
                <img class="rounded-full w-12" :src="user.avatar" :alt="user.name">
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <button class="px-2 py-1 bg-red-800 border rounded text-white" @click="destroy(user._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between mt-2">
          <button 
            class="px-3 py-2 border rounded"
            @click="prev"
            :disabled="state.page === 1"
          >
            &lt; Prev
          </button>
          <button 
            class="px-3 py-2 border rounded" 
            @click="next"
            :disabled="state.page === state.totalPages"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'

import axios from '@/plugins/axios'
import Create from '@/components/UserCrud/Create'

export default {
  components: {
    Create
  },
  setup() {
    const state = reactive({
      users: [],
      page: 1,
      totalPages: null
    })

    onMounted(async () => {
      getPage(1)
    })

    async function getPage(page) {
      const { data } = await axios.get(`/users?page=${page}`)
      state.users = data
      state.page = data.page
      state.totalPages = data.total_pages
    }

    async function next() {
      if (state.page < state.totalPages) {
        getPage(++state.page)
      }
    }

    async function prev() {
      if (state.page > 1) {
        getPage(--state.page)
      }
    }

    function addUser(data) {
      state.users.push(data)
    }

    async function destroy(id) {
      await axios.delete(`/users/${id}`)
      state.users = state.users.filter(user => user._id !== id)
    }

    return {
      state,
      next,
      prev,
      addUser,
      destroy
    }

  }
}
</script>

<style scoped>
button:disabled {
  @apply bg-gray-100;
}
button:enabled {
  @apply hover:shadow;
}
</style>
