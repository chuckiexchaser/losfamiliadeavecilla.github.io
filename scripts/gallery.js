let x = document.querySelectorAll('.images-gallery');
let y = document.querySelectorAll('.absolute-images');
let z = document.querySelectorAll('.close');

for (b of x) {
	b.onmousedown = (e) => {
		if (e.target.classList.contains('bgc-1')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('bgc-1')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('bgc-2')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('bgc-2')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('bgc-3')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('bgc-3')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('ortigas-1-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('ortigas-1')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('ortigas-2-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('ortigas-2')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('ortigas-3-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('ortigas-3')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('intramuros-1-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('intramuros-1')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('intramuros-2-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('intramuros-2')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('intramuros-3-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('intramuros-3')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('riverbank-1-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('riverbank-1')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('riverbank-2-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('riverbank-2')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('riverbank-3-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('riverbank-3')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('complex-1-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('complex-1')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('complex-2-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('complex-2')) {
					y[i].classList.remove('inactive');
				}
			}
		}

		if (e.target.classList.contains('complex-3-gallery')) {
			for (let i = 0; i < y.length; i++) {
				if (y[i].classList.contains('complex-3')) {
					y[i].classList.remove('inactive');
				}
			}
		}
	};
}

function addInactive() {
	for (let i = 0; i < y.length; i++) {
		y[i].classList.add('inactive');
	}
}

document.addEventListener('keydown', function (e) {
	if (e.key == 'Escape') {
		for (let i = 0; i < y.length; i++) {
			y[i].classList.add('inactive');
		}
	}
});
