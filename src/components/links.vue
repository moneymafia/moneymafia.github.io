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
			<a :href="invite" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-400 rounded-md md:mb-0 hover:bg-gray-700 md:w-auto">
				Discord
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
			</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	async function discord() {
		return await axios
			.get('https://discord.com/api/guilds/927945620554121306/widget.json')
			.then(function (response) {
				return {
					name: response.data.name,
					id: response.data.id,
					invite: response.data.instant_invite,
					members: response.data.members,
					onlinecount: response.data.members.length,
				};
			})
			.catch(function () {
				return {
					name: null,
					id: null,
					invite: null,
					members: null,
					onlinecount: null,
				};
			});
	}

	export default {
		data() {
			return {
				github: 'https://github.com/moneymafia',
				medium: 'https://moneymafia.medium.com/',
				invite: 'https://discord.com/widget?id=927945620554121306&theme=light',
			};
		},
		methods: {
			async fetchdata() {
				const response = await discord();

				this.invite = response.invite;
			},
		},
		async mounted() {
			await this.fetchdata();
		},
	};
</script>
