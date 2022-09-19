document.querySelector('.closing__block__close').addEventListener('click', () => {
	document.querySelector('.closing__block').classList.toggle('closing__block__none');
});

document.querySelector('.burger__menu').addEventListener('click', () => {
	document.querySelector('.nav').classList.toggle('nav__list__active');
});