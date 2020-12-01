<template>
  <section class="flex w-full">
    <div class="mx-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div
            v-for="chat in state.chats"
            :key="chat.id"
            class="w-full"
            :class="{'text-right': chat.userId === userId}"
          >
            {{ chat.message}}
          </div>
        </div>
        <div class="h-8 p-2">
          <input 
            v-model="state.message" 
            @keydown.enter="addMessage"
            placeholder="Start Typing..."
            class="p-1 border rounded shadow"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'

import { chatsRef } from '@/utilities/firebase'

export default {
  setup() {
    const store = useStore()

    const state = reactive({
      chats: [],
      message: '',
    })

    const userId = computed(() => store.state.authUser.uid)

    function addMessage() {
      const newChat =chatsRef.push()
      newChat.set({
        userId: userId,
        message: state.message
      })

      state.message = ''
    }

    onMounted(() => {
      chatsRef.on('child_added', (snapshot) => {
        state.chats.push({ key: snapshot.key, ...snapshot.val() })
      })
    })

    return {
      state,
      addMessage,
      userId,
    }
  }
}
</script>
