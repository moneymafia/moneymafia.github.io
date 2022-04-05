<template>
	<div class="bg-gray-100">
		<div class="container mx-auto max-w-7xl px-5 py-20">
			<section class="grid grid-cols-1 md:grid-cols-3 gap-5">
				<a v-bind:href="posts[0].link" target="_blank">
					<article class="mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
						<div class="min-h-80 overflow-hidden">
							<img  v-bind:src="posts[0].thumbnail" />
						</div>
						<div class="flex justify-between">
							<p class="m-4 text-xl text-gray-700">{{ posts[0].title }}</p>
						</div>
					</article></a
				>

				<a v-bind:href="posts[1].link" target="_blank">
					<article class="mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
						<div class="min-h-80 overflow-hidden">
							<img v-bind:src="posts[1].thumbnail" />
						</div>
						<div class="flex justify-between">
							<p class="m-4 text-xl text-gray-700">{{ posts[1].title }}</p>
						</div>
					</article></a
				>

				<a v-bind:href="posts[2].link" target="_blank">
					<article class="mx-auto w-full shadow-2xl  transform duration-500 hover:-translate-y-2 cursor-pointer bg-white">
						<div class="min-h-80 overflow-hidden">
							<img  v-bind:src="posts[2].thumbnail" />
						</div>
						<div class="flex justify-between">
							<p class="m-4 text-xl text-gray-700">{{ posts[2].title }}</p>
						</div>
					</article></a
				>
	
			</section>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				posts: [],
			};
		},
		methods: {
			async fetchdata() {
				const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40moneymafia');

				this.posts = response.data.items;
			},
		},
		async mounted() {
			await this.fetchdata();
		},
	};
</script>
