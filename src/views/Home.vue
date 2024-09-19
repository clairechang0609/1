<template>
	<div class="home-wrap">
		<transition>
			<div class="landing-page fixed-top left-0 top-0 right-0 bottom-0" v-show="!isEnter">
				<img class="bg-image" :src="'/image/DAN04715-2.jpg'">
				<div class="info d-flex flex-column align-items-center text-white">
					<img class="logo" src="@/assets/image/logo-w.png">
					<small class="d-block mt-4 mb-5 text-center">
						自由，是一種無畏的姿態。 <br />
						自由，是追尋心之所向。 <br />
						自由，意味著擁有自我主體性。 <br /><br />
						自由製造提供刊物專書編輯製作、網站製作。 <br />
						透過文字傳達的意念，讓我們的心靈游向遠方。
					</small>
					<a href="#" @click.prevent="isEnter = true, toggleBodyClass()" class="enter-link position-relative text-white">
						Enter
						<span class="arrow">⇀</span>
					</a>
				</div>
			</div>
		</transition>
		<div v-show="isEnter" ref="container">
			<div class="swiper-wrap mx-auto">
				<Banner :start-autoplay="isEnter" />
				<div class="row gx-md-5">
					<div class="col-md-12">
						<small>我們不只是用相機拍照。我們帶到攝影中的是所有我們讀過的書、看過的電影、聽過的音樂、愛過的人。 — Ansel Adams</small>
					</div>
				</div>
			</div>
			<!-- 一隅 -->
			<div>
				<div id="corner" class="work-content corner-content pt-4 pt-md-5">
					<div class="work-wrap pb-3 pb-md-5">
						<div class="mb-4 mb-md-5">
							<h3 class="title lh-lg d-md-inline-block">一隅</h3>
							<h6 class="subtitle fs-6 ms-md-3 fw-normal">Corner</h6>
						</div>
						<div class="row gx-0">
							<div class="col-md-6 bg-light bg-opacity-50 border border-light d-flex align-items-center justify-content-center">
								<div class="p-5">
									<h4 class="mb-4 subtitle">觀看的方式</h4>
									<p>
										一個凝視和觀看可以是愛，可以象徵權力，<br>
										也可以是一種禁忌、自戀和自我認同，<br>
										它更是一種「觀點」和「視角」的展現。
									</p>
									<router-link to="/corner" class="btn btn-outline-primary w-100 py-4 mt-4">購買連結 Link to Purchase</router-link>
								</div>
							</div>
							<div class="col-md-6">
								<div class="image-wrap">
									<img :src="'/image/home/cornerFront.jpg'" alt="cornerFront" class="corner-front">
									<img :src="'/image/home/cornerBack.jpg'" alt="cornerBack" class="corner-back">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- works -->
			<div id="work" class="work-content pt-4 pt-md-5">
				<div v-for="(work, key) in store.works" :key="key" class="work-wrap pb-3 pb-md-5">
					<div class="mb-4 mb-md-5">
						<h3 class="title lh-lg d-md-inline-block">{{ key }}</h3>
						<h6 class="subtitle fs-6 ms-md-3 fw-normal">{{ work.title }}</h6>
					</div>
					<ul class="row">
						<li v-for="item in work.collections" :key="`work_${key}_${item.id}`"
							class="work col-md-6 col-lg-4 mb-4">
							<router-link :to="`work/${key}/${item.id}`" class="work-item">
								<small class="d-block fw-bold mb-3">{{ item.date }} ｜ {{ item.masthead }}</small>
								<div class="image-wrap position-relative bg-light mb-3">
									<img :data-src="`/image/${key}/${item.images[0]}`" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
										:alt="item.masthead" class="lazyload image position-absolute">
								</div>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<!-- contact -->
			<div id="contact" class="contact-content bg-light bg-opacity-50 text-center position-relative mx-auto mt-5 p-5">
				<h3 class="title position-absolute">contact</h3>
				<p class="mb-2">專題企劃、採訪撰稿歡迎來信</p>
				<i class="bi bi-envelope d-block mb-2"></i>
				<a href="mailto:danielchang0281@gmail.com" class="email fs-7" target="_blank" rel="noreferrer noopener">danielchang0281@gmail.com</a> <br />
				<a href="https://www.instagram.com/freestylestudio0281/" class="email fs-7" target="_blank" rel="noreferrer noopener">instagram: 自由製造</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	beforeRouteEnter: ((to, from, next) => {
		next(vm => {
			if (from.path === '/') {
				vm.isEnter = false;
			}
		});
	})
}
</script>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useStore } from '@/stores/index';
// import { getImageUrl } from '@/utils/image';
import Banner from '@/components/Banner.vue';

