<template>
	<div>
		<div class="py-20 mx-auto">
			<div class="flex md:flex-row flex-col items-center">
				<div class="md:w-1/2 p-5">
					<p class="text-3xl font-bold uppercase text-gray-400">Money Mafia is a decenterlised organisation that <span class="text-white bg-red-400">develops</span>, <span class="text-white bg-red-400">manages</span> & <span class="text-white bg-red-400">funds</span> blockchain startups.</p>

					<links />
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
	import links from '@/components/links.vue';

	export default {
		components: {
			feature,
			portfolio,
			links,
		},
	};
</script>
