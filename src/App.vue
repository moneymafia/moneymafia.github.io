<template>
	<div id="app" class="container mx-auto px-10 max-w-7xl">
		<div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row uppercase">
			<div class="relative flex flex-col md:flex-row">
				<router-link to="/" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
					<span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">MONEY MAFIA</span>
				</router-link>
			</div>

			<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
				<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
					<router-link to="/portfolio" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">portfolio</router-link>
					<router-link to="/approach" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">APPROACH</router-link>
					<router-link to="/team" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">TEAM</router-link>
					<router-link to="/faq" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">FAQ</router-link>
					<router-link to="/contact" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900">CONTACT</router-link>
				</nav>
			</div>
		</div>

		<router-view />

		<footer class="py-20">
			<div class="container px-4 mx-auto">
				<p class="text-center text-sm text-gray-400">Built with ❤️ In Dubai, UAE.</p>
			</div>
		</footer>
	</div>
</template>
