<template>
  <div class="container mx-auto pt-24 pb-8 px-4 sm:px-6 lg:px-8"> <!-- Ajuste de padding para telas menores -->
    <article class="max-w-3xl mx-auto bg-black text-white shadow-md rounded-lg p-6 sm:p-8">
      <!-- Título do post -->
      <h1 class="text-3xl sm:text-4xl font-bold mb-2">Isac Varzim</h1> <!-- Ajuste de tamanho do texto para responsividade -->

      <!-- Data e autor -->
      <p class="text-sm text-gray-500 mb-4">Publicado em 18 de agosto de 2024 por Ramon Moraes</p>

      <!-- Espaço para a foto -->
      <div class="mb-6">
        <img src="/public/ouvindo/isac.jpeg" alt="Isac Varzim" class="w-full h-auto rounded-lg">
      </div>

      <!-- Conteúdo do post -->
      <div>
        <p class="text-white text-base sm:text-xl mb-6"> <!-- Ajuste de tamanho do texto para responsividade -->
          O Isac Varzim foi uma recente descoberta que tive após ser fisgado pelo algoritmo do Youtube. Ele é um DJ 
          de Florianópolis que produz muitas músicas autorais e posta seus conteúdos em seu canal do Youtube e Spotify, 
          além de dar mentorias para quem tem interesse em se tornar um DJ, e com certeza deve ser um ótimo professor.
          O que me chamou bastante atenção foram essas sessões chamadas "Cosmic Grooves", que são 5 ao total (detalhe
          para a capa do post que mistura ele ao fundo com personagens de monstros de filmes antigos de terror),
          onde ele mistura muita influência soul em suas músicas com uma pegada eletrônica muito vibrante, 
          com linhas de baixo, alguns vocais femininos e em algumas passagens me lembrou bastante Daft Punk.
          Todo som que ele lança em seu canal geralmente é uma playlist de mais de uma hora que vai te levando no som,
          as músicas vão se transformando de forma muito genial e sempre com essa forte pegada groove que eu adoro.
          Eu apelidei esse canal de "Músicas para ouvir enquanto viaja para outro planeta" e sempre que estou de bobeira
          no computador ou indo para o trabalho eu deixo as playlists dele rolando.
          Realmente para quem não tem muita afinidade com DJs, esse é um que vale bastante a pena ser ouvido.
        </p>
        
        <!-- Links para o YouTube e Spotify -->
        <div class="flex flex-col sm:flex-col sm:justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <a href="https://www.youtube.com/@isaacvarzim" target="_blank" class="text-blue-400 font-bold hover:underline">YouTube</a>
          <a href="https://open.spotify.com/intl-pt/artist/5swxhKkbV5mpUqqoYHBEy1?si=ebzSpIWoSIqDXl-F24ttnA&nd=1&dlsi=ea656e83e4644c68" target="_blank" class="text-green-400 font-bold hover:underline">Spotify</a>
        </div>
        
        <!-- Botão para voltar à página inicial -->
        <div class="flex justify-center">
          <NuxtLink to="/" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">Voltar para a página inicial</NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
  // Adicione qualquer script necessário aqui
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui se necessário */
</style>
