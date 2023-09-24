<template>
	<nav class="navbar fixed-top px-3 bg-white" ref="navbar">
		<div class="navbar-content d-flex align-items-center justify-content-between w-100 h-100 mx-auto">
			<h1 class="logo px-md-3" ref="logo">
				<router-link :to="{ name: 'Home' }" title="freestylestudio">
					<img src="@/assets/image/logo.png">
				</router-link>
			</h1>
			<ul class="menu">
				<li class="px-3" v-for="item in menuList" :key="item.id">
					<router-link :to="{ name: 'Home', hash: `#${item.id}` }" class="menu-item position-relative fw-bold text-decoration-none py-2">{{ item.name }}</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			menuList: [
				{
					id: 'about',
					name: 'about'
				},
				{
					id: 'work',
					name: 'work'
				},
				{
					id: 'contact',
					name: 'contact'
				}
			]
		};
	},
	mounted() {
		window.addEventListener('scroll', this.changeMenuHeight);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.changeMenuHeight);
	},
	methods: {
		changeMenuHeight() { // 電腦版切換 side-menu z-index（當錨點按鈕置頂時，side-menu置於按鈕下層，反之置於上層)
			if (window.innerWidth < 768) {
				return;
			}
			if (window.scrollY >= 50) {
				this.$refs.navbar.style.height = '60px';
				this.$refs.logo.style.height = '60px';
			} else {
				this.$refs.navbar.style.height = '90px';
				this.$refs.logo.style.height = '90px';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.navbar {
		height: $navbar-height-mobile;
		transition: 0.3s ease-in-out;
		@include media-md {
			height: $navbar-height;
		}
		.navbar-content {
			max-width: $container-width;
		}
		.logo {
			img {
				width: 200px;
				filter: drop-shadow(0 3px 0 $white);
				@include media-md {
					width: 250px;
				}
			}
		}
		.menu {
			text-align: right;
			font-size: 14px;
			@include media-md {
				display: flex;
				font-size: 1rem;
			}
		}
		.menu-item {
			@include media-md {
				&::before {
					content: '';
					position: absolute;
					background-color: currentColor;
					width: 0;
					height: 0;
					left: 0;
					bottom: 2px;
					transition: width 0.3s ease-out;
				}
				&:hover {
					&::before {
						width: 100%;
						height: 1px;
					}
				}
			}
		}
	}
</style>
