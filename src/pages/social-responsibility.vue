<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">Social Responsibility</h2>
		<p>The main aim of Pandey Education Trust is to provide quality education. With its little resource but great partnership with Dalmia Education Trust, it started its pilot project called “Agna Vidyalaya” in nearby villages of Chirawa.</p>

<p>Through this mission Angna Vidyalaya we are trying to give quality education to the kids studying in government schools in rural areas in their own village. We are trying to empower rural kids and women with knowledge and confidence to compete them with their urban counterpart and upcoming future challenges in life.</p>

<p>We have been organizing Teachers training programs and Computer training programs time to time, to improve the teaching skills of Angna Vidyalaya teachers. We have focused on Math, Science and English to teach the kids in Angna Vidyalaya.</p>

<p>You are requested to see the attached video to get the idea in detail and we need your feedback for our own improvement to serve them who actually needs us.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Voink0eyBmY?si=dsForRRKc8VHBFHb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
	@apply ml-8 pl-4 space-y-1 text-gray-800 list-disc;
}
ol {
	@apply ml-8 pl-4 space-y-1 text-gray-800 list-decimal;
}
a {
	@apply text-blue-600 hover:text-blue-900 hover:font-bold;
}
</style>

<route lang="yaml">
name: social-responsibility
</route>
