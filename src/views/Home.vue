<template>
	<div>
		<div class="container mx-auto max-w-5xl flex flex-col justify-between items-center relative font-mono">
			<div class="flex flex-col px-6 py-40">
				<p class="text-3xl my-6 text-center dark:text-white">MONEY MAFIA IS A DECENTERLISED ORGANISATION THAT DEVELOPS, MANAGES & FUNDS BLOCKCHAIN STARTUPS.</p>
				<div class="flex items-center justify-center mt-4">
					<a href="https://github.com/moneymafia" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"> GITHUB </a>

					<a href="https://t.me/moneymafiatg" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"> TELEGRAM </a>

					<a href="https://snapshot.org/#/moneymafia.eth" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md"> VOTE </a>
				</div>
			</div>
		</div>

		<div class="bg-gray-100">
			<div class="container mx-auto px-5 py-20">
				<section class="grid grid-cols-1 md:grid-cols-3 gap-5">
					<a v-bind:href="posts[0].link" target="_blank">
						<article class="mx-auto w-full shadow-2xl transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
							<div class="min-h-80 overflow-hidden">
								<img v-bind:src="posts[0].thumbnail" />
							</div>
							<div class="flex justify-between">
								<p class="m-4 text-xl text-gray-700">{{ posts[0].title }}</p>
							</div>
						</article></a
					>

					<a v-bind:href="posts[1].link" target="_blank">
						<article class="mx-auto w-full shadow-2xl transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
							<div class="min-h-80 overflow-hidden">
								<img v-bind:src="posts[1].thumbnail" />
							</div>
							<div class="flex justify-between">
								<p class="m-4 text-xl text-gray-700">{{ posts[1].title }}</p>
							</div>
						</article></a
					>

					<a v-bind:href="posts[2].link" target="_blank">
						<article class="mx-auto w-full shadow-2xl transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
							<div class="min-h-80 overflow-hidden">
								<img v-bind:src="posts[2].thumbnail" />
							</div>
							<div class="flex justify-between">
								<p class="m-4 text-xl text-gray-700">{{ posts[2].title }}</p>
							</div>
						</article></a
					>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				posts: [
					{
						title: 'loading...',
						link: '',
						thumbnail: 'https://ipfs.infura.io/ipfs/QmRF2awFZn8kLqyxT3zK9VzH1PFHQpLBcowREvX7Ph9PZe',
					},
					{
						title: 'loading...',
						link: '',
						thumbnail: 'https://ipfs.infura.io/ipfs/QmRF2awFZn8kLqyxT3zK9VzH1PFHQpLBcowREvX7Ph9PZe',
					},
					{
						title: 'loading...',
						link: '',
						thumbnail: 'https://ipfs.infura.io/ipfs/QmRF2awFZn8kLqyxT3zK9VzH1PFHQpLBcowREvX7Ph9PZe',
					},
				],
			};
		},
		methods: {
			async fetchdata() {
				try {
					const response = await axios.get('https://moneymafia.medium.com/feed');

					console.log(response);
					//	this.posts = response.data.items;
				} catch (error) {
					console.log(error);
				}
			},
		},
		async mounted() {
			await this.fetchdata();
		},
	};
</script>
