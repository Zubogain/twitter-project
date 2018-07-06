import Main from './components/Main.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };