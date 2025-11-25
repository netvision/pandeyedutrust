<script setup>
	useHead({
		title: 'Our Team - Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<!-- Page Title -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h1 class="section-title gradient-text mb-4">
					Our Team
				</h1>
				<p class="section-subtitle max-w-3xl mx-auto">
					Meet our experienced professionals dedicated to quality education
				</p>
			</div>

			<!-- Team Members -->
			<div class="max-w-5xl mx-auto space-y-8">
				
			<!-- Indu Pandey - Founder (Special Card) -->
			<div class="relative animate-fade-in">
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

				<!-- Dr. A.K. Pandey - CEO -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.1s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img class="h-64 w-full object-cover md:h-full md:w-64" src="/dr-akpandey.jpg" alt="Dr. A.K. Pandey">
						</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Dr. A.K. Pandey</h2>
								<p class="text-primary-600 font-semibold mt-2">CEO</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>With a distinguished career in education, Dr Pandey began as a teacher in Calcutta and later served as a Lecturer in Education Management at the Institute of Educational Administration, Calcutta. He has led institutions such as Diamond Mining Project Panna, Bihar Education Project (World Bank), Hermann Gmeiner Schools, Delhi, and Maheshwari Public School, Jaipur.</p>
								<p>He conceptualized the idea of Pandey Education Trust in 2005 with his late wife Ms. Indu Pandey for achieving quality in class rooms. PET till date has worked with more than 75 schools across India and has been a role model.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Mr. Saurov -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.2s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img class="h-64 w-full object-cover md:h-full md:w-64" src="/sourav.jpg" alt="Mr. Saurov">
						</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Mr. Saurov</h2>
								<p class="text-primary-600 font-semibold mt-2">Skill Development Resource Person & Project Development Head</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>A member of the International Skill Development Corporation (ISDC), he actively trains educators and students nationwide, improving education quality and capacity.</p>
								<p>A humorous and resourceful programme manager with a strong background in training, he manages operations seamlessly under pressure and consistently delivers client-focused projects.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Mr. Pavan Kumar - NEW -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.3s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
					<img class="h-64 w-full object-cover md:h-full md:w-64" src="/pavan.jpg" alt="Mr. Pavan Kumar">
				</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Mr. Pavan Kumar</h2>
								<p class="text-primary-600 font-semibold mt-2">Expert on Affiliation Boards & CWSN Resource Person</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>Principal of Nethra Vidyalaya (CWSN School & Junior College), he is a seasoned education leader with deep expertise in the CBSE and ICSE board affiliation process. Over the years, he has provided valuable guidance and technical support to numerous institutions in securing their board affiliations.</p>
								<p>His professional strengths extend to inclusive education and child psychology, particularly focusing on the learning needs of differently-abled students.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Ms. Shalini -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.4s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img class="h-64 w-full object-cover md:h-full md:w-64" src="/ms-shalini.jpg" alt="Ms. Shalini">
						</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Ms. Shalini</h2>
								<p class="text-primary-600 font-semibold mt-2">Teacher Training Head & Training - Science</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>A dedicated consultant who empowers teachers through application-based training and gradual independence strategies. An M. Tech (Bio Technology) from JIIT, Noida, and MBA, she is a trainer of teachers to achieve the best through application type questions.</p>
								<p>She sets the goal and encourages her team members to achieve the same. She has an approach of phased withdrawal from the system by properly empowering her team members.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Ms. Jayati Pandey -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.6s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img class="h-64 w-full object-cover md:h-full md:w-64" src="/msjayati.jpg" alt="Ms. Jayati Pandey">
						</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Ms. Jayati Pandey</h2>
								<p class="text-primary-600 font-semibold mt-2">Training - Mathematics</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>A young lady with an M. Sc. (Mathematics) & B.Ed. believes in the theory that anyone can do well in Mathematics and those who are confident of solving numerical are good at getting solutions to the problem.</p>
								<p>She creates an environment of team working and helps everyone to learn everything for the betterment of the project.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Mr. Shashank -->
				<div class="glass-card overflow-hidden hover-lift animate-fade-in" style="animation-delay: 0.5s;">
					<div class="md:flex">
						<div class="md:flex-shrink-0">
					<img class="h-64 w-full object-cover md:h-full md:w-64" src="/shashank.jpg" alt="Mr. Shashank">
						</div>
						<div class="p-8">
							<div class="mb-4">
								<h2 class="text-2xl font-heading font-bold text-neutral-900">Mr. Shashank</h2>
								<p class="text-primary-600 font-semibold mt-2">Project Strategist & Training - Pre-Primary</p>
							</div>
							<div class="text-neutral-700 space-y-3 text-sm leading-relaxed">
								<p>A dynamic Project Strategist & Trainer specializing in pre-primary education, this young professional brings energy and innovation to every institution he joins.</p>
								<p>Renowned for implementing effective, proven strategies, he consistently helps schools achieve their projected academic and developmental goals.</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Additional Note -->
				<div class="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl">
					<p class="text-neutral-700 italic">
						Not only this there are persons from various field whose expertise help PET to achieve its larger Goal.
					</p>
				</div>

			</div>
		</div>
	</main>
	
	<Footer />
</template>

<route lang="yaml">
name: team
</route>
