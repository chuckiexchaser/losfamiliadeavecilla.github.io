let items = document.querySelectorAll('.item');
let overviews = document.querySelectorAll('.overview');

let maxNumberOfItems = items.length;

let selectedContent = 'infographic';

for (item of items) {
	item.onmousedown = (e) => {
		if (!e.target.classList.contains('active')) {
			for (let i = 0; i < maxNumberOfItems; i++) {
				items[i].classList.remove('active');

				overviews[i].classList.remove('active');
			}

			e.target.classList.add('active');
		}

		if (e.target.classList.contains('scenery')) {
			selectedContent = 'scenery';

			for (let i = 0; i < maxNumberOfItems; i++) {
				if (overviews[i].classList.contains(selectedContent)) {
					overviews[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('infographic')) {
			selectedContent = 'infographic';

			for (let i = 0; i < maxNumberOfItems; i++) {
				if (overviews[i].classList.contains(selectedContent)) {
					overviews[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('reflection')) {
			selectedContent = 'reflection';

			for (let i = 0; i < maxNumberOfItems; i++) {
				if (overviews[i].classList.contains(selectedContent)) {
					overviews[i].classList.add('active');
				}
			}
		}
	};
}
