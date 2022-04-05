<template>
	<div id="app">
		<div class="container mx-auto max-w-7xl flex flex-col flex-wrap items-center justify-between py-10 md:flex-row uppercase text-2xl font-bold text-gray-500">
			<div class="relative flex flex-col md:flex-row">
				<router-link to="/" class="flex items-center lg:w-auto lg:items-center lg:justify-center"> MONEYMAFIA.ETH </router-link>
			</div>

			<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
				<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
					<router-link to="/portfolio" class="mr-5">portfolio</router-link>
					<router-link to="/service" class="mr-5">SERVICE</router-link>
					<router-link to="/team" class="mr-5">TEAM</router-link>
					<router-link to="/faq" class="mr-5">FAQ</router-link>
					<router-link to="/contact" class="mr-5">CONTACT</router-link>
				</nav>
			</div>
		</div>

		<router-view />

		<footer class="py-20">
			<div class="container px-4 mx-auto">
				<p class="text-center text-2xl text-gray-400">Built with ❤️ In Dubai, UAE.</p>
			</div>
		</footer>
	</div>
</template>
