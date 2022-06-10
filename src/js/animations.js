const observeElementAndAddAnimation = (
	elementsToObserve,
	animationToAdd,
	opacityNeeded = false,
	elementsForAnimation = null
) => {
	const observer = new IntersectionObserver((entries) => {
		// Loop over the entries
		entries.forEach((entry) => {
			// If the element is visible
			if (entry.isIntersecting) {
				// Add the animation class
				// if element for animation is not the observed element (for adding to children e.g)
				if (elementsForAnimation != null) {
					entry.target
						.querySelectorAll(elementsForAnimation)
						.forEach((element) => {
							element.classList.add(animationToAdd);
						});
				} else {
					entry.target.classList.add(animationToAdd);
				}
				return;
			}

			// if adding the animation is buggy add opacity
			if (elementsForAnimation != null) {
				entry.target
					.querySelectorAll(elementsForAnimation)
					.forEach((element) => {
						if (opacityNeeded) {
              element.classList.add("remove-opacity");
							element.classList.remove(animationToAdd);
						}
					});
			} else {
				if (opacityNeeded) {
          entry.target.classList.add("remove-opacity");
				}
				entry.target.classList.remove(animationToAdd);
			}
		});
	});

	elementsToObserve.forEach((element) => {
		observer.observe(element);
	});
};

const initAnimations = () => {
	observeElementAndAddAnimation(
		document.querySelectorAll(".hero__greeting"),
		"animation__slide-in-from-left",
		true,
		".greeting__item"
  );
  
  observeElementAndAddAnimation(
    document.querySelectorAll(".settings-sidebar__item"),
    "animation__slide-in-from-right",
    true
  );
};

export default initAnimations;
