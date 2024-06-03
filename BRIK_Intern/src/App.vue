<script setup>
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/home.vue'
import NotFound from './pages/notFound.vue'
import AddProduct from './pages/AddProductForm.vue'
import Search from './pages/search.vue'
import Sidebar from './components/Sidebar.vue'

const routes = {
  '/': Home,
  '/add-product': AddProduct,
  '/search': Search,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="flex">
    <sidebar />
    <router-view />
  </div>
</template>