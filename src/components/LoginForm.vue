<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 font-bold">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 font-bold">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        class="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("Login method called."); // Add this line for debugging
      try {
        // Send a POST request to the login endpoint
        const response = await axios.post(
          "https://akinbrand.com.ng/foodipidia/login.php",
          {
            username: this.username,
            password: this.password,
          }
        );

        // Check if login was successful
        if (response.data && !response.data.error) {
          // Assuming you receive user data (e.g., username) upon successful login
          const user = response.data;

          // Store user data (e.g., username) in Vuex or local data
          // Redirect to the homepage
          this.$router.push("/"); // Change the route to your homepage
        } else {
          // Handle login errors
          console.error("Login failed:", response.data.error);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Login failed:", error);
      }
    },
  },
};
</script>
