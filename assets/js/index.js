window.addEventListener("scroll", function () {
	const navbarButton = document.querySelector("#navbarButton");
	const header = document.querySelector("#topheader");
	const heroSection = document.querySelector("#hero");
	const heroSectionHeight = heroSection.offsetHeight - 20;

	if (window.pageYOffset > heroSectionHeight) {
		header.classList.add("bg-c-white");
		header.classList.add("text-c-black");
		header.classList.remove("bg-transparent");
		header.classList.remove("text-c-white");
		navbarButton.classList.add("text-c-black");
		navbarButton.classList.remove("text-c-white");
	} else {
		header.classList.remove("bg-c-white");
		header.classList.remove("text-c-black");
		header.classList.add("bg-transparent");
		header.classList.add("text-c-white");
		navbarButton.classList.add("text-c-white");
		navbarButton.classList.remove("text-c-black");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const heroSection = document.querySelector("#hero");
	const heroSectionHeight = heroSection?.offsetHeight - 20;

	const button = document.querySelector("#navbarButton");
	const dropdown = document.querySelector("#navbarDropdown");
	const overlay = document.querySelector("#navbarDropdownOverlay");
	const header = document.querySelector("#topheader");

	button.addEventListener("click", function () {
		if (dropdown.classList.contains("hidden")) {
			header.classList.add("bg-c-white");
			header.classList.add("text-c-black");
			header.classList.remove("bg-transparent");
			header.classList.remove("text-c-white");
			navbarButton.classList.add("text-c-black");
			navbarButton.classList.remove("text-c-white");
		} else {
			if (window.pageYOffset < heroSectionHeight) {
				header.classList.remove("bg-c-white");
				header.classList.remove("text-c-black");
				header.classList.add("bg-transparent");
				header.classList.add("text-c-white");
				navbarButton.classList.add("text-c-white");
				navbarButton.classList.remove("text-c-black");
			}
		}

		dropdown.classList.toggle("hidden");
	});

	overlay.addEventListener("click", function () {
		if (dropdown.classList.contains("hidden")) {
			header.classList.add("bg-c-white");
			header.classList.add("text-c-black");
			header.classList.remove("bg-transparent");
			header.classList.remove("text-c-white");
			navbarButton.classList.add("text-c-black");
			navbarButton.classList.remove("text-c-white");
		} else {
			if (window.pageYOffset < heroSectionHeight) {
				header.classList.remove("bg-c-white");
				header.classList.remove("text-c-black");
				header.classList.add("bg-transparent");
				header.classList.add("text-c-white");
				navbarButton.classList.add("text-c-white");
				navbarButton.classList.remove("text-c-black");
			}
		}

		dropdown.classList.toggle("hidden");
	});
});
