<template>
	<Swiper class="swiper mb-2" v-bind="config">
		<SwiperSlide v-for="(_item, key) in 13" :key="`corner_${key}`" class="d-flex justify-content-center">
			<img :src="getImageUrl(`/image/corner/Corner-${key + 1}.jpg`)" alt="corner" class="corner h-100">
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Autoplay, Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { getImageUrl } from '@/utils/image';

const config = {
	loop: true,
	autoplay: true,
	modules: [ Autoplay, Navigation, Pagination, Mousewheel ],
	slidesPerView: 1,
	pagination: {
		clickable: true,
		bulletClass: 'swiper-pagination-bullet',
		bulletActiveClass: 'swiper-pagination-bullet-active'
	}
}
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
}
:deep(.swiper-pagination-bullet) {
	&.swiper-pagination-bullet-active {
		background-color: $secondary;
	}
}
</style>
