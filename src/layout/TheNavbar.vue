<template>
	<nav class="navbar fixed-top px-3 bg-white" ref="navbar">
		<div class="navbar-content d-flex align-items-center justify-content-between w-100 h-100 mx-auto">
			<h1 class="logo px-3 px-md-5 mt-4" ref="logo">
				<router-link :to="{ name: 'Home' }" title="Daniel Portfolio" class="h-100">
					Daniel Portfolio
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
					id: 'experience',
					name: 'experience'
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
				this.$refs.navbar.style.height = '100px';
				this.$refs.logo.style.height = '100px';
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
			height: 80px;
			filter: drop-shadow(3px 3px 0 $white);
			transition: 0.3s ease-in-out;
			@include media-md {
				height: 100px;
			}
			a {
				display: block;
				background: url('@/assets/image/logo.svg') no-repeat;
				width: 100px;
				text-indent: 101%;
				overflow: hidden;
				white-space: nowrap;
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
