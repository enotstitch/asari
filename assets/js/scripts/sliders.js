import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

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
}
