const controls = document.queryselectorAll('.control');
let conttentitem = 0;
const items = document.querySelectorAll('.items');
const maxItems = item.length;

controls.forEach(control => {
	control.addEventListener('click', () => {
		const isLeft =
		control.classList.contains('arrow-left');

		if (isLeft) {
			currentItem -= 1;
		} else {
			currentItem += 1
		}
		console.log('control clicked', isLeft);
	});
});