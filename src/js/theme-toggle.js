const themeToggle = () => {
	const checkbox = document.getElementById("theme-toggle__checkbox");
	const body = document.body;

	checkbox.addEventListener("click", () => {
		body.classList.toggle("dark-theme");
	});

	// if user prefers dark theme
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		checkbox.checked = false;
		body.classList.add("dark-theme");
	}

  // TODO: check why sometimes buggy when page reload
	// if user prefers light theme
	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		checkbox.checked = true;
		body.classList.remove("dark-theme");
	}
};

export default themeToggle;
