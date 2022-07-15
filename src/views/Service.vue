<template>
	<div>
		<div class="py-40">
			<p class="text-3xl font-mono uppercase">We help <span class="text-white bg-red-300">IDEAS</span> that empower the blockchain technology.</p>
		</div>

		<div class="py-10">
			<section class="grid lg:grid-cols-3 grid-cols-1 gap-10 antialiased">
				<div v-for="(collapse, index) of collapses" :key="index">
					<div class="p-2 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
						<a class="block p-6 bg-white sm:p-8 rounded-xl">
							<div class="mt-16 sm:pr-8">
								<h5 class="text-2xl font-bold text-gray-900">{{ collapse.title }}</h5>
								<p class="mt-2 text-base text-gray-500">{{ collapse.text }}</p>
							</div>
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				collapses: [
					{
						title: 'DAPP Development',
						text: 'A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.',
					},

					{
						title: 'Hacking / RE',
						text: 'A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.',
					},
					{
						title: 'Web 3.0 Development',
						text: 'Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.',
					},
					{
						title: 'Bot/Script Development',
						text: 'Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.',
					},
					{
						title: 'Blockchain Development',
						text: 'A blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe.',
					},
					{
						title: 'Project Audit',
						text: 'A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.',
					},
					{
						title: 'Smart Contract Development',
						text: 'A smart contract is a set of computer code that runs on the blockchain network.',
					},
					{
						title: 'Graph Protocol Development',
						text: 'The Graph is an indexing protocol for querying networks like Ethereum and IPFS.',
					},
				],
			};
		},
	};
</script>
