<script setup>
	useHead({
		title: 'Online Support System - Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<!-- Page Title -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h1 class="section-title gradient-text mb-4">
					Online Support System
				</h1>
				<p class="section-subtitle max-w-3xl mx-auto">
					Comprehensive online support for modern educational institutions
				</p>
			</div>

			<!-- Main Content -->
			<div class="max-w-4xl mx-auto">
				<div class="glass-card p-8 md:p-12 animate-fade-in">
					<div class="space-y-4">
						<div class="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
							<div class="bg-primary-100 p-3 rounded-lg flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900 mb-2">Handle all your correspondence online</h3>
								<p class="text-neutral-600 text-sm">Streamline your communication and manage all correspondence efficiently through our online platform.</p>
							</div>
						</div>

						<div class="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
							<div class="bg-accent-100 p-3 rounded-lg flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900 mb-2">Learn important administrative techniques</h3>
								<p class="text-neutral-600 text-sm">Making you to learn this important administrative technique in association with us.</p>
							</div>
						</div>

						<div class="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
							<div class="bg-primary-100 p-3 rounded-lg flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900 mb-2">Academic input and support</h3>
								<p class="text-neutral-600 text-sm">Academic input by clarifying the queries of the teachers for creating a better learning environment.</p>
							</div>
						</div>

						<div class="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
							<div class="bg-accent-100 p-3 rounded-lg flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900 mb-2">Government rules & regulations clarity</h3>
								<p class="text-neutral-600 text-sm">Clarifying all doubts of understanding of the Government rules & regulations and saving your valuable time and money to avoid future litigation.</p>
							</div>
						</div>

						<div class="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow">
							<div class="bg-primary-100 p-3 rounded-lg flex-shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div>
								<h3 class="font-semibold text-neutral-900 mb-2">Smart institution transformation</h3>
								<p class="text-neutral-600 text-sm">Making your institution a smart institution in every field.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
	
	<Footer />
</template>

<route lang="yaml">
name: support
</route>
