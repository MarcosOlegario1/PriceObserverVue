import './style.css'
import * as VueRouter from 'vue-router';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';


const app = createApp(App);

const HomePage    = () => import('./components/HomeComponent.vue');
const HistoryPage =  () => import('./components/Pages/HistoryComponent.vue');
const LoginPage =  () => import('./components/Pages/Login/LoginComponent.vue');
const RegisterPage =  () => import('./components/Pages/Register/RegisterComponent.vue');

const routes = 
[
    { path: '/',        component: HomePage },
    { path: '/history', component: HistoryPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});


app.use
(
    router   
)

app.mount('#app')
