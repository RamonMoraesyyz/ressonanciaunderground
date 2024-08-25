<template>
  <section class="pt-28 px-4 md:px-8 container mx-auto">
    <h1 class="text-3xl font-bold mb-8">Últimos posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Itera sobre os posts para exibi-los como cards -->
      <NuxtLink
        v-for="post in posts"
        :key="post.title"
        :to="post.path"
        class="bg-gray-800 text-white p-4 rounded block"
      >
        <img 
          :src="post.image" 
          alt="Imagem do post" 
          class="w-full h-48 object-cover rounded mb-4"
          onError="this.onerror=null;this.src='/images/default.jpg';" 
          
        >
        <h2 class="text-2xl font-bold">{{ post.title }}</h2>
        <p class="mt-2">{{ post.excerpt }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app'

// Função para buscar os dados dos posts
const { data: posts } = await useAsyncData('posts', async () => {
  // Simula a obtenção de posts
  const allPosts = [
    {
      title: 'Isac Varzim',
      excerpt: 'Um som para ser ouvido em viagens para outros planetas',
      image: '/ouvindo/isac.jpeg',
      path: '/posts/ouvindo/isacvarzim',
      date: '2024-08-18',  // Data fictícia
    },
    {
      title: 'Shoegaze',
      excerpt: 'Descobri o Shoegaze',
      image: '/ouvindo/jesus.jpg',
      path: '/posts/ouvindo/shoegaze',
      date: '2024-08-25',  // Data fictícia
    },
    {
      title: 'Resumo Semanal 1',
      excerpt: 'Resumo semanal musical',
      image: '/resumo/resumo1.jfif',
      path: '/posts/resumo/resumo1',
      date: '2024-08-25',  // Data fictícia
    },
    // Adicione mais posts aqui
  ]

  // Ordena os posts por ordem decrescente de criação (mais recentes primeiro)
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>
