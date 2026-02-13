<script setup>
	useHead({
		title: 'Blog - Pandey Education Trust',
	});

	// Blog articles data - will be moved to database later
	const articles = [
		{
			id: 2,
			slug: 'why-static-ip-required-for-cbse-osm',
			title: 'Why Static IP is Required for CBSE On-Screen Marking (OSM) 2026',
			summary: 'Many evaluation centres face login failures and disconnections during CBSE OSM mock runs. The real issue is not bandwidth but the absence of a Public Static IP. Understand why CBSE demands a static IP, how to procure it, and how it stabilises digital evaluation.',
			author: 'Dr A. K. Pandey',
			date: '12.02.2026',
			category: 'Digital Infrastructure'
		},
		{
			id: 1,
			slug: 'cbse-on-screen-marking-2026',
			title: 'CBSE On-Screen Marking Scheme 2026: A Complete Guide for Class 12 Board Exams',
			summary: 'CBSE has introduced a very important update for the Class 12 Board Exams 2026 — the On-Screen Marking (OSM) system. This is not a small procedural change; it is a major step toward digital evaluation in India's school education system. Learn how this new system works, its benefits, challenges, and what schools need to prepare.',
			author: 'Dr A. K. Pandey',
			date: '10.02.2026',
			category: 'CBSE Updates'
		}
	];
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<!-- Page Title -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h1 class="section-title gradient-text mb-4">
					Blog
				</h1>
				<p class="section-subtitle max-w-3xl mx-auto">
					Latest insights and updates on education
				</p>
			</div>

			<!-- Blog Articles List -->
			<div class="max-w-4xl mx-auto space-y-6">
				<article 
					v-for="article in articles" 
					:key="article.id"
					class="glass-card p-8 md:p-10 animate-fade-in hover-lift transition-all duration-300"
				>
					<!-- Article Header -->
					<div class="mb-6">
						<!-- Category Badge -->
						<span class="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full mb-3">
							{{ article.category }}
						</span>
						
						<!-- Title -->
						<h2 class="text-2xl md:text-3xl font-heading font-bold text-neutral-900 mb-3 hover:text-primary-600 transition-colors">
							<router-link :to="`/${article.slug}`">
								{{ article.title }}
							</router-link>
						</h2>

						<!-- Meta Info -->
						<div class="flex items-center gap-4 text-sm text-neutral-600">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								{{ article.author }}
							</span>
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								{{ article.date }}
							</span>
						</div>
					</div>

					<!-- Article Summary -->
					<p class="text-neutral-700 leading-relaxed mb-6">
						{{ article.summary }}
					</p>

					<!-- Read More Link -->
					<router-link 
						:to="`/${article.slug}`"
						class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
					>
						Read Full Article
						<svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</router-link>
				</article>

				<!-- Empty State (if no articles) -->
				<div v-if="articles.length === 0" class="text-center py-16">
					<svg class="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
					</svg>
					<p class="text-neutral-500 text-lg">No articles yet. Check back soon!</p>
				</div>
			</div>
		</div>
	</main>
	
	<Footer />
</template>

<style scoped>
article:hover h2 {
	color: #2563eb;
}
</style>
