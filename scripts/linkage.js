let links = document.querySelectorAll('.link');
let logo = document.querySelector('logo');

for (link of links) {
	link.onmousedown = (e) => {
		if (e.target.classList.contains('link')) {
			window.location.href = '../index.html';
		}

		if (e.target.classList.contains('link')) {
			window.location.href = '../index.html';
		}
	};
}

function home() {
	window.location.href = '../index.html';
}
