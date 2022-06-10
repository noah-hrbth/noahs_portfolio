const openSettings = () => {
  const openBtn = document.querySelector(".settings__button");
  const settingSidebar = document.querySelector(".settings-sidebar");
	const settingSidebarItems = document.querySelectorAll(
		".settings-sidebar__item"
	);
	const tabindexArray = [
		document.querySelector(".close-button"),
		document.querySelector(".theme-toggle__checkbox"),
		document.querySelector(".adhd-toggle__checkbox"),
	];

	openBtn.addEventListener("click", () => {
		settingSidebarItems.forEach((item) => {
			item.classList.remove("animation__slide-out-to-right");
		});

		tabindexArray.forEach((element) => {
			element.setAttribute("tabindex", "0");
		});

		settingSidebar.classList.add("settings-sidebar--active");
    settingSidebar.setAttribute("aria-hidden", "false");
	});
};

const closeSettings = () => {
	const closeBtn = document.querySelector(".close-button");
	const settingSidebar = document.querySelector(".settings-sidebar");
	const settingSidebarItems = document.querySelectorAll(
		".settings-sidebar__item"
	);
	const tabindexArray = [
		document.querySelector(".close-button"),
		document.querySelector(".theme-toggle__checkbox"),
		document.querySelector(".adhd-toggle__checkbox"),
	];

	closeBtn.addEventListener("click", () => {
		settingSidebarItems.forEach((item) => {
			item.classList.add("animation__slide-out-to-right");
		});

		tabindexArray.forEach((element) => {
			element.setAttribute("tabindex", "-1");
		});

		settingSidebar.classList.remove("settings-sidebar--active");
    settingSidebar.setAttribute("aria-hidden", "true");
	});
};

const toggleADHDReading = () => {
	const adhdToggleCheckbox = document.querySelector(".adhd-toggle__checkbox");
	const adhdExampleText = document.querySelector(".adhd-example-text");
	const bionicText = document.querySelectorAll(".bionic-text");

	adhdToggleCheckbox.addEventListener("click", () => {
		if (adhdExampleText.classList.contains("animation__slide-out-to-top")) {
			adhdExampleText.classList.remove("animation__slide-out-to-top");
			adhdExampleText.classList.add("animation__slide-in-from-top");
		} else {
			adhdExampleText.classList.remove("animation__slide-in-from-top");
			adhdExampleText.classList.add("animation__slide-out-to-top");
		}

		bionicText.forEach((text) => {
			text.classList.toggle("bionic-text--enabled");
		});
	});
};

const initSettings = () => {
	openSettings();
	closeSettings();
	toggleADHDReading();
};

export default initSettings;
