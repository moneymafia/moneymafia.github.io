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
		path: '/team',
		name: 'Team',
		component: () => import('../views/Team.vue'),
	},
	{
		path: '/faq',
		name: 'Faq',
		component: () => import('../views/Faq.vue'),
	},
	{
		path: '/service',
		name: 'Service',
		component: () => import('../views/Service.vue'),
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import('../views/Portfolio.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
