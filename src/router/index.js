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
		component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue'),
	},
	{
		path: '/faq',
		name: 'Faq',
		component: () => import(/* webpackChunkName: "about" */ '../views/Faq.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
	},
	{
		path: '/approach',
		name: 'Approach',
		component: () => import(/* webpackChunkName: "about" */ '../views/Approach.vue'),
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
