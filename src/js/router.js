import Main from './components/Main.vue';
import Counter from './components/Counter.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };