import State from "@/js/State";

class FormCreator {
	constructor() {
		this.errors = [];
		this.formContainerElement = document.createElement("div");
	}

	createField({
		fieldType,
		fieldName,
		fieldLabel,
		fieldID,
		fieldValue,
		fieldCallback,
		fieldIsChecked,
		fieldValidationRules = [],
	}) {
		const field = document.createElement("div");
		field.classList.add("formField");

		const label = document.createElement("label");
		label.classList.add("formField__label");
		label.innerText = fieldLabel;
		label.setAttribute("for", fieldID);

		const input = document.createElement("input");
		input.classList.add("formField__input");
		input.type = fieldType;
		input.id = fieldID;
		input.name = fieldName;
		input.value = fieldValue;
		input.addEventListener("input", fieldCallback);

		if (fieldType === "radio") {
			input.checked = fieldIsChecked;
			field.classList.add("formField--row");
		}

		field.appendChild(label);
		field.appendChild(input);

		if (fieldValidationRules.length) {
			this.handleValidation(fieldValidationRules, input, field);

			fieldValidationRules.forEach((rule) => {
				this.validateFieldByRule(rule, input, input.value);
			});
		}

		this.formContainerElement.appendChild(field);
	}

	renderFields(rootElement) {
		rootElement.appendChild(this.formContainerElement);
	}

	handleValidation(validationRules, input, field) {
		const messageContainer = document.createElement("div");
		field.appendChild(messageContainer);

		input.addEventListener("input", (ev) => {
			messageContainer.innerHTML = "";
			const inputValue = ev.target.value;
			validationRules.forEach((rule) => {
				this.validateFieldByRule(rule, input, inputValue, messageContainer);
			});
		});
	}

	validateFieldByRule(rule, input, value, messageContainer = null) {
		if (rule.isInvalid(value)) {
			if (messageContainer) {
				rule.printMessage(messageContainer);
			}
			this.errors.push({ fieldName: input.name, message: rule.message });
		} else {
			this.errors = this.errors.filter(
				(error) => error.fieldName !== input.name
			);
		}

		State.setProperty((prevState) => ({
			...prevState,
			disableNextButton: !!this.errors.length,
		}));
	}
}

export default FormCreator;
