<script setup>
	useHead({
		title: 'Published Papers - Pandey Education Trust',
	});

	const papers = [
		{ title: 'Educational Administrators Needs Training Programme', file: '/papers/02-EDUCATIONAL-ADMN-NEEDS-TRG-PROGRAMME.pdf', publication: 'Amrita Bazar Patrika, 30 April, 1990' },
		{ title: 'The Changed Role of Educational Administrators', file: '/papers/01-CHANGED-ROLE-OF-EDN-ADMN.pdf', publication: 'Amrita Bazar Patrika, 27, Feb.1990' },
		{ title: 'Problems of Educational Administrators', file: '/papers/03-SIKSHA-PRASASAK-KI-SAMASAYA.pdf', publication: 'Parikshak, M.P.Education Board, April, 1991 (HINDI)' },
		{ title: 'Study of Relationship Between Socio-economic Status and their Attitudes towards School', file: '/papers/04-VIDYALAYA-KE-SAMAJIK-ARTHIK-SATAR-KA-BACCHO-PER-PRABHAV.pdf', publication: 'BAS, October 1991 (HINDI)' },
		{ title: 'Open Classroom, A New Experiment', file: '/papers/05-KHULI-KASHA-EK-NAYA-PRAYOG.pdf', publication: 'PT, October 1991 (HINDI)' },
		{ title: 'Divergent Thinking in Relation to Scholastic Achievement, Cognitive Style, Self-concept and Interest Pattern', file: '/papers/06-DIVERGENT-THINKING.pdf', publication: 'JER, January 1992' },
		{ title: 'Effect of Socio-Economic Status on the Decision Making Capacity of Principals', file: '/papers/07-PRACHARYA-KE-SAMAJIK-SATAR-KA-UNEKA-NIRNAYA-CHAMTA-PER-PARABHAYA.pdf', publication: 'BAS, October 1992 (HINDI)' },
		{ title: 'Educational Administrators & School Environment', file: '/papers/08-SACHIK-PRASASAN-AUR-VIDYALAYA-VATAVARAN.pdf', publication: 'Deshbandhu, 27 June 1993 (HINDI)' },
		{ title: 'Social Change & Role of School', file: '/papers/10.-SAMAJIK-PARIVARTAN-AUR-VIDYALAYA.pdf', publication: 'Deshbandhu, 17 July 1993 (HINDI)' },
		{ title: 'Bachho Ko Sahi Shiksha Do', file: '/papers/09-BACCHO-KO-SAHI-SIKSHA-DE.pdf', publication: 'Deshbandhu, 11 July 1993 (HINDI)' },
		{ title: 'Public Schools – For Names Only', file: '/papers/11-PUBLIC-SCHOOL-KEWAL-NAM-KE-HI.pdf', publication: 'Deshbandhu, 31 August 1993 (HINDI)' },
		{ title: 'Society And Education', file: '/papers/12.-SAMUDAYA-TATHA-SIKSHA.pdf', publication: 'Deshbandhu, 1 September, 1993 (HINDI)' },
		{ title: 'Impact of Head of the Institution and Teachers relationship on Public Schools Examination Results', file: '/papers/13-RELATIONSHIP-OF-HEAD-TEACHERS-ON-RESULT.pdf', publication: 'Journal of Psychometric & Education, May 1994' },
		{ title: 'A Study of Mental Health and Decision Making Capacity of Higher Secondary School Principals', file: '/papers/14-MENTAL-HEALTH-DECISION-MAKING-CAPACITY.pdf', publication: 'Prachi Journal of Psycho-cultural Dimensions 1995, Vol.II (1&2)' },
		{ title: 'Administrative Effectiveness, Administrative Style and Decision Making of Educational Administrators', file: '/papers/15-ADMINISTRATIVE-EFFECTIVENESS-STYLE-DECISION-MAKING.pdf', publication: 'National Conference on Management of School Education, NIEPA, New Delhi, 16-17 April 1998' },
		{ title: 'Training for our Educational Administrators', file: '/papers/16-TRAINING-FOR-OUR-EDUCATIONAL-ADMINISTRATORS.pdf', publication: '2nd Round Table Conference, CMS Education, Lucknow, November 29 to December 6, 1999' },
		{ title: 'Role of Educational Managers in New Millenium', file: '/papers/17-ROLE-OF-EDUCATIONAL-MANAGERS-IN-NEW-MILLENIUM.pdf', publication: 'Second Indian Education Science Congress, University of Kalyani, 21-23 January 2000' },
		{ title: 'Use of Computer in Examination System', file: '/papers/18-USE-OF-COMPUTER-IN-EDUCATION-SYSTEM.pdf', publication: 'PTA Magazine, March 2000' },
		{ title: 'Impact of Primary Education on Developing the Rural Poor', file: '/papers/19-IMPACT-OF-PRIMARY-EDUCATION.pdf', publication: 'National Conference on Behavioral Management in Rural Development, 03-05 August 2000' },
		{ title: 'Celebrating Diversities', file: '/papers/20-CELEBRATING-DIVERSITIES.pdf', publication: '3rd Inter-University Education Meet, IIRD, 2-4 February 2001' },
		{ title: 'Education and the Challenges in the First Millennium of 21st Century', file: '/papers/21-EDUCATION-THE-CHALLANGES-IN-THE-FIRST-MILLENIUM.pdf', publication: 'Golden Jubilee Conference of International Schools Association, Jaipur, 5-8 July 2001' },
		{ title: 'Present Day Trends in Education and Changed Role of Teachers', file: '/papers/22-PRESENT-TREND-CHANGED-ROLE-OF-TEACHERS.pdf', publication: 'Educational Symposium, Navodya Vidyalaya Samiti, Jaipur, 4th September 2001' },
		{ title: 'Effect of self-esteem and Human Relationship on Decision Making Capacity of Educational Administrators', file: '/papers/23-EFFECT-OF-HUMAN-RELATION-ON-DECISION-MAKING-CAPACITY-OF-EDN-ADMN.pdf', publication: 'Bhartiya Siksha Sodh Patrika, Year-20, Vol.2, July-December 2001' },
		{ title: 'Effect of self-esteem and Human Relationship on Decision Making Capacity of Educational Administrators', file: '/papers/24-SELF-ESTEEM-ON-DECISIOM-MAKING-CAPACITY.pdf', publication: 'National Conference of Unaided Schools of India, New Delhi, 2-3 January 2002' },
		{ title: 'Traits Needed for Educational Administration', file: '/papers/25-TRAITS-NEEDED-FOR-EDN-ADMN.pdf', publication: 'Hindustan Times, Jan 13, 2002' },
		{ title: 'Cause and Ways to Relive Stress Amongst Children Community', file: '/papers/26-CAUSES-REAMEDY-TO-REMOVE-TENSION-IN-STUDENTS.pdf', publication: 'Times of India, 21st March 2002' },
		{ title: 'Priorities of Education in New Decade', file: '/papers/27-PRIORITIES-OF-EDN-IN-NEW-DECADE.pdf', publication: 'Educational Seminar, DAV Schools, Delhi, 14-15 May 2002' },
		{ title: 'Education Today: Changing Scenario', file: '/papers/28-EDUCATION-TODAY-CHANGIING-SCENERIO.pdf', publication: 'Times of India, 14th May 2002' },
		{ title: 'What Makes a Successful Principal', file: '/papers/29.-MAKING-EFFICIENT-PRINCIPAL.pdf', publication: 'International Conference on Quality Education, ISFI, Delhi, 8-10 December 2002' },
		{ title: 'Effect of Self Esteem and Mental Health on the Decision Making Capacity of Managers', file: '/papers/30.-SELF-ESTEEM-MENTAL-HEALTH-IN-DECISION-MAKING.pdf', publication: 'HR@Heart of Business by Excel Books, 2002' },
		{ title: 'Nurturing Creativity In Classrooms', file: '/papers/31.-NURTURING-CREATIVITY.pdf', publication: 'CBSE 11th National Conference of CBSE Sahodaya School Complex, 2004' },
		{ title: 'Cause & Ways to Relieve Stress Among Students', file: '/papers/32.-RELIVING-STRESS-FROM-STUDENT.pdf', publication: 'Hindustan Times, 16th February 2004' },
		{ title: 'Badelte Paripeksh Me Siksha aur Siksharthi (HINDI)', file: '/papers/33.-STUDENTS-TEACHERS-IN-CHANGING-ENVIRONMENT.pdf', publication: 'Rajasthan Patrika, BAL Hans, September 2005' },
		{ title: 'Right Approach', file: '/papers/34.-RIGHT-APPROACH.pdf', publication: 'NHRD News Letter, March 2008, P. No. 28' },
		{ title: 'Kill the Fear before it kills You', file: '/papers/35.-KILL-THE-FEAR-BEFORE-IT-KILLS-YOU.pdf', publication: 'NHRD News Letter, April 2008, P. No. 22' },
		{ title: 'Thing Big To Grow Big', file: '/papers/36.-THINK-AND-GROW-BIG.pdf', publication: 'NHRD News Letter May 2008, Vol.24, Issue 2 P No. 40' },
		{ title: 'Feel Comfortable In All Situations', file: '/papers/37.-FEEL-COMFORTABLE-IN-ALL-SITUATIONS.pdf', publication: 'NHRD News Letter June 2008, Issue: 3, Vol. 24, P. No. 40-41' },
		{ title: 'Manage Everyone for Result', file: '/papers/38.-MANAGE-EVERYONE-FOR-RESULT.pdf', publication: 'NHRD News Letter November 2008 Issue 8, Vol.24, P. No 36' },
		{ title: 'Be Happy and Make Other Happier', file: '/papers/39.-BE-HAPPY-AND-MAKE-OTHER-MORE-HAPPIER-14.11.08.pdf', publication: 'NHRD News Letter February 2009 Issue 11, Vol.24, P. No 34' },
		{ title: 'An Innovative Approach in Elementary Education', file: '/papers/40.-INNOVATIVE-APPROACH-IN-ELEMENTRY-EDN.pdf', publication: 'Indian Journal Of Education Research, Vol. 28, No. 1, Jan-June 2009' },
		{ title: 'In-service Teachers Training: An Experiment in Quality education', file: '/papers/41-INSERVICE-TR-TG-QTY-EDN.pdf', publication: 'National Conference on Explaining the Dynamics of Education, SGVU, Jaipur, 5-6 June 2009' },
		{ title: 'Attitude – the Deciding Factor of Success', file: '/papers/42.-ATTITUDE-THE-DECIDING-FACTOR-OF-SUCCESS.pdf', publication: 'NHRD News Letter July 2009 Issue 4, Vol.25, P. No 26' },
		{ title: 'Emerging Challenges for Principal – The Person in the office', file: '/papers/43.-EMERGING-CHALLENGES-FOR-PRINCIPAL-03.01.08.pdf', publication: 'Suresh Gyan Vihar University Research Journal' },
		{ title: 'Significance and Challenges of Online Teaching', file: '/papers/44._SIGNIFICANCE_AND_CHALLANGES_FOR_ONLINE_TEACHING.pdf', publication: 'Ilkogretim Online – Elementary Education Online, Vol.20 (Issue 5), Page 1445-1449' }
	];
