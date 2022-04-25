<template>
	<div id="app">
		<div class="container mx-auto flex flex-col flex-wrap items-center justify-between py-10 md:flex-row uppercase text-2xl">
			<div class="relative flex flex-col md:flex-row mb-2">
				<router-link to="/" class="font-bold"> MONEYMAFIA.ETH </router-link>
			</div>

			<div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
				<nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                    <router-link to="/dao" class="mr-5">DAO</router-link>
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
				<p class="text-center text-2xl text-gray-400 uppercase">Built with ❤️ In Dubai, UAE.</p>
			</div>
		</footer>
	</div>
</template>
