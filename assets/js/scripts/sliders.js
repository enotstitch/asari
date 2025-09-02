import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSwiper() {
	new Swiper('.team__slider', {
		modules: [Navigation],
		slidesPerView: 'auto',
		spaceBetween: 35,
		slidesPerGroup: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			577: {
				slidesPerGroup: 2,
			},
		},
	});

	new Swiper('.career__slider', {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: 10,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
