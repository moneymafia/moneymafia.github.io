<template>
	<div id="app" class="container mx-auto px-10 max-w-7xl">
		<section class="py-5 bg-white">
			<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row">
				<div class="relative flex flex-col md:flex-row">
					<router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
						<span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">MONEY MAFIA</span>
					</router-link>
				</div>

				<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
					<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
						<a href="https://medium.com/@moneymafia" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Medium</a>
						<a href="https://github.com/moneymafia" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Github</a>
						<a href="https://discord.gg/hqrbMff4ph" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Discord</a>
					</nav>
				</div>
			</div>
		</section>

		<service />

		<team />

		<contact />
		
		<footer class="py-20">
			<div class="container px-4 mx-auto">
				<p class="text-center text-sm text-gray-400">Built with ❤️ In Dubai, UAE.</p>
			</div>
		</footer>
	</div>
</template>

<script>
	import team from './components/team.vue';
	import service from './components/service.vue';
	import contact from './components/contact.vue';

	export default {
		name: 'App',
		components: { team, service, contact },
	};
	2;
</script>
