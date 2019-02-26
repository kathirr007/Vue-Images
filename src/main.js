import Vue from 'vue';
import vGallery from 'v-gallery';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.use(VueRouter);
Vue.use(vGallery);


export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: ImageList },
    { path: '/galleries', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
