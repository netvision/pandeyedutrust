<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">Contact Us</h2>
		<h3>PANDEY EDUCATION TRUST</h3>
<p>(A TRUSTED NAME IN QUALITY EDUCATION CONSULTANCY SEVICES)</p>

<p>2, Puran Badi, Model Town C
Malviya Nagar, Jaipur – 302017, Rajasthan (INDIA)</p>

<p>Website: <a href="https://www.pandeyeducationtrust.org">www.pandeyeducationtrust.org</a></p>

<p>Email:<a href="mailto:edutrust@rediffmail.com"> edutrust@rediffmail.com</a></p>

<p>Ph/Fax: (0141)2750765, Mobile: 094140 47977</p>

<p>Contact Person:<span class="font-bold"> Dr A. K. Pandey, CEO</span></p>
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
name: contact
</route>
