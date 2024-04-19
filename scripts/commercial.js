let fullscreen = document.querySelectorAll('.full-screen');
let commercialImage = document.querySelectorAll('.commercial-image');

for (image of commercialImage) {
	image.onmousedown = (e) => {
		if (e.target.classList.contains('act-1')) {
			console.log('it contains!');
			for (let i = 0; i < fullscreen.length; i++) {
				fullscreen[i].classList.remove('active');

				if (fullscreen[i].classList.contains('act-1-abs')) {
					fullscreen[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('act-2')) {
			for (let i = 0; i < fullscreen.length; i++) {
				fullscreen[i].classList.remove('active');

				if (fullscreen[i].classList.contains('act-2-abs')) {
					fullscreen[i].classList.add('active');
				}
			}
		}
	};
}

function closeFullscreen() {
	for (let i = 0; i < fullscreen.length; i++) {
		fullscreen[i].classList.remove('active');
	}
}

document.addEventListener('keydown', function (e) {
	if (e.key == 'Escape') {
		for (let i = 0; i < fullscreen.length; i++) {
			fullscreen[i].classList.remove('active');
		}
	}
});
