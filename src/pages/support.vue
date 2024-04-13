<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">ONLINE SUPPORT SYSTEM</h2>
		<ul>
			<li>Handle all your correspondence online.</li>
			<li>Making you to learn this important administrative technique in association with us.</li>
			<li>Academic input by clarifying the queries of the teachers for creating a better learning environment.</li>
			<li>Clarifying all doubts of understanding of the Government rules &amp; regulations and saving your valuable time and money to avoid future litigation.</li>
			<li>Making your institution a smart institution in every field.</li>
		</ul>
	</div>
	<Footer />
</template>
<style scoped>
p {
	@apply p-3;
}
h3{
	@apply mb-2 text-lg font-semibold text-gray-900;
}
ul {
	@apply ml-8 max-w-md space-y-1 text-gray-800 list-disc;
}
</style>

<route lang="yaml">
name: support
</route>
