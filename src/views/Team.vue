<template>
	<div class="container mx-auto max-w-7xl px-5">
		<div class="py-10">
			<div class="flex md:flex-row flex-col items-center">
				<div class="md:w-1/2 p-5">
					<p class="text-5xl font-bold uppercase text-gray-400">MEET OUR <span class="text-white bg-gray-400">TEAM</span></p>
				</div>

				<div class="md:w-1/2 p-5">
					<lottie-player class="object-cover object-center" autoplay="" loop="" mode="normal" src="img/team.json" background="transparent"></lottie-player>
				</div>
			</div>
		</div>
		<div class="py-10">
			<div class="grid w-full grid-cols-1 gap-10 sm:grid-cols-4">
				<div v-for="(team, index) of teams" :key="index">
					<div class="flex flex-col items-center justify-center col-span-1">
						<div class="relative p-5">
							<div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-blue-50"></div>
							<img class="relative z-10 w-full rounded-full" v-bind:src="'img/team/' + team.pic + '.png'" />
						</div>
						<div class="mt-3 space-y-2 text-center">
							<div class="space-y-1 text-lg font-medium leading-6">
								<h3>{{ team.name }}</h3>
								<p class="text-blue-600">{{ team.title }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				teams: [
					{
						name: 'Jerry Ward',
						title: 'CEO',
						pic: 'jerry',
					},
					{
						name: 'Byron Nicholson',
						title: 'Investment Manager',
						pic: 'byron',
					},
					{
						name: 'Elise',
						title: 'Legal / Accounts',
						pic: 'elise',
					},

					{
						name: 'Webster Pearson',
						title: 'Developer',
						pic: 'webster',
					},
					{
						name: 'Oliver Mcdaniel',
						title: 'Developer / Tester',
						pic: 'oliver',
					},
					{
						name: 'Hugh Bennett',
						title: 'Developer / Debugger',
						pic: 'hugh',
					},
				],
			};
		},
	};
</script>
