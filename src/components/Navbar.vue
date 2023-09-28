<template>
    <header class="bg-white shadow">
      <!-- Mobile Hamburger Menu (Hidden by default) -->
      <div class="md:hidden flex justify-between items-center p-4">
        <button @click="toggleMenu" class="text-orange-500 font-bold">
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
  
      <!-- Mobile Navigation Menu (Hidden by default, shown when isMenuOpen is true) -->
      <nav class="md:hidden" v-if="isMenuOpen">
        <router-link
          :to="{ name: 'home' }"
          class="block px-4 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          <h1 class="font-bold fw-100px">Foodipidia</h1>
        </router-link>
        <router-link
          :to="{ name: 'byName' }"
          class="block px-4 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="block px-4 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'ingredients' }"
          class="block px-4 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-white"
        >
          Meals By Ingredients
        </router-link>
      </nav>
  
      <!-- Desktop Navigation Menu (Hidden on mobile) -->
      <nav class="hidden md:flex justify-between items-center h-16 px-5">
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center px-2 text-orange-500 font-bold"
        >
        <h1 class="font-bold fw-100px">Foodipidia</h1>
        </router-link>
        <div class="flex items-center gap-4">
          <router-link
            :to="{ name: 'byName' }"
            class="inline-flex items-center transition-colors hover:bg-orange-500 hover:text-white"
          >
            Search Meals
          </router-link>
          <router-link
            :to="{ name: 'byLetter' }"
            class="inline-flex items-center transition-colors hover:bg-orange-500 hover:text-white"
          >
            Meals By Letter
          </router-link>
          <router-link
            :to="{ name: 'ingredients' }"
            class="inline-flex items-center transition-colors hover:bg-orange-500 hover:text-white"
          >
            Meals By Ingredients
          </router-link>
        </div>
      </nav>
  <br/>
       <!-- Banner with cover image and video -->
  <div class="relative h-48 overflow-hidden">
    <!-- Add your cover image here -->
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/001/311/219/small_2x/abstract-orange-and-yellow-polygon-banner-free-vector.jpg"
      alt="Banner"
      class="w-full h-full object-cover"
    />
    <!-- Video container (hidden by default) -->
    <div
      v-for="(video, index) in videos"
      :key="index"
      :class="{ 'hidden': currentVideoIndex !== index }"
      class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70"
    >
      <!-- Video iframe -->
      <iframe
        :src="video.url"
        frameborder="0"
        allowfullscreen
        class="w-full h-full"
        allow="autoplay"
        autoplay
        style="margin: 0; padding: 0;"
      ></iframe>
    </div>
  </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      videos: [
        { url: '/banner1.mp4' }, // Assuming video1.mp4 is in the public folder
        { url: '/banner2.mp4' }, // Assuming video2.mp4 is in the public folder
        { url: '/banner3.mp4' }, // Assuming video3.mp4 is in the public folder
        // Add more video URLs as needed
      ],
      currentVideoIndex: 0, // Index of the currently displayed video
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    switchToNextVideo() {
      this.currentVideoIndex = (this.currentVideoIndex + 1) % this.videos.length;
    },
  },
  // Auto-switch to the next video every 5 seconds
  created() {
    setInterval(this.switchToNextVideo, 5000);
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>





