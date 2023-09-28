import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import RegisterForm from '../components/RegisterForm.vue'
import Sucess from '../components/Sucess.vue'
import Fail from '../components/Fail.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails
      },

      {
        path: '/RegisterForm',
        name: 'RegisterForm',
        component: RegisterForm,
      },
      {
        path: '/Sucess',
        name: 'Sucess',
        component: Sucess,
      },

      {
        path: '/Fail',
        name: 'Fail',
        component: Fail,
      },
      
    ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;