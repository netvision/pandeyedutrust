<script setup>
	useHead({
		title: 'Why Static IP is Required for CBSE OSM - Blog - Pandey Education Trust',
	});
</script>

<template>
	<AppHeader />

	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<div class="mb-8 animate-fade-in">
				<router-link to="/blog" class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					Back to Blog
				</router-link>
			</div>

			<div class="max-w-4xl mx-auto">
				<article class="glass-card p-8 md:p-12 animate-fade-in">
					<div class="mb-8 pb-6 border-b border-neutral-200">
						<h1 class="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
							Why Static IP is Required for CBSE On-Screen Marking (OSM) 2026
						</h1>
						<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-600">
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								Dr A. K. Pandey
							</span>
							<span class="flex items-center gap-2">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
								10.02.2026
							</span>
						</div>

					<div class="prose prose-neutral max-w-none text-neutral-700">
						<p class="text-lg leading-relaxed mb-6">
							CBSE has begun rolling out the On-Screen Marking (OSM) system for board evaluations. Instead of carrying bundles of physical answer sheets, evaluators now log into CBSE's secure servers, review scanned copies, and submit marks digitally.
						</p>

						<p class="leading-relaxed mb-6">
							During training sessions, many centres report issues like sudden logouts, unreachable servers, or the evaluation tool refusing to load. The culprit is rarely slow computers or insufficient bandwidth—it's almost always the lack of a <strong>Public Static IP address</strong>.
						</p>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							What Happens in CBSE On-Screen Marking?
						</h3>

						<ul class="list-disc pl-6 mb-6 space-y-2">
							<li>Answer sheets are scanned at CBSE-approved scanning centres.</li>
							<li>High-quality digital copies are uploaded to a secure CBSE portal.</li>
							<li>Evaluators log in from their allotted school or evaluation centre.</li>
							<li>Teachers mark responses directly on screen and submit marks digitally.</li>
						</ul>

						<p class="leading-relaxed mb-6">
							Because evaluators connect to an authentication server—rather than a public website—CBSE must know exactly which centre and which computer is logging in. A Static IP provides that identity.
						</p>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Static IP vs Dynamic IP
						</h3>

						<p class="leading-relaxed mb-6">
							An IP address is the unique identifier of your network connection—similar to a phone number. There are two types:
						</p>

						<ul class="list-disc pl-6 mb-6 space-y-2">
							<li><strong>Dynamic IP</strong>: changes every time the router reconnects.</li>
							<li><strong>Static IP</strong>: assigned permanently by the ISP and remains constant.</li>
						</ul>

						<p class="leading-relaxed mb-6">
							For CBSE, Static IP works like a school's official landline—always reachable and verifiable. Dynamic IP, on the other hand, behaves like a constantly changing number that the server cannot trust.
						</p>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Why CBSE OSM Demands Static IP
						</h3>

						<ul class="list-disc pl-6 mb-6 space-y-2">
							<li>CBSE registers each evaluation centre's public IP in advance.</li>
							<li>Only that authorised IP is allowed to access the evaluation portal.</li>
							<li>If the IP changes, the server blocks access and marks submission fails.</li>
							<li>Static IP keeps login sessions stable and traceable.</li>
						</ul>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Common Problems Without Static IP
						</h3>

						<ul class="list-disc pl-6 mb-6 space-y-2">
							<li>"Unauthorized location" or continuous login failures.</li>
							<li>Session logout in the middle of evaluation.</li>
							<li>Answer sheets opening extremely slowly or not at all.</li>
							<li>Frequent disconnection despite high-speed broadband.</li>
						</ul>

						<p class="leading-relaxed mb-6">
							Upgrading to 200 Mbps or 300 Mbps won't fix these issues because the server is rejecting the connection identity, not the speed.
						</p>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Benefits of Static IP for OSM Centres
						</h3>

						<div class="space-y-4 mb-8">
							<div>
								<p class="font-semibold text-neutral-900">1. Stable Examiner Login</p>
								<p>The CBSE portal recognises the centre every time, avoiding needless reauthentication.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">2. Uninterrupted Evaluation</p>
								<p>No sudden logouts or "system not reachable" errors.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">3. Secure Connection</p>
								<p>Only registered IP addresses can reach the CBSE evaluation servers, improving security.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">4. Faster Loading of Answer Sheets</p>
								<p>Once the server trusts the network, digital copies load promptly.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">5. Remote Monitoring</p>
								<p>CBSE can verify the exact location digitally, enabling better oversight.</p>
							</div>
						</div>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							How to Obtain a Static IP in India
						</h3>

						<p class="leading-relaxed mb-4">
							You don't buy static IPs online—simply request one from your Internet Service Provider (ISP) such as BSNL, Airtel, JioFiber, Railwire, or a local broadband operator.
						</p>

						<ol class="list-decimal pl-6 mb-6 space-y-3">
							<li><strong>Contact ISP:</strong> Ask specifically for a <em>Public Static IP</em> for CBSE On-Screen Marking.</li>
							<li><strong>Submit Documents:</strong> Customer ID, Aadhaar, and the ISP's request form are typically required.</li>
							<li><strong>Pay Charges:</strong> Expect ₹150–₹400 per month plus any activation fee.</li>
							<li><strong>Configure Router:</strong> The ISP shares the IP address, subnet mask, gateway, and DNS to be entered in the router's WAN settings.</li>
						</ol>

						<p class="leading-relaxed mb-6">
							The configuration itself takes just a few minutes once the ISP provides the details.
						</p>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Static vs Dynamic IP: Quick Comparison
						</h3>

						<div class="grid gap-4 md:grid-cols-2 mb-8">
							<div class="glass-card p-4">
								<h4 class="font-semibold text-neutral-900 mb-3">Dynamic IP</h4>
								<ul class="list-disc pl-6 space-y-1">
									<li>Changes every reconnect</li>
									<li>Unstable CBSE login</li>
									<li>Higher risk of disconnections</li>
									<li>Limited remote verification</li>
								</ul>
							</div>
							<div class="glass-card p-4">
								<h4 class="font-semibold text-neutral-900 mb-3">Static IP</h4>
								<ul class="list-disc pl-6 space-y-1">
									<li>Fixed, permanent address</li>
									<li>Stable CBSE authentication</li>
									<li>Smoother evaluation workflow</li>
									<li>Higher security and monitoring</li>
								</ul>
							</div>
						</div>

						<div class="alert alert-info bg-primary-50 border border-primary-100 text-primary-900 rounded-2xl p-5 mb-8">
							<p><strong>Important:</strong> Always insist on a <em>Public</em> Static IP. Private static IPs will not work for CBSE OSM because the CBSE server must see the centre on the public internet.</p>
						</div>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							FAQs
						</h3>

						<div class="space-y-4 mb-8">
							<div>
								<p class="font-semibold text-neutral-900">Q1. Is static IP compulsory for CBSE OSM?</p>
								<p>Yes. Without a registered Public Static IP, the CBSE server blocks access and evaluators get disconnected.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Q2. Can normal broadband be used?</p>
								<p>No. Standard broadband uses dynamic IPs. The CBSE server cannot verify the centre identity.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Q3. What internet speed is required?</p>
								<p>Even 50–100 Mbps is adequate if a static IP is configured. Without it, higher speeds still fail.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Q4. How much does a static IP cost?</p>
								<p>Typically ₹150–₹400 per month depending on your ISP.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Q5. Can multiple computers use one static IP?</p>
								<p>Yes. All machines on the same LAN behind the configured router share that single public IP.</p>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Q6. Is a private static IP acceptable?</p>
								<p>No. CBSE expressly requires a Public Static IP.</p>
							</div>
						</div>

						<h3 class="text-2xl font-heading font-bold text-neutral-900 mt-10 mb-4">
							Final Thoughts
						</h3>

						<p class="leading-relaxed mb-6">
							The On-Screen Marking system is part of CBSE's wider digital transformation. To make it work smoothly, centres must invest in a reliable, identifiable network connection. Static IP is that foundational requirement—it keeps logins stable, protects the workflow, and allows CBSE to monitor centres in real time.
						</p>

						<p class="leading-relaxed mb-6">
							Think of it this way: <strong>Dynamic IP equals a changing mobile number; Static IP equals a permanent landline.</strong> Arrange your Public Static IP well before evaluation begins to avoid last-minute disruptions.
						</p>

						<p class="leading-relaxed">
							<strong>Dr. A. K. Pandey</strong><br />
							CEO, Pandey Education Trust
						</p>
					</div>
				</article>
			</div>
		</div>
	</main>

	<Footer />
</template>

<style scoped>
.prose {
	max-width: 100%;
}

.prose h3,
.prose h4 {
	scroll-margin-top: 2rem;
}
</style>
