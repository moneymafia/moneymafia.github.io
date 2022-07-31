import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/token',
		name: 'Token',
		component: () => import('../views/Token.vue'),
	},
	{
		path: '/faq',
		name: 'Faq',
		component: () => import('../views/Faq.vue'),
	},
	{
		path: '/dao',
		name: 'Dao',
		component: () => import('../views/Dao.vue'),
	},
	{
		path: '/service',
		name: 'Service',
		component: () => import('../views/Service.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
