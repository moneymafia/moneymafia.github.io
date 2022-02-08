<template>
	<div>
		<div class="py-20 mx-auto">
			<div class="flex md:flex-row flex-col items-center">
				<div class="md:w-1/2 p-5">
					<p class="text-3xl font-bold uppercase text-gray-400">Money Mafia is a decenterlised organisation that <span class="text-white bg-red-400">develops</span>, <span class="text-white bg-red-400">manages</span> & <span class="text-white bg-red-400">funds</span> blockchain startups.</p>

					<div class="py-3 items-center mx-auto space-y-6 text-center uppercase">
						<div class="relative flex flex-col md:flex-row md:space-x-4">
							<a href="https://moneymafia.medium.com/" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-400 rounded-md md:mb-0 hover:bg-red-700 md:w-auto">
								Medium
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
							<a href="https://discord.gg/hqrbMff4ph" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-400 rounded-md md:mb-0 hover:bg-red-700 md:w-auto">
								Discord
								<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<div class="md:w-1/2 p-5">
					<lottie-player class="object-cover object-center" autoplay="" loop="" mode="normal" src="img/main.json" background="transparent"></lottie-player>
				</div>
			</div>
		</div>

		<feature />

		<portfolio />
	</div>
</template>

<script>
	import feature from '@/components/feature.vue';
	import portfolio from '@/components/portfolio.vue';

	export default {
		components: {
			feature,
			portfolio,
		},
	};
</script>
