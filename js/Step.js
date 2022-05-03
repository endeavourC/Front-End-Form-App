class Step {
	constructor(label, id, callback) {
		this.label = label;
		this.id = id;
		this.callback = callback;
	}

	render(rootElement) {
		rootElement.innerHTML = "";
		const contentElementInner = document.createElement("div");
		contentElementInner.classList.add("formApp__stepContent");

		rootElement.appendChild(contentElementInner);

		this.callback(contentElementInner);
	}
}

export default Step;
