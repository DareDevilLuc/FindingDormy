<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const profile = ref({
 name: "",
 age: "",
 location: "",
 gender: "",
 distance: "",
 avatar: "",
});

onMounted(async () => {
  const userId = localStorage.getItem("user_id"); 
    if (!userId) {
        router.push("/auth/login"); 
        return;
    }
  
    try {
      
        const response = await fetch(`http://localhost:3000/api/profiles/${userId}`);

        if (response.ok) {
            const result = await response.json();
            const fetchedProfile = result.profile; 
          
            profile.value = {
               
                name: fetchedProfile.name || fetchedProfile.username || "N/A", 
                age: fetchedProfile.age || "—",
                location: fetchedProfile.location || "—",
                gender: fetchedProfile.gender || "—",
                distance: profile.value.distance, 
                avatar: fetchedProfile.picture_url || "", 
            };

        } else if (response.status === 404) {
             console.log("Profile data not complete. Showing default placeholders.");
             
        } else {
            console.error("Server Error:", response.status);
        }
    } catch (error) {
        console.error("Network Error:", error);
    }
});

const goToEdit = () => {
   router.push("/profile/editprofile");
};
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center text-center py-16 px-20 space-y-14"
  >
    <!-- Header -->
    <div class="flex items-center justify-between w-full px-20">
      <h2 class="text-4xl font-bold text-gray-900">User Profile</h2>
      <i class="fa-regular fa-user text-gray-600 text-3xl"></i>
    </div>

    <!-- Top Info -->
    <div class="flex items-center justify-between w-full px-32">
      <div class="flex items-center gap-10">
        <div
          class="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden"
        >
          <span v-if="!profile.avatar" class="text-gray-500 text-lg">Photo</span>
          <img
            v-else
            :src="profile.avatar"
            alt="Profile"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="text-left">
          <h3 class="text-3xl font-semibold text-gray-900">
            {{ profile.name || "No name added" }}
          </h3>
          <p class="text-gray-700 text-xl">{{ profile.age || "—" }}</p>
          <p class="text-gray-700 text-xl">{{ profile.location || "—" }}</p>
        </div>
      </div>

      <div class="text-right text-gray-700 text-xl">
        <p>{{ profile.gender || "—" }}</p>
        <p>{{ profile.distance || "—" }}</p>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex flex-col gap-8 w-1/2 max-w-3xl">
      <button
        @click="goToEdit"
        class="bg-white rounded-full py-4 text-xl font-semibold shadow-md hover:bg-gray-50 transition"
      >
        Edit Profile
      </button>
      <button
        class="bg-white rounded-full py-4 text-xl font-semibold shadow-md hover:bg-gray-50 transition"
      >
        Set Preferences
      </button>
    </div>

    <!-- Peer Reviews -->
    <div class="w-full mt-10">
      <h3 class="text-3xl font-bold text-gray-800 mb-4">Peer Reviews</h3>
      <div class="text-gray-500 italic text-lg">to be coming...</div>
    </div>
  </div>
</template>
