<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import for navigation

// reactive variables to store input values
const username = ref('')
const password = ref('')

const router = useRouter() 

const handleLogin = async () => {
   
    if (!username.value || !password.value) {
        alert('Please enter both username and password.')
        return
    }

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })

        const data = await response.json()

        if (response.ok) {
            console.log('Login successful:', data)
            
            // 3. Handle successful login
            // Might save the user data/token here (e.g., in local storage or a store)
            if (data.user && data.user.id) { 
              localStorage.setItem('userId', data.user.id);
            }
            router.push('/main/home')

        } else {
            alert(data.error || 'Login failed')
        }

    } catch (err) {
        console.error('Error connecting to server:', err)
        alert('Could not connect to server. Check backend server status.')
    }
}
</script>

<template>
  <div class="flex flex-col items-center mt-6 space-y-6">
    <input
      v-model="username"
      type="text"
      placeholder="Username"
      class="w-[300px] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#84CDEE]"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-[300px] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#84CDEE]"
    />

    <button
      @click="handleLogin"
      class="w-[300px] bg-[#84CDEE] text-white font-semibold py-3 rounded-full hover:bg-[#B6E6F5] transition-colors duration-200"
    >
      Log In
    </button>
  </div>
</template>
