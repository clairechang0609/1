<template>
	<div id="main-container" class="main-container">
		<TheNavbar></TheNavbar>
		<div class="content">
			<router-view></router-view>
		</div>
		<div class="footer text-center border-top border-dark py-4 py-md-5">
			<small>Copyright © freestylestudio 2024, All rights reserved.</small>
		</div>
	</div>
</template>

<script>
import TheNavbar from '@/layout/TheNavbar.vue';

export default {
	name: 'Template',
	components: {
		TheNavbar
	}
};
</script>

<style lang="scss" scoped>
	.content {
		@include container-setting;
		margin-top: $navbar-height-mobile;
		margin-bottom: 4rem;
		@include media-md {
			margin-top: $navbar-height;
		}
	}
	.footer {
		@include container-setting;
	}
</style>
