import '../css/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './router.js';
import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});