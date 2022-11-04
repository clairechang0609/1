import * as bootstrap from 'bootstrap';
const { Carousel } = bootstrap;

const mixin = {
	methods: {
		bootstrapCarousel(element) {
			return new Carousel(element);
		}
	}
};

export default mixin;
