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
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/approach',
		name: 'Approach',
		component: () => import('../views/Approach.vue'),
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import('../views/Portfolio.vue'),
	},
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
});

export default router;
