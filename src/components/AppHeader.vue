<script setup>
import headerImg from "@/assets/header.jpg"
import call from "@/assets/phone-call.svg"

const menuItems = [
        { label: 'Home', url: '/' },
        {
          label: 'Services Offered',
          subMenu: [
            { label: 'Consultancy Services', url: '/services' },
            { label: 'Staff Recruitment', url: '/staff-recruitment' },
            { label: 'Staff Training', url: '/staff-training' },
			{ label: 'ONLINE SUPPORT SYSTEM', url: '/support' }
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
            { label: 'Demotion of Officiating Principal', url: '/' },
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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
	<header>
		<div class="w-full relative">
			<img class="w-full" :src="headerImg" />
			<div class="absolute top-2 left-4 text-sm font-bold z-50">
				<img :src="call" class="inline-block w-4 h-4" />: +91-9799298158
			</div>
		</div>
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex md:hidden">
				<button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
					<span class="sr-only">Open main menu</span>
					<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
					</svg>
				</button>
				</div>

				<!-- Menu items -->
				<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					<MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
				</div>
				</div>
			</div>
			</div>

			<!-- Mobile menu (visible on small screens) -->
			<div :class="mobileMenuOpen ? 'block' : 'hidden'" class="md:hidden">
			<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
				<MenuItem v-for="(item, index) in menuItems" :key="index" :item="item" />
			</div>
			</div>
		</nav>
	</header>
</template>

<style scoped>
</style>
