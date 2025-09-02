import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

// Первый экран
gsap.to('.hero__image', {
	height: 270,
	duration: 1,
});
