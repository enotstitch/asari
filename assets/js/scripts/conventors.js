export function initConventors() {
	const conventorsLinks = document.querySelectorAll('.conventors-links__item');

	if (!conventorsLinks) return;

	const containerImg = document.querySelector('.conventors__img');

	const img = document.createElement('img');
	img.src = conventorsLinks[0].dataset.img;
	containerImg.appendChild(img);

	conventorsLinks.forEach((link) => {
		link.addEventListener('mouseenter', () => {
			const img = document.createElement('img');
			img.src = link.dataset.img;
			containerImg.innerHTML = '';
			containerImg.appendChild(img);
		});
	});
}
