<template>
	<div class="py-40" @click="ofs" @mouseenter="ofs">
		<p class="text-3xl font-mono uppercase py-5">EMAIL <span class="text-white bg-red-300">US</span></p>
		<p class="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">{{ mail }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mail: 'click to view',
			};
		},
		methods: {
			async ofs() {
				if (Math.random() > 0.5) {
					this.mail = 'moneymafia.eth@protonmail.com';
				} else {
					this.mail = 'moneymafia.eth@pm.me';
				}
			},
		},
	};
</script>
