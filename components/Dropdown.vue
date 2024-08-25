<template>
    <div class="relative">
      <button @click="toggleDropdown" class="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
        {{ label }}
      </button>
      <div v-if="open" class="absolute mt-2 w-48 bg-white text-black rounded shadow-lg">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })
  
  const open = ref(false)
  
  const toggleDropdown = () => {
    open.value = !open.value
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para o dropdown podem ser adicionados aqui */
  </style>