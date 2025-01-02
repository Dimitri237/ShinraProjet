import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import StockPage from './components/StockPage.vue';
import AuthPage from './components/AuthPage.vue';
import PageCompte from './components/PageCompte.vue';
import LoadingPage from './components/LoadingPage.vue';

const routes = [
  { path: '/HelloWorld', component: HelloWorld },
  {
    path: '/StockPage',
    name: 'StockPage',
    component: StockPage
  },
  { path: '/', component: LoadingPage },
  {
    path: '/AuthPage',
    name: 'AuthPage',
    component: AuthPage
  },
  {
    path: '/PageCompte',
    name: 'PageCompte',
    component: PageCompte
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

