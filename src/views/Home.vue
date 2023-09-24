<template>
	<div class="home-wrap">
		<transition>
			<div class="landing-page fixed-top left-0 top-0 right-0 bottom-0" v-show="!isEnter">
				<img class="bg-image" src="/image/DAN04715-2.jpg">
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
		<div v-show="isEnter">
			<div class="swiper-wrap mx-auto">
				<Banner />
				<div class="row gx-md-5">
					<div class="col-md-12">
						<small>我們不只是用相機拍照。我們帶到攝影中的是所有我們讀過的書、看過的電影、聽過的音樂、愛過的人。 — Ansel Adams</small>
					</div>
				</div>
			</div>
			<!-- about -->
			<div id="about" class="experience-content mx-auto py-3 py-sm-4 py-md-5">
				<div class="mb-3">
					<h4 class="title lh-lg me-4 fs-md-2">關於我</h4>
					<h5 class="subtitle fs-md-4">about</h5>
				</div>
				<div class="row gx-md-5">
					<div class="col-sm-8 mb-3 mb-sm-0 order-2 order-sm-1">
						<ul class="lh-lg">
							<li v-for="(item, index) in experience" :key="`experience_${index}`" class="mt-3">
								<p class="fw-bold fs-7">
									{{ item.during }}｜{{ item.company }} {{ item.title }}
									<template v-if="item.titleList?.length">
										<small class="d-block" v-for="(titleItem, key) in item.titleList" :key="`title_${index}_${key}`">
											{{ titleItem.name }} {{ titleItem.during }}
										</small>
									</template>
								</p>
								<div class="d-flex flex-column ms-sm-3 mt-2">
									<small v-for="(publishItem, key) in item.publish" :key="`publish_${index}_${key}`" class="mt-1">
										- {{ publishItem }}
									</small>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-sm-4 align-self-end order-1 order-sm-2">
						<small class="d-block lh-lg mb-3">
							<span class="name fs-7 fw-bold">Daniel Chang 張景棠</span> <br />
							Editor - Writer - Shutterbug
						</small>
						<div class="image-wrap bg-light mb-2 mb-md-4"></div>
						<!-- <div class="text-end mb-2">
							<a href="#" class="profile-link fs-7 ms-auto py-1">
								profile<i class="bi bi-arrow-right ms-1"></i>
							</a>
						</div> -->
					</div>
				</div>
			</div>
			<!-- works -->
			<div id="work" class="work-content pt-4 pt-md-5">
				<div v-for="(work, key) in works" :key="key" class="work-wrap pb-3 pb-md-5">
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
									<img :src="`/image/${key}/${item.images[0]}`" :alt="item.masthead" class="image position-absolute">
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import defaultStore from '@/stores/index';
import Banner from '@/components/Banner.vue';

export default {
	name: 'Home',
	components: {
		Banner
	},
	beforeRouteEnter: ((to, from, next) => {
		next(vm => {
			if (from.path === '/') {
				vm.isEnter = false;
			}
		});
	}),
	setup() {
		const { works } = defaultStore();
		const isEnter = ref(true);
		const experience = [ // 經歷
			{
				during: '2023-now',
				company: '自由製造有限公司',
				title: 'Founder',
				publish: []
			},
			{
				during: '2019-2023',
				company: '華訊事業股份有限公司',
				title: '副總編輯',
				titleList: [
					{
						during: '2022-2023',
						name: '代編部 副總編輯'
					},
					{
						during: '2019-2022',
						name: '代編部 主編'
					}
				],
				publish: [
					'Infinite 台新無限季刊（台新銀行無限卡會員刊物）',
					'合庫樂活理財季刊（合作金庫理財季刊）',
					'terroir 肥沃台灣（台灣肥料企業形象刊物）',
					'dawn 曙光季刊（國立臺東生活美學館）',
					'Ciao 潮旅（華訊與中華航空異業合作旅遊刊物）'
				]
			},
			{
				during: '2016-2019',
				company: '意念文創股份有限公司',
				title: '主編',
				publish: [
					'tigertales 台灣虎航機上雜誌',
					'Inspire 意念圖誌',
					'My Plus 加分誌'
				]
			},
			{
				during: '2015-2016',
				company: '世界公民文化中心',
				title: '企劃編輯',
				publish: [ '英語島雜誌' ]
			}
		];

		const showElement = () => { // 顯示內容動態效果
			const workItems = document.querySelectorAll('.work');
			workItems.forEach(item => {
				if ((item.offsetTop + 50) < (window.scrollY + window.innerHeight)) {
					item.classList.add('active');
				}
			});
		};

		const toggleBodyClass = () => {
			const body = document.querySelector('body');
			body.classList.toggle('hidden');
		}

		onMounted(() => {
			window.addEventListener('scroll', showElement, true);
			toggleBodyClass();
		});

		onBeforeUnmount(() => {
			window.removeEventListener('scroll', showElement);
		});

		return {
			// data
			isEnter,
			experience,
			works,
			// methods
			toggleBodyClass,
			showElement
		};
	}
};
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
	.experience-content {
		max-width: 1000px;
		.title {
			letter-spacing: 2rem;
		}
		.image-wrap {
			padding-top: 100%;
			background-image: url('@/assets/image/avatar.jpg');
			@include backgroundImage;
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
