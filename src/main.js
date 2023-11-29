import './style.css'
import * as VueRouter from 'vue-router';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';


const app = createApp(App);

const HomePage    = () => import('./components/HomeComponent.vue');
const HistoryPage =  () => import('./components/Pages/HistoryComponent.vue');

const routes = 
[
    { path: '/',        component: HomePage },
    { path: '/history', component: HistoryPage },
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
