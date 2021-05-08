const toggleIcon = document.querySelector('.toggle__icon');
const items = document.querySelector('.nav__items');
const icons = document.querySelector('.nav__icons');

toggleIcon.addEventListener('click', () => {
	items.classList.toggle('active');
	icons.classList.toggle('active');
});
