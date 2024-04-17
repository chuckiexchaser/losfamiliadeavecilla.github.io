let cards = document.querySelectorAll('.card');

var alpuerto = 'alpuerto';
var avecilla = 'avecilla';
var gutierrez = 'gutierrez';
var neri = 'neri';
var oliveros = 'oliveros';
var selosa = 'selosa';
var viterbo = 'viterbo';

for (card of cards) {
	card.onmousedown = (e) => {
		console.log(e.target);
		if (e.target.classList.contains('alpuerto')) {
			localStorage.setItem('lastActive', alpuerto);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('avecilla')) {
			localStorage.setItem('lastActive', avecilla);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('gutierrez')) {
			localStorage.setItem('lastActive', gutierrez);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('neri')) {
			localStorage.setItem('lastActive', neri);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('oliveros')) {
			localStorage.setItem('lastActive', oliveros);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('selosa')) {
			localStorage.setItem('lastActive', selosa);

			window.location.href = 'pages/member.html';
		}

		if (e.target.classList.contains('viterbo')) {
			localStorage.setItem('lastActive', viterbo);

			window.location.href = 'pages/member.html';
		}
	};
}
