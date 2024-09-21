<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script setup></script>

<style lang="scss">
@import "@/assets/scss/app.scss";

body {
	overflow-x: hidden;
}

.title-card {
	border: 7px solid $black;
}

.subtitle {
	position: relative;
	display: inline-block;
	&::before {
		content: '';
		position: absolute;
		background: currentColor;
		width: 50px;
		height: 1px;
		right: -70px;
		top: 50%;
		transform: translateY(-50%);
	}
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

.text-justify {
	text-align: justify;
}
</style>
