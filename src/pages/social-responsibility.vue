<script setup>
	useHead({
		title: 'Social Responsibility - Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<!-- Page Title -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h1 class="section-title gradient-text mb-4">
					Social Responsibility
				</h1>
				<p class="section-subtitle max-w-3xl mx-auto">
					Empowering rural communities through quality education
				</p>
			</div>

			<!-- Main Content -->
			<div class="max-w-4xl mx-auto space-y-8">
				<!-- Mission Statement -->
				<div class="glass-card p-8 md:p-12 animate-fade-in">
					<div class="space-y-6 text-neutral-700 leading-relaxed">
						<p class="text-lg">
							The main aim of Pandey Education Trust is to provide quality education. With its little resource but great partnership with Dalmia Education Trust, it started its pilot project called <strong class="text-primary-700">"Angna Vidyalaya"</strong> in nearby villages of Chirawa.
						</p>

						<p>
							Through this mission Angna Vidyalaya we are trying to give quality education to the kids studying in government schools in rural areas in their own village. We are trying to empower rural kids and women with knowledge and confidence to compete them with their urban counterpart and upcoming future challenges in life.
						</p>

						<p>
							We have been organizing Teachers training programs and Computer training programs time to time, to improve the teaching skills of Angna Vidyalaya teachers. We have focused on <strong>Math</strong>, <strong>Science</strong> and <strong>English</strong> to teach the kids in Angna Vidyalaya.
						</p>

						<p>
							You are requested to see the attached video to get the idea in detail and we need your feedback for our own improvement to serve them who actually needs us.
						</p>
					</div>
				</div>

				<!-- Video Section -->
				<div class="glass-card p-8 animate-fade-in" style="animation-delay: 0.1s;">
					<h2 class="text-2xl font-heading font-bold text-neutral-900 mb-6 text-center">
						Watch Our Impact
					</h2>
					<div class="aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
						<iframe 
							class="w-full h-full" 
							src="https://www.youtube.com/embed/Voink0eyBmY?si=dsForRRKc8VHBFHb" 
							title="Angna Vidyalaya - Social Responsibility" 
							frameborder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							referrerpolicy="strict-origin-when-cross-origin" 
							allowfullscreen
						></iframe>
					</div>
				</div>

				<!-- Call to Action -->
				<div class="p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-l-4 border-primary-600 text-center animate-fade-in" style="animation-delay: 0.2s;">
					<h3 class="text-xl font-heading font-bold text-neutral-900 mb-3">
						Join Us in Making a Difference
					</h3>
					<p class="text-neutral-700 mb-6">
						Your support can help us reach more children in rural areas and provide them with quality education.
					</p>
					<a href="/contact" class="btn-primary inline-block">
						Get Involved
					</a>
				</div>
			</div>
		</div>
	</main>
	
	<Footer />
</template>

<route lang="yaml">
name: social-responsibility
</route>
