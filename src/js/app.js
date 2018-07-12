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

router.beforeEach((to, from, next) => {
    const auth = Store.getState().auth;
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(auth == null) {
            next({
                path: '/login',
            });
        } else {
            next();
        }
    } else {
        next();
    }
    if(to.matched.some(record => record.meta.notRequiresAuth)) {
        if(auth != null) {
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else {
        next();
    }
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