<template>
	<div class="px-5 py-10 container mx-auto max-w-7xl">
		<div class="flex md:flex-row flex-col items-center" @click="ofs" @mouseenter="ofs">
			<div class="md:w-1/2 p-5">
				<lottie-player class="object-cover object-center" autoplay="" loop="" mode="normal" src="img/mail.json" background="transparent"></lottie-player>
			</div>

			<div class="md:w-1/2 p-5">
				<p class="text-5xl font-bold uppercase text-gray-400 py-10"><span class="text-white bg-gray-400">Contact</span> US</p>

				<p class="text-2xl font-bold uppercase text-gray-400">{{ mail }}</p>
			</div>
		</div>
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
