class Rule {
	static message = "";

	static printMessage(selector, messageType = "error") {
		const messageField = document.createElement("p");
		messageField.classList.add(
			"formField__message",
			`formField__message--${messageType}`
		);
		messageField.innerText = this.message;

		selector.appendChild(messageField);
	}

	static isInvalid() {
		throw new Error("Method isInvalid is not implemented");
	}
}

export default Rule;
