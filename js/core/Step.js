class Step {
	constructor(label, id, callback) {
		this.label = label;
		this.id = id;
		this.callback = callback;
	}

	render(rootElement, withAnimation) {
		const contentElementInner = document.createElement("div");
		contentElementInner.classList.add("formApp__stepContent");

		withAnimation
			? contentElementInner.classList.add("formApp__stepContent--active")
			: contentElementInner.classList.remove("formApp__stepContent--active");

		rootElement.appendChild(contentElementInner);

		this.callback(contentElementInner);
	}
}

export default Step;
