<template>
	<Swiper @swiper="onSwiper" class="swiper mb-2" :modules="modules" :loop="true" :slides-per-view="1">
		<SwiperSlide v-for="(item, key) in banner" :key="`banner_${key}`" class="bg-light">
			<img :src="`/image/banner/${item}`" alt="banner" class="banner">
		</SwiperSlide>
	</Swiper>
</template>

<script>
import defaultStore from '@/stores/index';
import { watch, ref } from 'vue';
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
	name: 'Banner',
	components: {
		Swiper,
		SwiperSlide
	},
	props: {
		startAutoplay: {
			type: Boolean,
			default: false
		}
	},
	setup(props) {
		let swiper = ref({});

		watch(() => props.startAutoplay,
			(newVal, _oldVal) => {
				if (newVal) {
					console.log(swiper);
					swiper.autoplay.start();
				}
			}
		);

		const onSwiper = instance => {
			swiper = instance;
		}

		const banner = [
			'banner-1.jpg',
			'banner-2.jpg',
			'banner-3.jpg',
			'banner-4.jpg',
			'banner-5.jpg',
			'banner-6.jpg'
		];

		const importUrl = import.meta.url;

		return {
			// data
			banner,
			importUrl,
			modules: [ Autoplay, Navigation, Pagination, Mousewheel ],
			// methods
			onSwiper
		};
	}
};
</script>

<style lang="scss" scoped>
	.swiper {
		max-width: $container-width;
		height: 250px;
		@include media-sm {
			height: 350px;
		}
		@include media-md {
			height: 480px;
		}
		@include media-lg {
			height: 650px;
		}
		.banner {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
