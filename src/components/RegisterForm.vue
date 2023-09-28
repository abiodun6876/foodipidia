<template>
  <div class="max-w-lg mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">Seller Registration</h2>
    <form
      method="post"
      action="https://akinbrand.com.ng/foodipidia/sellersForm-api.php"
      enctype="multipart/form-data"
    >
      <input type="hidden" name="form-name" value="seller-registration" />
      <div class="mb-4">
        <label for="business-name" class="block text-gray-700 font-bold">Business Name:</label>
        <input
          type="text"
          id="business-name"
          name="business-name"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 font-bold">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="location" class="block text-gray-700 font-bold">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
        <label for="whatsapp-link" class="block text-gray-700 font-bold">WhatsApp Link:</label>
        <input
          type="url"
          id="whatsapp-link"
          name="whatsapp-link"
          class="w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div class="mb-4">
  <label for="profile-picture" class="block text-gray-700 font-bold">Profile Picture:</label>
  <input
    type="file"
    id="profile-picture"
    name="profile-picture"
    class="w-full border border-gray-300 rounded-md p-2"
    required
  />
</div>

     
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SellerRegistrationForm",
  methods: {
    async submitForm() {
      // Prepare form data
      const formData = new FormData();
      formData.append("business-name", this.businessName);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("location", this.location);
      formData.append("whatsapp-link", this.whatsappLink);
      formData.append("profile-picture", this.profilePicture);

      try {
        // Send a POST request to your API endpoint
        const response = await axios.post('https://akinbrand.com.ng/foodipidia/sellersForm-api.php', formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Make sure to set the correct content type for form data
          },
        });

        // Handle the response, e.g., show a success message or redirect
        if (response.status === 200) {
          // Success, handle the response accordingly
          console.log("Form submitted successfully:", response.data);

          // Redirect to a success page (change the route or URL as needed)
          this.$router.push("/success");
        } else {
          // Handle errors if necessary
          console.error("Form submission failed:", response.data);

          // Redirect to a FAIL page (change the route or URL as needed)
          this.$router.push("/Fail");
        }
      } catch (error) {
        // Handle network or other errors
        console.error("An error occurred:", error);
      }
    },
  },
  data() {
    return {
      businessName: "",
      email: "",
      phone: "",
      location: "",
      whatsappLink: "",
      profilePicture: null, // Use null for the initial value of the file input
    };
  },
};
</script>