</script>

<template>
	<AppHeader />
	
	<main class="min-h-screen bg-neutral-50">
		<div class="section-container">
			<!-- Page Title -->
			<div class="text-center mb-12 animate-fade-in-up">
				<h1 class="section-title gradient-text mb-4">
					Published Papers
				</h1>
				<p class="section-subtitle max-w-3xl mx-auto">
					Research and publications contributing to educational excellence
				</p>
			</div>

			<!-- Papers List -->
			<div class="max-w-5xl mx-auto">
				<div class="glass-card p-8 animate-fade-in">
					<div class="space-y-4">
						<div 
							v-for="(paper, index) in papers" 
							:key="index"
							class="flex items-start gap-4 p-5 bg-white rounded-lg border border-neutral-200 hover:shadow-lg transition-all duration-200 group"
						>
							<div class="flex-shrink-0 mt-1">
								<div class="bg-primary-100 group-hover:bg-primary-200 p-2 rounded-lg transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
							</div>
							<div class="flex-1 min-w-0">
								<h3 class="font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
									<a :href="paper.file" target="_blank" download class="hover:underline">
										{{ paper.title }}
									</a>
								</h3>
								<p class="text-sm text-neutral-600">{{ paper.publication }}</p>
							</div>
							<div class="flex-shrink-0">
								<a 
									:href="paper.file" 
									target="_blank" 
									download
									class="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium"
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
									</svg>
									Download
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Summary -->
				<div class="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-l-4 border-primary-600 text-center animate-fade-in" style="animation-delay: 0.1s;">
					<p class="text-neutral-700">
						<strong class="text-primary-700">{{ papers.length }} research papers</strong> published in national and international journals
					</p>
				</div>
			</div>
		</div>
	</main>
	
	<Footer />
</template>

<route lang="yaml">
name: published-papers
</route>
