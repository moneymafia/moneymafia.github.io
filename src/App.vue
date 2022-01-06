<template>
	<div id="app">
	<section class="py-5 bg-white ">
		<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row ">
			<div class="relative flex flex-col md:flex-row">
				<router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
					<span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">MONEY MAFIA</span>
				</router-link>
			</div>

			<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
				<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
					<router-link to="/service" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">Services</router-link>
					<router-link to="/team" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">TEAM</router-link>
					<router-link to="/contact" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase">CONTACT</router-link>
				</nav>
			</div>
		</div>
	</section>


		<footer class="py-20">
			<div class="container px-4 mx-auto text-center">
				<ul class="my-6 flex flex-wrap space-x-8 items-center justify-center uppercase">
					<li class="mb-2 md:mb-0"><a class="text-2xl text-gray-900 hover:text-gray-700" href="https://medium.com/@moneymafia">Medium</a></li>
					<li class="mb-2 md:mb-0"><a class="text-2xl text-gray-900 hover:text-gray-700" href="https://github.com/moneymafia">Github</a></li>
					<li class="mb-2 md:mb-0"><a class="text-2xl text-gray-900 hover:text-gray-700" href="https://discord.gg/hqrbMff4ph">Discord</a></li>
				</ul>
			</div>
			<div class="container px-4 mx-auto">
				<p class="text-center text-sm text-gray-400">Built with ❤️ In Dubai, UAE.</p>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {},
	};2
</script>
