<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto mb-10">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">STAFF TRAINING</h2>
		<p>Till date, PET has trained more than 2000 teachers and 10000 students in increasing their performance level. We conduct a full day interaction session divided into two parts 3 hours for students and 3 hours for teachers. In an interaction session a group of 150 participants is optimum. The school must arrange for power point presentation. We will cover the following areas:</p>

		<h3>EXCELLENCE IN TEACHING</h3>
		<ul>
			<li>Developing an Effective Style of Teaching</li>
			<li>Designing Teaching Plan</li>
			<li>Use of Audio-Visual Aids</li>
			<li>Effective Human Behaviour Inside and Outside the Classroom</li>
			<li>Administration of an Educational Institution</li>
			<li>Counseling Technique</li>
			<li>Dealing with Difficult Children</li>
		</ul>
		<h3>EXCELLENCE IN STUDY</h3>
		<ul>
			<li>How to Live 24 Hours a Day</li>
			<li>Time Savers</li>
			<li>When to and When not to study</li>
			<li>Managing Study Stress</li>
			<li>Managing Peer pressure</li>
			<li>Maximizing Performance.</li>
		</ul>
		<p>The programme utilizes a battery of methods including Lectures, Power Point Presentations, Case Studies and others.</p>
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
name: staff-training
</route>
