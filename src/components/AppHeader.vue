<script setup>
import headerImg from "@/assets/header.jpg"
</script>

<template>
	<header>
		<div class="w-full relative">
			<el-image class="w-full" :src="headerImg" fit="cover" />
			<div class="absolute top-2 left-4 text-sm font-bold">Contact No. </div>
		</div>
		<nav class="flex px-4 border-b md:shadow-lg items-center justify-between relative">
       <el-menu
    	mode="horizontal"
		class="w-full"
	   >
		<el-menu-item index="1">
			<el-link href="other-page">Home</el-link>
		</el-menu-item>
		<el-sub-menu index="2">
			<template #title>Services Offered</template>
			<el-menu-item index="2-1">Consultancy Services</el-menu-item>
			<el-menu-item index="2-2">Staff Recruitment</el-menu-item>
			<el-menu-item index="2-3">Staff Training</el-menu-item>
			<el-menu-item index="2-4">Online Support System</el-menu-item>
		</el-sub-menu>
		<el-menu-item index="3">
			<el-link href="other-page">The Team</el-link>
		</el-menu-item>

		<el-menu-item index="4">
			<el-link href="other-page">Portfolio</el-link>
		</el-menu-item>
		<el-sub-menu index="5">
			<template #title>Case Studies</template>
			<el-menu-item index="5-1">Bus facility to Staff</el-menu-item>
			<el-menu-item index="5-2">Maheshwari Public School Computerisation</el-menu-item>
			<el-menu-item index="5-3">Demotion of Officiating Principal</el-menu-item>
			<el-menu-item index="5-4">Demotion of Vice Principal</el-menu-item>
			<el-menu-item index="5-5">Administrators are Born not Trained</el-menu-item>
		</el-sub-menu>
		<el-menu-item>
			<el-link href="other-page">Published Papers</el-link>
		</el-menu-item>
		<el-menu-item>
			<el-link href="other-page">Social Responsility</el-link>
		</el-menu-item>
		<el-menu-item>
			<el-link href="other-page">Contact Us</el-link>
		</el-menu-item>
	   </el-menu>
    </nav>
	</header>
</template>

<style scoped>
</style>
