<template>
 <HomePage/>
</template>

<script>
import HomePage from './components/HomePage.vue'
// Then import Bootstrap and BootstrapVue SCSS files (order is important)

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style lang="scss" src="@/assets/styles/styles.scss" >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
