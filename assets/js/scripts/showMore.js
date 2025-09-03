export const initShowMore = () => {
	const showMoreBtn = document.querySelector('.button-show-more');

	if (!showMoreBtn) return;

	showMoreBtn.addEventListener('click', () => {
		const slider = showMoreBtn.closest('.swiper');
		const sliderWrap =
			slider.querySelector('.swiper-wrapper') || slider.querySelector('.services__cards');
		const arrows = slider.querySelector('.services__arrows');
		const isSlider = showMoreBtn.textContent.trim() === 'Показать полностью';

		if (isSlider) {
			showMoreBtn.textContent = 'Свернуть';
			sliderWrap.style.pointerEvents = 'none';
		} else {
			showMoreBtn.textContent = 'Показать полностью';
			sliderWrap.style.pointerEvents = 'all';
		}

		sliderWrap.classList.toggle('swiper-wrapper');
		sliderWrap.classList.toggle('services__cards');
		sliderWrap.style.transform = 'none';
		arrows.classList.toggle('is-hidden');
	});
};
