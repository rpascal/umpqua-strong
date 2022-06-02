<script>
	import FacebookIcon from '~icons/fa-brands/facebook';
	import InstagramIcon from '~icons/fa-brands/instagram';
	import TwitterIcon from '~icons/fa-brands/twitter';

	const logoSrc = './logo.png';
</script>

<div class="navbar bg-primary drop-shadow-lg text-white">
	<div class="flex-1 text-center">
		<a href="/" class="btn btn-ghost normal-case   gap-2 text-base font-medium pl-0">
			<img src={logoSrc} alt="logo" class="logoImg" />
			Umpqua Strong
		</a>
	</div>
	<div class="flex-none">
		<a
			class="btn btn-square btn-ghost text-base"
			href="https://www.facebook.com/Umpquastrong/"
			target="_blank"
		>
			<FacebookIcon />
		</a>

		<a
			class="btn btn-square btn-ghost  text-base"
			href="https://www.instagram.com/umpquastrong/"
			target="_blank"
		>
			<InstagramIcon />
		</a>

		<a
			class="btn btn-square btn-ghost  text-base"
			href="https://twitter.com/umpquastrong"
			target="_blank"
		>
			<TwitterIcon />
		</a>
	</div>
</div>

<style>
	.logoImg {
		height: 39px;
	}
</style>
