<template>
	<div class="py-16 mx-auto">
		<div class="flex flex-col justify-center">
			<div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-16">
				<div v-for="(collapse, index) of collapses" :key="index">
					<h5 class="mt-5 mb-3 font-bold text-gray-900">
						{{ collapse.title }}
					</h5>
					<p>{{ collapse.text }}</p>
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
					{
						title: 'Management Fees',
						text: 'Team charges 10% management fees on all returns.',
					},
				],
			};
		},
	};
</script>
