<template>
	<div class="container mx-auto max-w-7xl px-5">
		<div class="py-40">
			<p class="text-3xl font-mono uppercase">frequently asked <span class="text-white bg-red-300">questions</span></p>
		</div>

		<div class="py-10">
			<div class="space-y-4">
				<div v-for="(collapse, index) of collapses" :key="index">
					<details class="group">
						<summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
							<h5 class="font-medium text-gray-900">{{ collapse.title }}</h5>

							<svg class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</summary>

						<p class="px-4 mt-4 leading-relaxed text-gray-700">{{ collapse.text }}</p>
					</details>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collapses: [
					{
						title: 'Ownership',
						text: 'Money Mafia is a decentralized DAO, which means its owned by the Money Mafia Token holders.',
					},
					{
						title: 'Income Source (Services)',
						text: 'Money Mafia generates money from various services like - project development, promotion, marketing, audits.',
					},
					{
						title: 'Income Source (Investment)',
						text: 'Money Mafia generates money from various modes like seed investments, private investments, project development partnerships.',
					},
				],
			};
		},
	};
</script>
