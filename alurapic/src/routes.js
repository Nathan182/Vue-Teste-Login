import Login from '../src/components/login/Login.vue';
import Home from '../src/components/home/Home.vue';

export const routes = [
    { path: '', name: 'login', component : Login, titulo : 'Login' },
    { path: '/home',  name: 'home', component : Home, titulo : 'Home' },
	{ path: '/login',  name: 'login', component : Login, titulo : 'Login' }
];