const store = useStore();
const isEnter = ref(false);

// 顯示內容動態效果
const showElement = () => {
	const workItems = document.querySelectorAll('.work');
	workItems.forEach(item => {
		if ((item.offsetTop + 50) < (window.scrollY + window.innerHeight)) {
			item.classList.add('active');
		}
	});
};

// 切換 body 的 class
const toggleBodyClass = () => {
	const body = document.querySelector('body');
	body.classList.toggle('hidden');
};

// 綁定滾動事件和初始化
onMounted(() => {
	window.addEventListener('scroll', showElement, true);
	toggleBodyClass();
});

// 清除滾動事件綁定
onBeforeUnmount(() => {
	window.removeEventListener('scroll', showElement);
});
</script>

<style lang="scss" scoped>
// .v-enter-active,
.v-leave-active {
	transition: opacity 0.5s;
}
// .v-enter-from,
.v-leave-to {
	opacity: 0;
}
// .v-enter-to,
.v-leave-from {
	opacity: 1;
}

.landing-page {
	background-color: $gray-900;
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(217deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 70%),
		linear-gradient(127deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 70%),
		linear-gradient(336deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 70%);
		opacity: 0.75;
	}
	.bg-image {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	.info {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		.logo {
			width: 300px;
		}
		.enter-link {
			margin-left: 10px;
			transition: 0.2s ease-in-out;
			.arrow {
				opacity: 0;
				transition: 0.2s ease-in-out;
			}
			&::before {
				content: '';
				position: absolute;
				width: 70%;
				height: 1px;
				background-color: $white;
				bottom: -2px;
				transition: 0.3s ease-in-out;
			}
			&:hover {
				margin-left: 0;
				.arrow {
					opacity: 1;
				}
				&::before {
					width: 100%;
				}
			}
		}
	}
}
.profile-link {
	position: relative;
	&::before {
		content: '';
		position: absolute;
		background: currentColor;
		width: 100%;
		height: 1px;
		left: 0;
		bottom: 0;
		transition: width 0.3s ease-out;
	}
	&:hover {
		opacity: 0.75;
		&::before {
			width: calc(100% + 1rem);
		}
	}
}
.guide-card {
	@include media-md {
		margin-top: -50px;
		z-index: 500;
	}
	.title {
		letter-spacing: 1rem;
	}
}
.work-content {
	.title {
		letter-spacing: 0.5rem;
	}
	.work {
		&.active {
			animation: fadeInLeft;
			animation-duration: 1.5s;
		}
	}
	.work-item {
		overflow: hidden;
		transition: 0.8s;
		&:hover {
			opacity: 0.6;
			.image {
				width: 87.5%;
			}
		}
		.image-wrap {
			padding-top: 75%;
			&::before, &::after {
				z-index: -1;
				position: absolute;
				content: '';
				bottom: 15px;
				left: 10px;
				width: 50%;
				top: 80%;
				max-width: 300px;
				background: rgba($black, 0.45);
				box-shadow: 0 15px 10px rgba($black, 0.45);
				transform: rotate(-3deg);
			}
			&::after {
				transform: rotate(3deg);
				right: 10px;
				left: auto;
			}
		}
		.image {
			width: 75%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			filter: drop-shadow(0 0.25rem 0.15rem rgba($black, 0.2));
			transition: 0.8s;
		}
	}
	&.corner-content {
		.image-wrap {
			@include aspect-ratio-container(100%);
			.corner-back {
				opacity: 0;
			}
			&:hover {
				img {
					transform: scale(1.1);
				}
				.corner-back {
					opacity: 1;
				}
				.corner-front {
					opacity: 0;
				}
			}
			.subtitle {
				font-size: 24px;
			}
		}
	}
}
</style>
