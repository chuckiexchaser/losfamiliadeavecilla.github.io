let infolinks = document.querySelectorAll('.reference');

for (info of infolinks) {
	info.onmousedown = (e) => {
		console.log(e.target);
		if (e.target.classList.contains('rosa')) {
			window.location.href = 'https://www.7continents1passport.com/10-tips-for-starting-a-healthy-lifestyle/?fbclid=IwAR2yUzVQ5jSLRYn3029WqQ5lXGFNudi0PnQrsaJ68OzQm3QmWlusPdXF07o';
		}

		if (e.target.classList.contains('mayo')) {
			window.location.href =
				'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/water/art-20044256#:~:text=Gets%20rid%20of%20wastes%20through,Protects%20sensitive%20tissues';
		}

		if (e.target.classList.contains('ruppel')) {
			window.location.href = 'https://jaimedicalsystems.com/health-benefits-of-reducing-your-screen-time/#:~:text=Reducing%20screen%20time%20can%20open,to%20create%20a%20healthy%20lifestyle';
		}
	};
}
