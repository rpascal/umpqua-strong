<script>
	let horizontalImages = [
		{
			src: '/sponsors/horizontal/EMBERTSON_HEADER.jpg',
			href: 'https://www.embertsoncpa.com/',
			alt: 'Richard Embertson'
		}
	];

	let otherImages = [
		{
			src: '/sponsors/lynette_mcallister_agenvy.jpg',
			href: 'https://agent.amfam.com/lynette-mcallister/',
			alt: 'Lynette McAllister'
		},
		{
			src: '/sponsors/Wildlife Safari.jpg',
			href: 'https://wildlifesafari.net/',
			alt: 'Wildlife Safari'
		},
		{
			src: '/sponsors/horizontal/goprime-logo.png',
			href: 'https://www.goprime.com/loan-branch-locations/roseburg/',
			alt: 'GoPrime Mortgage'
		}
	];
</script>

<section id="we-remember-section" class="home-section bg-gray-100 py-10">
	<div class="container my-0 mx-auto px-4 max-w-6xl text-center items-center">
		<div class="mb-6">
			<p class="text-6xl text-secondary font-light">Sponsors</p>
		</div>

		<div class="grid grid-flow-row-dense grid-cols-1 auto-rows-min	 gap-2 pb-4">
			{#each horizontalImages as image}
				<a class="m-auto" href={image.href} target="_blank">
					<img src={image.src} alt={image.alt} />
				</a>
			{/each}
		</div>

		<div class="grid grid-flow-row-dense sm:grid-cols-3 auto-rows-min	 gap-2">
			{#each otherImages as image}
				<a class="m-auto" href={image.href} target="_blank">
					<img src={image.src} alt={image.alt} />
				</a>
			{/each}
		</div>
	</div>
</section>
