<template>
    <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl w-full h-48 object-cover"
        />
      </router-link>
      <div class="p-3">
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="mb-4">{{ $filters.truncateWords(meal.strInstructions, 20) }}</p>
        <!-- Improved Order Now section -->
      <div class="flex justify-between items-center">
        <div>
          <YouTubeButton :href="meal.strYoutube" />
        </div>
        <div class="text-right">
          <p class="text-dark-500 font-bold">Order Now</p>
          <p class="text-orange-500 font-bold">Call: +2348062191351</p>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import YouTubeButton from './YouTubeButton.vue';
  
  const { meal } = defineProps({
    meal: {
      required: true,
      type: Object,
    },
  });
  </script>
  