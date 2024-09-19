<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/scss/app.scss";

.title-card {
	border: 7px solid $black;
}

.contact-content {
	max-width: 750px;
	.title {
		letter-spacing: 0.5rem;
		top: -1.5rem;
		left: 50%;
		transform: translateX(-50%);
	}
	.email {
		text-decoration: underline;
		&:hover {
			opacity: 0.6;
		}
	}
}
</style>
