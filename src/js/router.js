import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Logout from './components/Logout.vue';
import Profile from './components/Profile.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { notRequiresAuth: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: { notRequiresAuth: true }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
];
export { routes };