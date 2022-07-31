<template>
	<div>
		<div class="py-40">
			<p class="text-3xl font-mono uppercase py-10">
				1 MMETH <span class="text-white bg-red-300">{{ price }} USD</span>
			</p>
			<p class="text-3xl font-mono uppercase py-10">
				Supply <span class="text-white bg-red-300">{{ getTokenSupply }}</span> MMETH
			</p>

			<a target="_blank" href="https://matcha.xyz/markets/137/0x0fc7fe06b0b0de5c920646b0f6422641a6f2be9f">
				<button
					type="button"
					class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
				>
					TRADE
				</button>
			</a>
			<a target="_blank" href="https://polygonscan.com/token/0x0fc7fe06b0b0de5c920646b0f6422641a6f2be9f">
				<button
					type="button"
					class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
				>
					VIEW
				</button>
			</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	async function getTokenPrice() {
		const response = await axios.get(`https://polygon.api.0x.org/swap/v1/quote?buyToken=USDT&sellToken=0x0fc7fe06b0b0de5c920646b0f6422641a6f2be9f&sellAmount=100000000000000000`);

		return response.data.price;
	}

	async function getTokenSupply() {
		const response = await axios.get(`https://api.polygonscan.com/api?module=stats&action=tokensupply&contractaddress=0x0fc7fe06b0b0de5c920646b0f6422641a6f2be9f`);

		return parseInt(response.data.result / 1000000000000000000);
	}

	export default {
		data() {
			return {
				price: 0,
				getTokenSupply: 0,
			};
		},
		methods: {},
		created() {},
		async mounted() {
			this.price = await getTokenPrice();
			this.getTokenSupply = await getTokenSupply();
		},
	};
</script>
