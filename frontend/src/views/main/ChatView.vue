<script setup>
import { ref } from 'vue'

// sample placeholder data
const matches = ref([
  { username: 'Match', avatar: 'circle', online: true },
  { username: 'Match 1', avatar: '', online: false },
  { username: 'Match 2', avatar: '', online: false },
  { username: 'Match 3', avatar: '', online: false },
])

const selectedUser = ref(matches.value[0])

const messages = ref([
  { sender: 'Match', content: 'Hi Po' },
  { sender: 'me', content: 'Hello po Match!' },
])

const newMessage = ref('')

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  messages.value.push({ sender: 'me', content: newMessage.value })
  newMessage.value = ''
}
</script>

<template>
  <div
    class="flex h-screen w-screen"
    style="background: linear-gradient(to bottom right, #A9D4EE, #83B8D9)"
  >
    <!-- left side segment -->
    <div
      class="w-1/4 min-w-[280px] bg-[#A9D4EE] bg-opacity-60 backdrop-blur-md flex flex-col p-6 border-r border-white/30"
    >
      <!-- logo -->
      <div class="flex justify-center mb-6">
        <img src="/src/assets/Logo.png" class="w-[300px] h-[230px]" />
      </div>

      <h2 class="text-lg font-semibold text-gray-800 mb-4 text-center">
        Recent Matches
      </h2>

      <!-- Matches List -->
      <div class="space-y-3 overflow-y-auto flex-1">
        <button
          v-for="user in matches"
          :key="user.username"
          @click="selectedUser = user"
          class="w-full flex items-center justify-between px-4 py-3 rounded-lg transition"
          :class="selectedUser.username === user.username
            ? 'bg-[#4B859F] text-white'
            : 'bg-[#8EC4E1] hover:bg-[#6EAED0]'"
        >
          <div class="flex items-center space-x-3">
            <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            <span class="truncate">{{ user.username }}</span>
          </div>
          <img
            v-if="user.avatar"
            :src="user.avatar"
            alt="avatar"
            class="w-8 h-8 rounded-full border-2 border-white"
          />
        </button>
      </div>
    </div>

    <!-- chat part -->
    <div class="flex-1 flex flex-col bg-white/60 backdrop-blur-md p-6">
      <!-- for which is which kachat -->
      <div class="flex items-center space-x-3 border-b border-gray-300 pb-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <div>
          <p class="font-semibold text-gray-900">{{ selectedUser.username }}</p>
          <span
            class="text-xs"
            :class="selectedUser.online ? 'text-green-500' : 'text-gray-400'"
          >
            ● {{ selectedUser.online ? 'Online' : 'Offline' }}
          </span>
        </div>
      </div>

      <!-- messages -->
      <div class="flex-1 overflow-y-auto space-y-3 px-2">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="flex"
          :class="msg.sender === 'me' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[60%] p-3 rounded-2xl"
            :class="msg.sender === 'me'
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-gray-200 text-gray-900 rounded-bl-none'"
          >
            {{ msg.content }}
          </div>
        </div>
      </div>

      <!-- type message here -->
      <div class="mt-4 flex items-center space-x-3">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type a message..."
          class="flex-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          @click="sendMessage"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #b4b4b4;
  border-radius: 10px;
}
</style>
