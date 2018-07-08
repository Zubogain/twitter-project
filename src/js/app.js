import '../css/style.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router.js';
import App from './App.vue';
import Store from './store.js';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: routes
});

Object.defineProperty(Vue.prototype,"$redux",{
    get: function() {
        return this.$root.redux;
    }
});

new Vue({
    el: '#app',
    data: {
        redux: new Vue({
            data: {
                ...Store,
            }
        })
    },
    render: h => h(App),
    router
});