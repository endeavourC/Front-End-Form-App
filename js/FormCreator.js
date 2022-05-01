class FormCreator {
	constructor(validator = null) {
		this.validator = validator;

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
		}

		field.appendChild(label);
		field.appendChild(input);

		this.formContainerElement.appendChild(field);
	}

	renderFields(rootElement) {
		rootElement.appendChild(this.formContainerElement);
	}
}

export default FormCreator;
