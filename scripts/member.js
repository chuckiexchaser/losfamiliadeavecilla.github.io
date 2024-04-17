let memberNavigationDots = document.querySelectorAll('.dot');
let memberContainers = document.querySelectorAll('.member-container');
let socialLinks = document.querySelectorAll('.contact-icon');

let maxNumberOfMember = memberNavigationDots.length;

let activePanel;

var lastMouseDownActive = localStorage.getItem('lastActive');

if (lastMouseDownActive == 'alpuerto') {
	activePanel = 'alpuerto';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'avecilla') {
	activePanel = 'avecilla';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'gutierrez') {
	activePanel = 'gutierrez';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'neri') {
	activePanel = 'neri';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'oliveros') {
	activePanel = 'oliveros';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'selosa') {
	activePanel = 'selosa';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

if (lastMouseDownActive == 'viterbo') {
	activePanel = 'viterbo';

	for (let i = 0; i < maxNumberOfMember; i++) {
		memberNavigationDots[i].classList.remove('active');
		memberContainers[i].classList.remove('active');
	}

	for (let i = 0; i < maxNumberOfMember; i++) {
		if (memberContainers[i].classList.contains(activePanel)) {
			memberNavigationDots[i].classList.add('active');
			memberContainers[i].classList.add('active');
		}
	}
}

for (member of memberNavigationDots) {
	member.onmousedown = (e) => {
		if (!e.target.classList.contains('active')) {
			for (let i = 0; i < maxNumberOfMember; i++) {
				memberNavigationDots[i].classList.remove('active');

				memberContainers[i].classList.remove('active');
			}

			e.target.classList.add('active');
		}

		if (e.target.classList.contains('alpuerto')) {
			activePanel = 'alpuerto';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('avecilla')) {
			activePanel = 'avecilla';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('gutierrez')) {
			activePanel = 'gutierrez';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('neri')) {
			activePanel = 'neri';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('oliveros')) {
			activePanel = 'oliveros';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('selosa')) {
			activePanel = 'selosa';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}

		if (e.target.classList.contains('viterbo')) {
			activePanel = 'viterbo';

			for (let i = 0; i < maxNumberOfMember; i++) {
				if (memberContainers[i].classList.contains(activePanel)) {
					memberContainers[i].classList.add('active');
				}
			}
		}
	};
}

for (social of socialLinks) {
	social.onmousedown = (e) => {
		if (e.target.classList.contains('alpuerto')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://web.facebook.com/profile.php?id=100004830136910&mibextid=JRoKGi&_rdc=1&_rdr';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				window.location.href = 'https://www.instagram.com/lyn_czyla?igsh=MWJqODRxOTBrbmV1cg==';
			}
		}

		if (e.target.classList.contains('avecilla')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://web.facebook.com/laciello';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				alert('No IG');
			}
		}

		if (e.target.classList.contains('gutierrez')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://web.facebook.com/jodielyn.gutierrez?mibextid=ZbWKwL&_rdc=1&_rdr';
			}
			if (e.target.classList.contains('twitter')) {
				window.location.href = 'https://twitter.com/stuckonjy?t=z2vlLER9W23Uiiwnq9-XlA&s=09';
			}
			if (e.target.classList.contains('instagram')) {
				window.location.href = 'https://www.instagram.com/jodyyline?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
			}
		}

		if (e.target.classList.contains('neri')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://www.facebook.com/ryan.neri.923?mibextid=ZbWKwL';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				alert('No IG');
			}
		}

		if (e.target.classList.contains('oliveros')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://www.facebook.com/ryyyoliveros?mibextid=ZbWKwL';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				alert('No IG');
			}
		}

		if (e.target.classList.contains('selosa')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://www.facebook.com/appleanndanielle.selosa?mibextid=LQQJ4d';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				window.location.href = 'https://www.instagram.com/_aaadanielle?igsh=MXNjMTN6Zm51dnJsdw%3D%3D&utm_source=qr';
			}
		}

		if (e.target.classList.contains('viterbo')) {
			if (e.target.classList.contains('facebook')) {
				window.location.href = 'https://www.facebook.com/archiii.v';
			}
			if (e.target.classList.contains('twitter')) {
				alert('No X');
			}
			if (e.target.classList.contains('instagram')) {
				alert('No IG');
			}
		}
	};
}
