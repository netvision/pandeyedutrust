<script setup>
import headerImg from "@/assets/header.jpg"
import call from "@/assets/phone-call.svg"

// Props
const props = defineProps({
	showCarousel: {
		type: Boolean,
		default: false
	}
});

const menuItems = [
        { label: 'Home', url: '/' },
        {
          label: 'Services Offered',
          subMenu: [
            { label: 'CBSE/ICSE Consultancy Services', url: '/cbse-icse-consultancy' },
            { label: 'In-House Intervention Partnership', url: '/inhouse-intervention' },
            { label: 'Other Consultancy Services', url: '/other-consultancy' },
            { label: 'Staff Recruitment', url: '/staff-recruitment' },
            { label: 'Staff Training', url: '/staff-training' },
			{ label: 'Online Support System', url: '/support' }
          ],
          showArrow: true
        },
        { label: 'The Team', url: '/team' },
        { label: 'Portfolio', url: '/portfolio' },
		{
          label: 'Case Studies',
          subMenu: [
            { label: 'Bus facility to Staff', url: '/bus-facility' },
            { label: 'Maheshwari Public School Computerisation', url: '/maheshwari-computerisation' },
            { label: 'Demotion of Officiating Principal', url: '/demotion-principal' },
			{ label: 'Demotion of Vice Principal', url: '/demotion-vice-principal' },
			{ label: 'Administrators are Born not Trained', url: '/admin-are-born' }
          ],
          showArrow: true
        },
		{ label: 'Published Papers', url: '/published-papers' },
		{ label: 'Social Responsibility', url: '/social-responsibility' },
		{ label: 'Contact', url: '/contact' },
      ]

	  const mobileMenuOpen = ref(false);
	  const scrolled = ref(false);
	  const currentSlide = ref(0);

	  // Carousel slides - using slide1.png
	  const slides = [
		{
			image: '/slide1.png',
			title: 'Pandey Education Trust',
			subtitle: 'A Trusted Name in Quality Education Consultancy'
		},
		{
			image: '/slide1.png',
			title: 'Expert Consultancy Services',
			subtitle: 'Empowering Educational Institutions for Over 30 Years'
		},
		{
			image: '/slide1.png',
			title: 'Quality Education',
			subtitle: 'Developing Standards for Maximum Child Development'
		}
	  ];

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const nextSlide = () => {
	currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
	currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
	currentSlide.value = index;
};

// Auto-advance carousel
let carouselInterval;
onMounted(() => {
	// Auto-advance every 5 seconds
	carouselInterval = setInterval(() => {
		nextSlide();
	}, 5000);

	// Scroll listener for navbar
	const handleScroll = () => {
		scrolled.value = window.scrollY > 20;
	};
	window.addEventListener('scroll', handleScroll);
	
	onUnmounted(() => {
		clearInterval(carouselInterval);
		window.removeEventListener('scroll', handleScroll);
	});
});
</script>

