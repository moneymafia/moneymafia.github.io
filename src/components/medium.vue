<template>
	<div class="py-20 mx-auto">
		<section class="grid grid-cols-1 md:grid-cols-3 gap-2">
			<a v-bind:href="posts[0].link" target="_blank">
				<article class="mx-auto pb-2 transform duration-500 hover:-translate-y-1 cursor-pointer group">
					<div class="min-h-64 overflow-hidden">
						<img class="transform duration-300 group-hover:scale-110 h-64" v-bind:src="posts[0].thumbnail" />
					</div>
					<div class="flex justify-between my-5">
						<div class="text-base font-semibold">{{ posts[0].title }}</div>
					</div>
				</article></a
			>
			<a v-bind:href="posts[1].link" target="_blank">
				<article class="mx-auto pb-2 transform duration-500 hover:-translate-y-1 cursor-pointer group">
					<div class="min-h-64 overflow-hidden">
						<img class="transform duration-300 group-hover:scale-110 h-64" v-bind:src="posts[1].thumbnail" />
					</div>
					<div class="flex justify-between my-5">
						<div class="text-base font-semibold">{{ posts[1].title }}</div>
					</div>
				</article></a
			>
			<a v-bind:href="posts[2].link" target="_blank">
				<article class="mx-auto pb-2 transform duration-500 hover:-translate-y-1 cursor-pointer group">
					<div class="min-h-64 overflow-hidden">
						<img class="transform duration-300 group-hover:scale-110 h-64" v-bind:src="posts[2].thumbnail" />
					</div>
					<div class="flex justify-between my-5">
						<div class="text-base font-semibold">{{ posts[2].title }}</div>
					</div>
				</article></a
			>
		</section>
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
