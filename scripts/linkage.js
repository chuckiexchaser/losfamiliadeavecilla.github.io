let links = document.querySelectorAll('.link');
let logo = document.querySelector('logo');

for (link of links) {
	link.onmousedown = (e) => {
		if (e.target.classList.contains('link')) {
			if (!e.target.classList.contains('com')) {
				window.location.href = '../index.html';
			} else {
				window.location.href = 'commercial.html';
			}
		}
	};
}

function home() {
	window.location.href = '../index.html';
}
