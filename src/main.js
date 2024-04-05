import { createApp } from 'vue'
import App from './App.vue'
// import router from './router';
// import "./assets/styles/styles.scss"

// Импортируйте наш пользовательский CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Импортируйте весь JS Bootstrap
import 'bootstrap';


//router
import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from "./components/HomePage.vue";
import CabinetPage from "./components/CabinetPage.vue";

const routes = [
  { path: '/', component: HomePage },
  { path: '/cabinet', component: CabinetPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
  
const app = createApp(App)
app.use(router)
app.mount('#app')

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
