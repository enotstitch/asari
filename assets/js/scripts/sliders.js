import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSwiper() {
	try {
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
	} catch {
		console.warn('Слайдер не инициализирован');
	}

	try {
		new Swiper('.career__slider', {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 10,

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	} catch {
		console.warn('Слайдер не инициализирован');
	}

	try {
		new Swiper('.admins__slider', {
			modules: [Pagination],
			slidesPerView: 'auto',
			spaceBetween: 10,

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	} catch {
		console.warn('Слайдер не инициализирован');
	}

	try {
		new Swiper('.services__slider', {
			modules: [Navigation],
			slidesPerView: 'auto',
			spaceBetween: 20,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	} catch {
		console.warn('Слайдер не инициализирован');
	}
}
