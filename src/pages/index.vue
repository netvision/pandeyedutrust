<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen">
		<!-- Main Content Section -->
		<div class="section-container">
			<!-- Welcome Section -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h2 class="section-title gradient-text mb-6">
					Welcome to Pandey Education Trust
				</h2>
				<p class="section-subtitle max-w-3xl mx-auto">
					Empowering educational institutions with expert consultancy services for over 18 years
				</p>
			</div>

			<!-- Content Cards -->
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
				<!-- Card 1 -->
				<div class="glass-card p-8 hover-lift animate-fade-in">
					<div class="flex items-start gap-4">
						<div class="bg-gradient-to-br from-primary-500 to-primary-600 p-3 rounded-xl flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-heading font-bold text-neutral-900 mb-3">Specialized Expertise</h3>
							<p class="text-neutral-700 leading-relaxed">
								The field of education in today's environment has become very specialized. This requires the service of people knowledgeable with practice, experience, and educational background to develop the standards needed to maintain that competitive edge for school owners as well as for the maximum development of the child.
							</p>
						</div>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="glass-card p-8 hover-lift animate-fade-in" style="animation-delay: 0.1s;">
					<div class="flex items-start gap-4">
						<div class="bg-gradient-to-br from-accent-500 to-accent-600 p-3 rounded-xl flex-shrink-0">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
						<div class="flex-1">
							<h3 class="text-xl font-heading font-bold text-neutral-900 mb-3">18 Years of Excellence</h3>
							<p class="text-neutral-700 leading-relaxed">
								It is in this scenario that Pandey Education Trust offers experience and expertise for the last 18 years. Pandey Education Trust (PET) – a non-profitable charitable trust was conceptualized by Ms. Indu Pandey, born in 1965 and a social worker by profession, in the memory of her late father-in-law Sri S. N. Pandey, an educationist of repute and a social worker to further the cause of quality education in general and quality school education in particular across the country.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Registration Details Section -->
			<div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 animate-fade-in-up">
				<h3 class="text-2xl font-heading font-bold text-neutral-900 mb-6 text-center">
					Official Registration & Recognition
				</h3>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<!-- Registration Card 1 -->
					<div class="bg-white rounded-xl p-6 shadow-md">
						<div class="flex items-center gap-3 mb-3">
							<div class="bg-primary-100 p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</div>
							<h4 class="font-semibold text-neutral-900">Initial Registration</h4>
						</div>
						<p class="text-sm text-neutral-700 leading-relaxed">
							Formerly registered with the Sub-Registrar, Government of Rajasthan, Jaipur dated: <span class="font-semibold text-primary-600">4th May 2001</span>
						</p>
					</div>

					<!-- Registration Card 2 -->
					<div class="bg-white rounded-xl p-6 shadow-md">
						<div class="flex items-center gap-3 mb-3">
							<div class="bg-accent-100 p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h4 class="font-semibold text-neutral-900">Final Registration</h4>
						</div>
						<p class="text-sm text-neutral-700 leading-relaxed">
							Registered with Sub-commissioner, Devsthan Bibhag (Charity Commissioner) Government of Rajasthan on Serial Number <span class="font-semibold text-accent-600">235 dated 05.07.2011</span>
						</p>
					</div>

					<!-- Tax Exemption Card -->
					<div class="bg-white rounded-xl p-6 shadow-md md:col-span-2">
						<div class="flex items-center gap-3 mb-3">
							<div class="bg-green-100 p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h4 class="font-semibold text-neutral-900">80G Tax Exemption</h4>
						</div>
						<p class="text-sm text-neutral-700 leading-relaxed">
							PET has also qualified for 80G Exemption with the CIT, Jaipur vide their order no. <span class="font-semibold">AC-II/ (Ta & Naya)/80G/07-08/965 dated 31.07.2007</span> and through their letter no. <span class="font-semibold">AC/JPR-II/AC(Ta & Naya) 133/2009-10/1594 dated 03.02.10</span> they have informed that no further application is required for extension of exemption.
						</p>
					</div>
				</div>
			</div>
		</div>
	</main>
	
	<Footer />
</template>

<style scoped>
/* Animation delays for staggered effects */
.animate-fade-in:nth-child(1) {
	animation-delay: 0s;
}

.animate-fade-in:nth-child(2) {
	animation-delay: 0.1s;
}
</style>

<route lang="yaml">
name: home
</route>
