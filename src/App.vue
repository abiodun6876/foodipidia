<template>
  <router-view />

  <br/>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto flex flex-wrap justify-center">
      <!-- Contact Information -->
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Address: +2348062191351</p>
        <p>Email: foodipidia@gmail.com</p>
        <p>Website: <a href="https://foodipidia.netlify.app/" class="text-orange-500">foodipidia.netlify.app</a></p>
      </div>

      <!-- Site Links -->
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
        <router-link
          :to="{ name: 'home' }"
          class="block text-orange-500 hover:text-white mb-2"
        >
          Home
        </router-link>
        <router-link
          :to="{ name: 'byName' }"
          class="block text-orange-500 hover:text-white mb-2"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="block text-orange-500 hover:text-white mb-2"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="block text-orange-500 hover:text-white mb-2"
        >
          Meals By Ingredients
        </router-link>
      </div>

      <!-- Social Media Links -->
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Connect With Us</h2>
        <a href="#" class="block text-orange-500 hover:text-white mb-2">
          Facebook
        </a>
        <a href="#" class="block text-orange-500 hover:text-white mb-2">
          Twitter
        </a>
        <a href="#" class="block text-orange-500 hover:text-white mb-2">
          Instagram
        </a>
      </div>
    </div>
  </footer>
 </template>
 
 <script setup>
 
 </script>
 
 <style scoped>
 </style>