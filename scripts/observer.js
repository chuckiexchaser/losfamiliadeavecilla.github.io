const observer = new IntersectionObserver((entries) => {
	entries.forEach(
		(entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				setInterval(() => {
					entry.target.classList.remove('hidden');
				}, 3000);
			}
		},
		{
			threshold: 1,
		}
	);
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
