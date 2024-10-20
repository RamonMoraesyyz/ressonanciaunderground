<template>
  <section class="pt-24 sm:pt-20 md:pt-28 px-4 md:px-8 container mx-auto bg-black min-h-screen">
    <h1 class="text-3xl sm:text-4xl flex justify-start font-bold pt-24 p-6 sm:pt-8 md:pt-12 text-white">Últimos posts</h1>
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

<style>
body {
  background-color: black;
}
</style>

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
      title: 'Resumo Semana 35/2024',
      excerpt: 'Resumo semanal musical',
      image: '/resumo/resumo1.jpg',
      path: '/posts/resumo/resumo1',
      date: '2024-08-25',  // Data fictícia
    },

    {
      title: 'Bandas Inclassificáveis',
      excerpt: 'Bandas difíceis de se classificar',
      image: '/resenhas/sleep.jpg',
      path: '/posts/resenhas/bandas1',
      date: '2024-09-01',  // Data fictícia
    },


    {
      title: 'Resumo Semana 36/2024',
      excerpt: 'Resumo semanal musical',
      image: '/resumo/resumo2.jpg',
      path: '/posts/resumo/resumo2',
      date: '2024-09-08',  // Data fictícia
    },

    {
      title: 'Bandas estrangeiras',
      excerpt: 'Bandas estrangeiras que você precisa conhecer',
      image: '/resenhas/ningen.jpg',
      path: '/posts/resenhas/bandas2',
      date: '2024-09-15',  // Data fictícia
    },

    {
      title: 'Mulheres no Metal Parte 1',
      excerpt: 'Explorando o papel das mulheres na cena do metal',
      image: '/resenhas/bambam.jpg',
      path: '/posts/resenhas/mulheres1',
      date: '2024-09-28',  // Data fictícia mais recente
    },


    {
      title: 'Rock Goiano - Parte 1',
      excerpt: 'Para quem acha que em Goiás só se faz sertanejo está muito enganado',
      image: '/resenhas/projeto.jpg',
      path: '/posts/resenhas/rockgoiano1',
      date: '2024-10-05',  // Data fictícia mais recente
    },

    {
      title: 'Underground BR - Parte 1',
      excerpt: 'Um giro por bandas underground ao redor do Brasil.',
      image: '/resenhas/hoovaranas.jpg',
      path: '/posts/resenhas/undergroundbr',
      date: '2024-10-19',  // Data fictícia mais recente
    },


    // Adicione mais posts aqui
  ]

  // Ordena os posts por ordem decrescente de criação (mais recentes primeiro)
  return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>
