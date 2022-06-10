const styleHeaderOnScroll = () => {
	const header = document.getElementById("header");

	// as soon as scrolled header get's styled
	if (window.pageYOffset > 2) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
};

const styleResumeMobileBtnOnScroll = () => {
	const hero = document.querySelector(".hero");
	const resumeMobileBtn = document.querySelector(".resume-button");

	if (window.pageYOffset > hero?.offsetHeight) {
		resumeMobileBtn.classList.remove("animation__slide-out-to-right");
		resumeMobileBtn.classList.add("animation__slide-in-from-right");
		resumeMobileBtn.classList.add("add-visibility");
	} else {
		resumeMobileBtn.classList.remove("animation__slide-in-from-right");
		resumeMobileBtn.classList.add("animation__slide-out-to-right");
	}
};

const initHeader = () => {
  styleHeaderOnScroll();
  styleResumeMobileBtnOnScroll();

	window.onscroll = () => {
		styleHeaderOnScroll();
		styleResumeMobileBtnOnScroll();
	};
};

export default initHeader;
