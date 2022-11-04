<template>
	<Swiper class="swiper mb-2" :loop="true" :slides-per-view="1"
		:autoplay="{ delay: 3000, disableOnInteraction: false }">
		<SwiperSlide v-for="(item, key) in banner" :key="`banner_${key}`" class="bg-light">
			<img :src="getImageUrl('banner', item)" alt="banner" class="banner">
		</SwiperSlide>
	</Swiper>
</template>

<script>
import defaultStore from '@/stores/index';
import SwiperCore, { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([ Autoplay, Pagination, Navigation, Mousewheel ]);

export default {
	name: 'Banner',
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		const { getImageUrl } = defaultStore();
		const banner = [
			'banner-1.jpg',
			'banner-2.jpg',
			'banner-3.jpg',
			'banner-4.jpg',
			'banner-5.jpg',
			'banner-6.jpg'
		];

		return {
			// data
			banner,
			// methods
			getImageUrl
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
