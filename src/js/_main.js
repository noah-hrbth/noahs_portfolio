/*====================================
=========== Imports ==================
======================================*/
import initHeader from "./header";
import documentHeight from "./_functions";
import themeToggle from "./theme-toggle";
import initAnimations from "./animations";
import initSettings from "./settings";

export const initJavaScript = () => {
	document.addEventListener("DOMContentLoaded", () => {
		initHeader();
		documentHeight();
		themeToggle();
		initAnimations();
		initSettings();

		window.addEventListener("resize", () => {
			documentHeight();
		});
	});
};
