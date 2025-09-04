const quizItems = document.querySelectorAll('.quiz-questions__item');
const quizText = document.querySelector('.quiz-questions__text');

quizItems.forEach((quizItem) => {
	const radioBtn = quizItem.querySelector('.quiz-questions__radio');

	quizItem.addEventListener('click', () => {
		// Сброс у всех элементов
		quizItems.forEach((item) => {
			const radio = item.querySelector('.quiz-questions__radio');
			radio.classList.remove('checked');
			item.style.backgroundColor = '';
		});

		// Отметить выбранный элемент
		radioBtn.classList.add('checked');
		quizItem.style.backgroundColor = 'var(--light-gray-color)';

		// Показать текст под карточкой
		quizText.style.height = '0';
		quizText.classList.remove('show');
		setTimeout(() => {
			quizText.textContent = quizItem.dataset.text;
			quizText.style.height = `${quizText.scrollHeight + 30}px`;
			quizText.classList.add('show');
		}, 500);
	});
});
