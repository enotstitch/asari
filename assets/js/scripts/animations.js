import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
	// Первый экран
	gsap.fromTo(
		'.hero__image',
		{
			height: 15,
		},
		{
			height: 270,
			duration: 2,
		},
	);

	gsap.from('.hero__image', {
		height: 270,
		scrollTrigger: {
			trigger: '.hero',
			start: '30% top',
			scrub: 2,
		},
	});

	gsap.fromTo(
		'.hero__text',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.hero',
				start: '30% top',
				scrub: 2,
			},
		},
	);

	// О нас
	gsap.fromTo(
		'.about__content',
		{
			opacity: 0,
			y: 200,
		},
		{
			scrollTrigger: {
				trigger: '.about',
				scrub: 3,
				start: '20% bottom',
				end: 'bottom bottom',
			},
			y: 0,
			opacity: 1,
		},
	);

	gsap.from('.about__img', {
		scrollTrigger: {
			trigger: '.about',
			scrub: 4,
			start: '50% bottom',
			end: 'bottom bottom',
		},
		y: 300,
	});

	// Экспертиза
	gsap.fromTo(
		'.expertise .section-header',
		{
			opacity: 0,
			y: -50,
		},
		{
			scrollTrigger: {
				trigger: '.expertise',
				scrub: 3,
				start: 'top bottom',
				end: '40% bottom',
			},
			y: 0,
			opacity: 1,
		},
	);

	gsap.set('.expertise-card', {
		opacity: 0,
		y: 100,
	});

	const cards = document.querySelectorAll('.expertise-card');

	cards.forEach((item, index) => {
		if (index < 4) {
			gsap.to(cards[index], {
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.expertise',
					start: 'top bottom',
					end: 'bottom bottom',
					scrub: 2,
				},
			});
		}

		if (index > 3 && index < 8) {
			gsap.to(cards[index], {
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.expertise',
					start: '50% bottom',
					end: 'bottom bottom',
					scrub: 2,
				},
			});
		}

		if (index > 7) {
			gsap.to(cards[index], {
				opacity: 1,
				y: 0,
				scrollTrigger: {
					trigger: '.expertise',
					start: '80% bottom',
					end: 'bottom bottom',
					scrub: 2,
				},
			});
		}
	});

	// Команда
	gsap.fromTo(
		'.team',
		{ opacity: 0 },
		{
			opacity: 1,
			scrollTrigger: {
				trigger: '.team',
				scrub: 2,
				end: 'bottom 80%',
			},
		},
	);

	// Новости
	gsap.from('.news .section-header', {
		scrollTrigger: {
			trigger: '.news',
			scrub: 3,
			end: 'bottom 80%',
		},
		y: -50,
		opacity: 0,
	});

	gsap.from('.news-card', {
		scrollTrigger: {
			trigger: '.news',
			scrub: 5,
			start: '10% bottom',
			end: 'bottom bottom',
		},
		stagger: {
			each: 0.3,
			from: 'start',
		},
		y: 150,
		opacity: 0.5,
	});

	// Карьерные перспективы
	gsap.from('.career', {
		scrollTrigger: {
			trigger: '.career',
			scrub: 2,
		},
		y: 100,
	});

	gsap.from('.career__inner', {
		scrollTrigger: {
			trigger: '.career',
			scrub: 3,
			end: 'bottom bottom',
		},
		x: '-100%',
	});

	// Контакты
	gsap.from('.contacts', {
		scrollTrigger: {
			trigger: '.contacts',
			scrub: 2,
		},
		y: 100,
	});

	gsap.from('.contacts__socials', {
		scrollTrigger: {
			trigger: '.contacts',
			start: '30% bottom',
			scrub: 1,
			end: 'bottom bottom',
		},
		x: -100,
	});

	gsap.from('.contacts__address', {
		scrollTrigger: {
			trigger: '.contacts',
			start: '40% bottom',
			scrub: 2.5,
			end: 'bottom bottom',
		},
		x: -120,
	});

	// Анимация, страницы "О нас"
	gsap.set('.page-about__text', {
		y: 100,
	});

	gsap.set('.page-about__text:first-child', {
		y: 0,
	});

	const items = document.querySelectorAll('.page-about__text');

	items.forEach((item, index) => {
		if (index == 0) {
			gsap.to(item, {
				y: '-100vh',
				scrollTrigger: {
					trigger: '.page-about',
					start: 'top top',
					end: 'bottom bottom',
					scrub: 4,
				},
			});
		}

		if (index == 1) {
			gsap.fromTo(
				item,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					scrollTrigger: {
						trigger: '.page-about',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 2,
					},
				},
			);

			gsap.to(item, {
				y: '-50vh',
				scrollTrigger: {
					trigger: '.page-about__wrap:nth-child(2)',
					start: '-10% top',
					end: 'bottom 20%',
					scrub: 4,
				},
			});
		}

		if (index == 2) {
			gsap.fromTo(
				item,
				{
					opacity: 0,
					y: 50,
				},
				{
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: '.page-about__wrap:nth-child(3)',
						start: '40% bottom',
						end: 'bottom 20%',
						scrub: 2,
					},
				},
			);

			gsap.to(item, {
				y: '-20vh',
				scrollTrigger: {
					trigger: '.page-about__wrap:nth-child(3)',
					start: 'top top',
					end: 'bottom bottom',
					scrub: 2,
				},
			});
		}
	});

	// Карточки "О нас"
	gsap.from('.about-cards', {
		y: '100',
		scrollTrigger: {
			trigger: '.about-cards',
			start: 'top bottom',
			end: 'bottom bottom',
			scrub: 2,
		},
	});

	// Доверители
	gsap.from('.conventors', {
		y: '100',
		scrollTrigger: {
			trigger: '.conventors',
			start: 'top bottom',
			end: 'bottom bottom',
			scrub: 2,
			markers: true,
		},
	});

	// Бегущая строка "Победы"
	gsap.to('.victory-ratings', {
		xPercent: -100,
		repeat: -1,
		duration: 10,
		ease: 'linear',
	});
});
