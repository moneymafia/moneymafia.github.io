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
			<div class="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
				<div v-for="(team, index) of teams" :key="index">
					<div class="flex flex-col  col-span-1 items-center justify-center shadow-xl py-10 px-10 transform duration-500 hover:-translate-y-5 cursor-pointer rounded-md" >
						<div class="relative p-5">
							<div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full" :class="theme[index]"></div>
							<img class="relative z-10 w-full rounded-full" v-bind:src="'img/team/' + team.pic + '.png'" />
						</div>
						<div class="mt-3 py-5 text-center">
								<h3 class="font-medium text-xl">{{ team.name }}</h3>
								<p>( {{ team.title }} )</p>
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
				theme: ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-purple-100', 'bg-blue-100'],
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
