<template>
  <div>
    <!-- Header fixo e responsivo -->
    <header class="bg-black text-white p-4 fixed top-0 left-0 w-full z-50">
      <nav class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="flex flex-col">
          <NuxtLink to="/" class="text-red-600 hover:text-red-900">
            <h1 class="text-3xl sm:text-3xl font-bold text-red-600">Ressonância Underground</h1>
          </NuxtLink>
          <p class="text-xs sm:text-sm mt-2">O seu refúgio para críticas musicais e divulgação de todo o cenário underground e mainstream</p>
        </div>

        <div class="mt-4 sm:mt-4 flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
          <!-- Dropdown para Resumo Semanal -->
          <div class="relative group">
            <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">
              Giro Underground
            </button>
            <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10">
              <div class="py-2">
                <NuxtLink to="/posts/resumo/resumo1" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Giro Underground 1
                </NuxtLink>
                <NuxtLink to="/posts/resumo/resumo2" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Giro Underground 2
                </NuxtLink>

                <NuxtLink to="/posts/resumo/resumo3" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Giro Underground 3
                </NuxtLink>

                <NuxtLink to="/posts/resumo/resumo4" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Giro Underground 4
                </NuxtLink>
                <!-- Adicione mais links para outros resumos semanais aqui -->
              </div>
            </div>
          </div>

          <!-- Dropdown para Resenhas -->
          <div class="relative group">
            <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">
              Resenhas
            </button>
            <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10">
              <div class="py-2">
                <NuxtLink to="/posts/resenhas/bandas1" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Bandas inclassificáveis
                </NuxtLink>
                <NuxtLink to="/posts/resenhas/bandas2" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Bandas estrangeiras
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/mulheres1" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Mulheres no metal parte 1
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/mulheres2" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Mulheres no metal parte 2
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/mulheres3" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Mulheres no metal parte 3
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/mulheres4" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Mulheres no metal parte 4
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/rockgoiano1" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Rock goiano 1
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/rockgoiano2" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Rock goiano 2
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/undergroundbr" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Undergound BR parte 1
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/undergroundbr2" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Undergound BR parte 2
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/numetal" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Nu Metal
                </NuxtLink>

                <NuxtLink to="/posts/resenhas/newbands" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Nova Geração
                </NuxtLink>

                <!-- Adicione mais links para outras resenhas aqui -->
              </div>
            </div>
          </div>

          <!-- Dropdown para O que estamos ouvindo -->
          <div class="relative group">
            <button class="px-2 py-1 sm:px-4 sm:py-2 font-bold bg-gray-800 rounded hover:bg-gray-700">
              O que estamos ouvindo
            </button>
            <div class="absolute hidden group-hover:block bg-gray-800 mt-1 shadow-lg rounded w-48 sm:w-64 z-10">
              <div class="py-2">
                <NuxtLink to="/posts/ouvindo/isacvarzim" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Isac Varzim
                </NuxtLink>
                <NuxtLink to="/posts/ouvindo/shoegaze" class="block px-4 py-2 text-white hover:bg-gray-700">
                  Shoegaze
                </NuxtLink>
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
