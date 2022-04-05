<template>
	<div>
		<div class="container mx-auto max-w-7xl px-5 py-20">
			<div class="flex md:flex-row flex-col items-center">
				<div class="md:w-1/2">
					<p class="uppercase text-3xl font-bold text-gray-500">Money Mafia is a decenterlised organisation that <span class="text-white bg-gray-400">develops</span>, <span class="text-white bg-gray-400">manages</span> & <span class="text-white bg-gray-400">funds</span> blockchain startups.</p>
					<links />
				</div>

				<div class="md:w-1/2">
					<lottie-player class="object-cover object-center" autoplay="" loop="" mode="normal" src="img/main.json" background="transparent"></lottie-player>
				</div>
			</div>
		</div>

		<medium />

	</div>
</template>

<script>
	import links from '@/components/links.vue';
	import medium from '@/components/medium.vue';

	export default {
		components: {
			links,
			medium,
		},
	};
</script>
