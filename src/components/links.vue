<template>
	<div class="py-3 items-center mx-auto space-y-6 text-center uppercase">
		<div class="relative flex flex-col md:flex-row md:space-x-4">
			<a :href="medium" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto">
				Medium
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</a>
			<a :href="github" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto">
				Github
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</a>
			<a :href="telegram" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto">
				Telegram
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				github: 'https://github.com/moneymafia',
				medium: 'https://moneymafia.medium.com/',
				telegram: 'https://t.me/+U30ZfKzJl_VmZjll',
			};
		},
		async mounted() {
			await this.fetchdata();
		},
	};
</script>
