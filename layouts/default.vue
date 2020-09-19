<template>
  <div class="flex flex-col justify-between">
    <Navbar/>
    <nuxt />
    <Footbar />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footbar from '~/components/Footbar.vue'

export default {
  components: {
    Navbar,
    Footbar,
  },
  head() {
      return {
        title: "Cocinando Con Amor",
        meta: [
          {
            hid: 'Cocinado Con Amor',
            name: 'Cocinado Con Amor',
            content: 'Cocinado Con Amor a beneficio de la Fundación Honduraña Para El Niño Con Cancer'
          }
        ]
      }
    }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
