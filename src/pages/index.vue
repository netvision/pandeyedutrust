<script setup lang="ts">
	import { useStore } from '@/store';
	import maa from '@/assets/maa-gss.jpg';
	useHead({
		title: 'GSS Girls PG College, Chirawa',
	});

	const store = useStore();
</script>

<template>
	<div class="grid place-items-center min-h-[80vh]">
		<div>
			<img :src="maa" width="300" class="mx-auto" />
			<h2 class="py-5 text-3xl my-3">GSS Girls (PG) College, Chirawa</h2>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