<template>
	<header class="relative">
		<!-- Top Navigation Bar (Above Carousel) -->
		<nav 
			:class="[
				'sticky top-0 z-50 transition-all duration-300',
				scrolled 
					? 'bg-white shadow-lg' 
					: 'bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900'
			]"
		>
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<!-- Two-column layout: Left = Logo, Right = Heading + Menu -->
			<div class="flex items-end gap-6 pt-1 pb-2">
				<!-- Left Column: Logo -->
				<div class="flex-shrink-0">
					<a href="/" class="flex items-center">
						<img 
							src="/pet-logo.jpg" 
							alt="Pandey Education Trust" 
							class="h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-200 hover:scale-105"
						/>
					</a>
				</div>

				<!-- Right Column: Heading + Menu (stacked vertically) -->
			<div class="flex-1 flex flex-col justify-end">
					<!-- Organization Name -->
				<div class="hidden md:flex px-6 py-1">
						<h1 
							:class="[
								'font-heading font-bold leading-tight transition-all duration-300',
								scrolled 
									? 'text-primary-800 text-xl lg:text-2xl xl:text-3xl' 
									: 'text-white text-xl lg:text-2xl xl:text-3xl drop-shadow-lg'
							]"
						>
							PANDEY EDUCATION TRUST
						</h1>
					</div>

					<!-- Desktop Menu -->
					<div class="hidden md:flex px-2">
						<div class="flex items-center space-x-1">
							<MenuItem 
								v-for="(item, index) in menuItems" 
								:key="index" 
								:item="item"
								:scrolled="scrolled"
							/>
						</div>
					</div>
				</div>

				<!-- Mobile Menu Button -->
				<div class="flex md:hidden items-center">
					<button 
						@click="toggleMobileMenu" 
						:class="[
							'inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200',
							scrolled 
								? 'text-primary-600 hover:bg-primary-50' 
								: 'text-white hover:bg-white/10'
						]"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg 
							class="block h-6 w-6 transition-transform duration-200" 
							:class="{ 'rotate-90': mobileMenuOpen }"
							xmlns="http://www.w3.org/2000/svg" 
							fill="none" 
							viewBox="0 0 24 24" 
							stroke="currentColor"
						>
							<path 
								stroke-linecap="round" 
								stroke-linejoin="round" 
								stroke-width="2" 
								:d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu Dropdown -->
				<transition
					enter-active-class="transition duration-200 ease-out"
					enter-from-class="opacity-0 -translate-y-2"
					enter-to-class="opacity-100 translate-y-0"
					leave-active-class="transition duration-150 ease-in"
					leave-from-class="opacity-100 translate-y-0"
					leave-to-class="opacity-0 -translate-y-2"
				>
					<div v-show="mobileMenuOpen" class="md:hidden pb-4">
						<div class="space-y-1">
							<MenuItem 
								v-for="(item, index) in menuItems" 
								:key="index" 
								:item="item"
								:scrolled="scrolled"
								mobile
							/>
						</div>
					</div>
				</transition>
			</div>
		</nav>

		<!-- Carousel/Hero Section (Below Navigation) - Only on Home Page -->
		<div v-if="showCarousel" class="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-neutral-900">
			<!-- Slides -->
			<div class="relative w-full h-full">
				<transition-group
					name="carousel"
					tag="div"
					class="relative w-full h-full"
				>
					<div
						v-for="(slide, index) in slides"
						:key="index"
						v-show="currentSlide === index"
						class="absolute inset-0 w-full h-full"
					>
						<!-- Slide Image -->
						<img 
							:src="slide.image" 
							:alt="slide.title"
							class="w-full h-full object-cover"
						/>
						
						<!-- Gradient Overlay -->
						<div class="absolute inset-0 bg-gradient-to-r from-primary-900/70 via-primary-800/50 to-transparent"></div>
						
						<!-- Slide Content -->
						<div class="absolute inset-0 flex items-center">
							<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
								<div class="max-w-2xl animate-fade-in-up">
									<h1 class="text-white font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl">
										{{ slide.title }}
									</h1>
									<p class="text-white/95 text-base md:text-xl lg:text-2xl font-medium drop-shadow-lg mb-6">
										{{ slide.subtitle }}
									</p>
									<div class="flex gap-4">
										<a href="/cbse-icse-consultancy" class="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600">
											Our Services
										</a>
										<a href="/contact" class="btn-primary">
											Get in Touch
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</transition-group>
			</div>

			<!-- Carousel Controls -->
			<div class="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
				<button 
					@click="prevSlide"
					class="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
					aria-label="Previous slide"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>
				<button 
					@click="nextSlide"
					class="pointer-events-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
					aria-label="Next slide"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>

			<!-- Carousel Indicators -->
			<div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
				<button
					v-for="(slide, index) in slides"
					:key="index"
					@click="goToSlide(index)"
					:class="[
						'h-2 rounded-full transition-all duration-300',
						currentSlide === index 
							? 'w-8 bg-white' 
							: 'w-2 bg-white/50 hover:bg-white/75'
					]"
					:aria-label="`Go to slide ${index + 1}`"
				></button>
			</div>
		</div>
	</header>
</template>

<style scoped>
/* Carousel transitions */
.carousel-enter-active,
.carousel-leave-active {
	transition: opacity 0.8s ease, transform 0.8s ease;
}

.carousel-enter-from {
	opacity: 0;
	transform: translateX(100%);
}

.carousel-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}

/* Button styles */
.btn-outline {
	@apply px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-300 ease-out;
}
</style>


