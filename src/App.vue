<template>
  <!-- <router-link to="/">Home</router-link> | -->
    <!-- <button @click ="goToCabinet">Cabinet</button>  -->

  <TopVue/>

  <!-- <p><strong>Текущий путь маршрута:</strong> {{ $route.fullPath }}</p> -->
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/cabinet">Go to cabinet</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <FooterVue />
</template>

<script>
// import HomePage from "./components/HomePage.vue";
import TopVue from "./components/TopVue.vue";
import FooterVue from "./components/FooterVue.vue";
// Then import Bootstrap and BootstrapVue SCSS files (order is important)

export default {
  name: "App",
  components: {
    TopVue,
    // HomePage,
    FooterVue,
  },

  methods: {
    goToCabinet() {
      this.$router.push("/cabinet");
    },
  },
};
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
