<template>
	<div class="work-wrap pt-5 mx-auto">
		<div class="row gx-5 pb-4">
			<div class="col-md-6 mb-4 mb-md-0">
				<div class="title-card h-100">
					<div class="title-card-body p-3">
						<h3 class="title mb-2">{{ $route.params?.category }}</h3>
						<h5 class="subtitle position-relative d-inline-block fs-7">{{ category?.title }}</h5>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="work-content">
					<small class="mb-1 d-block">{{ collection?.date }}</small>
					<h4 class="mb-4">{{ collection?.masthead }}</h4>
					<div class="mb-3">
						<h6 class="mb-1">{{ collection?.title }}</h6>
						<p class="fs-7">{{ collection?.subtitle }}</p>
					</div>
					<small class="d-block">{{ collection?.credit }}</small>
				</div>
			</div>
		</div>
		<ul class="image-content pt-4 pt-md-5">
			<li class="image-wrap mb-4 mb-md-5" :alt="item" v-for="item in collection.images" :key="item">
				<img :src="getImageUrl(route.params?.category, item)" class="image w-100">
			</li>
		</ul>
		<div>
			<router-link :to="{ name: 'Home' }" class="fs-8">
				<i class="bi bi-arrow-left me-1"></i>back home
			</router-link>
		</div>
	</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import defaultStore from '@/stores/index';

export default {
	name: 'Work',
	setup() {
		const route = useRoute();
		const { works, getImageUrl } = defaultStore();
		const category = computed(() => works[route.params?.category]);
		const collection = computed(() => {
			return category.value?.collections?.find(item => item.id === Number(route.params?.id));
		});

		return {
			// data
			route,
			works,
			// computed
			category,
			collection,
			// methods
			getImageUrl
		};
	}
};
</script>

<style lang="scss" scoped>
	.work-wrap {
		max-width: 1000px;
	}
	.title-card {
		border: 7px solid $black;
	}
	.subtitle {
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
	.image {
		filter: drop-shadow(0 3px 4px rgba($black, 0.3));
	}
</style>
