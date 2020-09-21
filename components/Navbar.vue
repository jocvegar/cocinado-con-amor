<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg teal-background mb-3">
    <div class="container px-2 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-0 lg:static lg:block lg:justify-start">
        <a class="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap text-gray-200 antialiased" href="/">
          <h1 class="tracking-wide">Cocinando Con Amor</h1>
        </a>
        <button class="text-gray-200 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a href="https://www.facebook.com/salvamividahn" target="_blank"
              class="px-3 py-2 flex items-center uppercase text-sm font-bold leading-snug text-gray-200 hover:opacity-75">
              <i class="fab fa-facebook-square text-lg" /><span class="ml-2">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/salvamivida" target="_blank"
              class="px-3 py-2 flex items-center uppercase text-sm font-bold leading-snug text-gray-200 hover:opacity-75">
              <i class="fab fa-instagram text-lg" /><span class="ml-2">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.salvamivida.org" target="_blank"
              class="px-3 py-2 flex items-center uppercase text-sm font-bold leading-snug text-gray-200 hover:opacity-75">
              <i class="fas fa-globe text-lg" /><span class="ml-2">SalvaMiVida</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap'
        }

      ]
    }
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>
.teal-background {
  background: #78B7A7;
}
h1 {
  font-family: 'Lobster', cursive;
}
</style>
