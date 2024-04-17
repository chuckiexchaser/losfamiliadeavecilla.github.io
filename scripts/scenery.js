let sceneryNavigationDots = document.querySelectorAll('.dot');
let sceneryContainers = document.querySelectorAll('.scenery-container');

let maxNumberOfSceneries = sceneryNavigationDots.length;

let activePanel = 'bgc';

for (scenery of sceneryNavigationDots) {
	scenery.onmousedown = (e) => {
		if (!e.target.classList.contains('active')) {
			for (let i = 0; i < maxNumberOfSceneries; i++) {
				sceneryNavigationDots[i].classList.remove('active');

				sceneryContainers[i].classList.remove('active');
			}

			e.target.classList.add('active');
		}

		if (e.target.classList.contains('bgc')) {
			activePanel = 'bgc';

			for (let i = 0; i < maxNumberOfSceneries; i++) {
				if (sceneryContainers[i].classList.contains(activePanel)) {
					sceneryContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('ortigas')) {
			activePanel = 'ortigas';

			for (let i = 0; i < maxNumberOfSceneries; i++) {
				if (sceneryContainers[i].classList.contains(activePanel)) {
					sceneryContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('intramuros')) {
			activePanel = 'intramuros';

			for (let i = 0; i < maxNumberOfSceneries; i++) {
				if (sceneryContainers[i].classList.contains(activePanel)) {
					sceneryContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('riverbank')) {
			activePanel = 'riverbank';

			for (let i = 0; i < maxNumberOfSceneries; i++) {
				if (sceneryContainers[i].classList.contains(activePanel)) {
					sceneryContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('complex')) {
			activePanel = 'complex';

			for (let i = 0; i < maxNumberOfSceneries; i++) {
				if (sceneryContainers[i].classList.contains(activePanel)) {
					sceneryContainers[i].classList.add('active');
				}
			}
		}
	};
}
