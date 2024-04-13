<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	<div class="content text-justify w-full md:w-4/5 p-6 m-auto">
		<h2 class="text-3xl border-b-2 pb-2 mb-5">Projects Profile</h2>
		<h3>COMPLETED PROJECTS</h3>
		<ul>
			<li>Academic consultancy completed for Sesomu School, Dungargarh, Bikaner</li>
			<li>Global Public School, Kota, Sister concern of Career Point</li>
			<li>Maheshwari Public School, Kota</li>
			<li>LBS School, Kota</li>
			<li>The Presidential School, Vishakhapattanam (A.P.)</li>
			<li>The Rainbow, Jhothwara, Jaipur.</li>
			<li>Dalmia Education Trust, Chirawa, Rajasthan</li>
			<li>B.L. Maheshwari Education Foundation, Bagar, Rajasthan.</li>
			<li>UKM Public School, Jaipur</li>
			<li>AVM Public School, Ahmedabad</li>
			<li>G S S Kolkata</li>
			<li>Satya Sai School, Rajahmundry, Andhra Pradesh</li>
		</ul>
		<h3>ONGOING PROJECTS</h3>
		<ul>
			<li>Veena Memorial Sewa Samiti Group of Institutions, Karuali, Rajasthan.</li>
			<li>Sankalp Academy, Jhalawar</li>
			<li>LBS School, Pratap Nagar, Jaipur</li>
			<li>Warren Academy, Kartarpura, Jaipur</li>
			<li>Bagaria Education Trust, Lakshmangarh, Sikar, Rajasthan</li>
			<li>Lady Anusuiya Education Trust, Jhalawar</li>
			<li>SR Public School, Kota</li>
			<li>Mangal Newton School, Bewar, Ajmer.</li>
			<li>Pollock’s school, Vishakhapatnam</li>
			<li>NRE School, Ransthalam, Andhra Pradesh</li>
			<li>MNP International School, Ghata Mehandipur Balaji, Dausa, Rajasthan</li>
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
name: portfolio
</route>
