<template>
  <router-view />


  <br/>

<h1 class="text-5xl font-bold mb-4 bg-orange-500">Verified Sellers</h1>
  <div class="flex justify-center items-center py-8">
    <!-- Seller Profiles -->
    <div v-for="seller in sellers" :key="seller.id" class="flex items-center mb-4">
      <!-- Round Profile Image -->
      <div class="w-16 h-16 bg-blue-500 rounded-full flex-shrink-0 overflow-hidden">
        <img
          :src="seller.profilePicture"
          alt="Seller Profile"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Seller Details -->
      <div class="ml-4">
        <h2 class="text-lg font-semibold">{{ seller.name }}</h2>
        <p class="text-gray-600">{{ seller.address }}</p>
        <p class="text-gray-600">{{ seller.contacts }}</p>
        <a :href="seller.whatsappLink" class="text-blue-500 hover:underline" target="_blank">WhatsApp</a>
      </div>
    </div>
  </div>







  <br/>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto flex flex-wrap justify-center">
      <!-- Contact Information -->
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Address: +2348168766206</p>
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
 

 <script>
export default {
  data() {
    return {
      sellers: [
        {
          id: 1,
          name: 'Bs Treat cake & more',
          address: 'Abuja,Nigeria',
          contacts: 'Email: blessing@gmail.com, Phone: +234 817 283 0886',
          whatsappLink: 'https://chat.whatsapp.com/IfQzSWlgU0t7f89bzVAYcX',
          profilePicture: 'https://pps.whatsapp.net/v/t61.24694-24/375594603_118257204709371_3821099473794452196_n.jpg?ccb=11-4&oh=01_AdTS1_rUcYj27cbofMXUD5RBWIQHkP4MhcGmysEPTd7TjQ&oe=6521997B&_nc_sid=000000&_nc_cat=106',
      
        },
        // Add more sellers as needed
      ],
    };
  },
};
</script>
 
 <style scoped>
 </style>
