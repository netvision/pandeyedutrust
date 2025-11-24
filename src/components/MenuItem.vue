<template>
	<div v-if="item.subMenu && item.subMenu.length > 0" class="relative group">
		<button 
			@click="toggleDropdown"
			:class="[
				'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1',
				mobile ? 'w-full justify-between' : '',
				scrolled 
					? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50' 
					: 'text-white hover:bg-white/10',
				dropdownOpen && !scrolled ? 'bg-white/10' : '',
				dropdownOpen && scrolled ? 'bg-primary-50 text-primary-600' : ''
			]"
		>
			<span>{{ item.label }}</span>
			<svg 
				v-if="item.showArrow" 
				xmlns="http://www.w3.org/2000/svg" 
				class="h-4 w-4 transition-transform duration-200" 
				:class="{ 'rotate-180': dropdownOpen }"
				viewBox="0 0 20 20" 
				fill="currentColor"
			>
				<path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
			</svg>
		</button>
		
		<!-- Dropdown Menu -->
		<transition
			enter-active-class="transition duration-200 ease-out"
			enter-from-class="opacity-0 scale-95 -translate-y-2"
			enter-to-class="opacity-100 scale-100 translate-y-0"
			leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100 scale-100 translate-y-0"
			leave-to-class="opacity-0 scale-95 -translate-y-2"
		>
			<div 
				v-show="dropdownOpen" 
				:class="[
					'absolute mt-2 rounded-xl shadow-xl overflow-hidden z-50',
					mobile ? 'left-0 right-0 mx-4' : 'left-0 min-w-[240px]',
					'bg-white border border-neutral-200'
				]"
			>
				<a 
					v-for="(submenuItem, index) in item.subMenu" 
					:key="index" 
					:href="submenuItem.url" 
					class="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150 border-b border-neutral-100 last:border-b-0"
				>
					{{ submenuItem.label }}
				</a>
			</div>
		</transition>
	</div>
	
	<!-- Simple Link -->
	<a 
		v-else 
		:href="item.url" 
		:class="[
			'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
			mobile ? 'block w-full text-left' : '',
			scrolled 
				? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50' 
				: 'text-white hover:bg-white/10'
		]"
	>
		{{ item.label }}
	</a>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		},
		scrolled: {
			type: Boolean,
			default: false
		},
		mobile: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			dropdownOpen: false
		};
	},
	methods: {
		toggleDropdown() {
			this.dropdownOpen = !this.dropdownOpen;
		},
		closeDropdown() {
			this.dropdownOpen = false;
		}
	}
};
</script>

<style scoped>
/* Additional hover effects */
a, button {
	position: relative;
}

a::after, button::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 2px;
	background: currentColor;
	transition: width 0.3s ease, left 0.3s ease;
}

a:hover::after, button:hover::after {
	width: 80%;
	left: 10%;
}
</style>

