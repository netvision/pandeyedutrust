<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">THE RANGE AND TYPE OF CONSULTENCY SERVICES OFFERED</h2>
		<h3>DEVELOPING NEW SCHOOL</h3>
		<ul>
			<li>Montessori Schools</li>
			<li>Primary Schools</li>
			<li>Secondary Schools</li>
			<li>Senior Secondary Schools</li>
			<li>Day Boarding schools</li>
			<li>Residential Public Schools</li>
		</ul>
		<h3>REVAMPING EXISTING EDUCATIONAL INSTITUTIONS</h3>
		<ul>
			<li>Opening Branches for any type of existing Educational Institute.</li>
			<li>Preparing feasibility reports for any Educational Institution.</li>
			<li>Revamping any educational system</li>
		</ul>
		<h3>SPECIALIZED JOB OFFERED</h3>
		<ul>
			<li>Preparation of a DPR (Detailed Project Report) on the basis of BLS.</li>
			<li>Documentation for registration / NOC with State Govt.</li>
			<li>Documentation for affiliation from CBSE/ISCE/State Board.</li>
			<li>Computerization of the administrative and academic fields of work.</li>
			<li>Development of Reporting Systems.</li>
			<li>Planning of publicity campaigns.</li>
			<li>Building of the school image.</li>
			<li>Conduct of Entrance exams.</li>
			<li>Staff Recruitment.</li>
			<li>Orientation and training of academic staff in various fields.</li>
			<li>Academic Audit.</li>
			<li>Development of Evaluation systems for students.</li>
			<li>Development of performance analyzers for academic staff.</li>
			<li>Organization of School transport systems</li>
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
name: services
</route>
