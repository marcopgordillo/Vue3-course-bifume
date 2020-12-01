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
            :class="{'text-right': chat.userId === state.userId}"
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
import { onMounted, reactive } from 'vue'
import firebase, { chatsRef } from '@/utilities/firebase'

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: '',
      userId: null,
    })

    function addMessage() {
      const newChat =chatsRef.push()
      newChat.set({
        userId: state.userId,
        message: state.message
      })

      state.message = ''
    }

    onMounted(() => {
      chatsRef.on('child_added', (snapshot) => {
        state.userId = firebase.auth().currentUser.uid
        state.chats.push({ key: snapshot.key, ...snapshot.val() })
      })
    })

    return {
      state,
      addMessage,
    }
  }
}
</script>
