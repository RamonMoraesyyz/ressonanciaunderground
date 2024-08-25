<template>
  <div>
    <!-- Header fixo e responsivo -->
    <header class="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="flex flex-col">
          <h1 class="text-2xl sm:text-3xl font-bold">Ressonância Underground</h1>
          <p class="text-xs sm:text-sm mt-2">O seu refúgio para críticas musicais e divulgação de todo o cenário underground e mainstream</p>
        </div>

        <div class="mt-4 sm:mt-0 flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
  <!-- Dropdown button para Resumo Semanal -->
        <div class="group inline-block relative">
          <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">Resumo Semanal</button>

    <!-- Dropdown content -->
        <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <div class="py-2">
            <NuxtLink to="/posts/resumo/resumo1" class="block px-4 py-2 text-white hover:bg-gray-700">Resumo 1</NuxtLink>
            
        <!-- Adicione mais links para outros resumos semanais aqui -->
          </div>
        </div>
        </div>

  <!-- Dropdown button para Resenhas -->
        <div class="group inline-block relative">
    <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">Resenhas</button>

    <!-- Dropdown content -->
    <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
      <div class="py-2">
        
        
        <!-- Adicione mais links para outras resenhas aqui -->
      </div>
    </div>
  </div>

  <!-- Dropdown button para O que estamos ouvindo -->
  <div class="group inline-block relative">
    <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">O que estamos ouvindo</button>

    <!-- Dropdown content -->
    <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
      <div class="py-2">
        <NuxtLink to="/posts/ouvindo/isacvarzim" class="block px-4 py-2 text-white hover:bg-gray-700">Isac Varzim</NuxtLink>
        <NuxtLink to="/posts/ouvindo/shoegaze" class="block px-4 py-2 text-white hover:bg-gray-700">Shoegaze</NuxtLink>
        <!-- Adicione mais links para outros posts aqui -->
      </div>
    </div>
  </div>
</div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
header {
  background-color: #000; /* Fundo preto */
  position: fixed; /* Fixa o header no topo */
  top: 0;
  left: 0;
  width: 100%; /* Largura total */
  z-index: 50; /* Certifica-se que o header fique acima de outros elementos */
}

.group:hover .group-hover\:block {
  display: block;
}

/* Ajuste de sensibilidade do dropdown */
.group-hover\:block {
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;
}

.group:hover .group-hover\:block {
  pointer-events: auto;
}
</style>
