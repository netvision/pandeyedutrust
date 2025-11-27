<script setup>
	useHead({
		title: 'Pandey Education Trust',
	});
</script>

<template>
	<AppHeader :show-carousel="true" />
	
	<main class="min-h-screen">
		<!-- Main Content Section -->
		<div class="section-container">
			<!-- Welcome Section -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h2 class="section-title gradient-text mb-6">
					Welcome to Pandey Education Trust
				</h2>
				<p class="section-subtitle max-w-3xl mx-auto">
					Empowering educational institutions with expert consultancy services for over 30 years
				</p>
			</div>

			<!-- Indu Pandey - Founder (Special Card) -->
			<div class="relative animate-fade-in mb-12">
				<!-- Golden gradient border wrapper -->
				<div class="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-2xl blur-sm opacity-75"></div>
				<div class="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
					<!-- Premium header banner -->
					<div class="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-b-2 border-amber-200 px-8 py-4">
						<div class="flex items-center gap-3">
							<div class="bg-gradient-to-br from-amber-500 to-yellow-600 p-2 rounded-lg">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
								</svg>
							</div>
							<div>
								<p class="text-amber-900 font-bold text-lg">Founder</p>
								<p class="text-amber-700 text-sm">In Loving Memory</p>
							</div>
						</div>
					</div>
					
					<div class="md:flex">
						<div class="md:flex-shrink-0 relative">
							<img class="h-80 w-full object-cover md:h-full md:w-80" src="/mrs-indu-pandey.jpg" alt="Ms. Indu Pandey">
							<!-- Image overlay gradient -->
							<div class="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
						</div>
						<div class="p-8 bg-gradient-to-br from-white via-amber-50/30 to-white">
							<div class="mb-6">
								<h2 class="text-3xl font-heading font-bold bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 bg-clip-text text-transparent">
									Late Ms. Indu Pandey
								</h2>
								<p class="text-sm text-neutral-600 mt-2 font-medium">(13.01.1965 - 01.11.2024)</p>
								<div class="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-300 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
									</svg>
									<span class="text-amber-900 font-bold text-sm">Visionary Founder</span>
								</div>
							</div>
							<div class="text-neutral-700 space-y-4 text-sm leading-relaxed">
								<p class="border-l-4 border-amber-400 pl-4 italic">
									A social worker by profession, conceived formation of Pandey Education Trust in the year 1995 in the memory of her late father-in-law Sri S. N. Pandey, an educationist of repute and a social worker. Started in a small way in her native village in Bihar, the organization has grown having five technical members on its Board who are known figure in School & College education taking care of 16 ongoing projects.
								</p>
								<p>Ms. Pandey was having expertise in HR and provided a support to its member and getting the work completed according to clients' suitability. She had inbuilt leadership quality to handle such assignments.</p>
								<p>She had authored six books and her 15 research papers had been published in Journals of repute on modern trends in education. She was pioneer in establishing "Synchronized Study System" in her projects.</p>
							</div>
						</div>
					</div>
				</div>
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
							<h3 class="text-xl font-heading font-bold text-neutral-900 mb-3">30 Years of Excellence</h3>
							<p class="text-neutral-700 leading-relaxed">
								It is in this scenario that Pandey Education Trust offers experience and expertise for the last 30 years. Pandey Education Trust (PET) – a non-profitable charitable trust was conceptualized by Ms. Indu Pandey, born in 1965 and a social worker by profession, in the memory of her late father-in-law Sri S. N. Pandey, an educationist of repute and a social worker to further the cause of quality education in general and quality school education in particular across the country.
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
