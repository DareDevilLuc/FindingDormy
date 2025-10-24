// frontend/src/stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        age: '',
        location: '',
        gender: '',
        distance: '',
        bio: '',
        avatar: ''
    }),
    actions: {
        loadFromLocalStorage() {
            const saved = localStorage.getItem('userProfile')
            if (saved) Object.assign(this, JSON.parse(saved))
        },
        saveToLocalStorage() {
            localStorage.setItem('userProfile', JSON.stringify(this.$state))
        },
        updateProfile(profileData) {
            Object.assign(this, profileData)
            this.saveToLocalStorage()
        }
    }
})
