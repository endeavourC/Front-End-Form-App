import State from "@/js/State";
import {
	FORM_APP_PREV_BUTTON_ID,
	FORM_APP_NEXT_BUTTON_ID,
	FORM_APP_STEP_CLASS,
	FORM_APP_STEP_ACTIVE_CLASS,
} from "@/js/config";

class StepsUI {
	constructor(headingElement, contentElemenet) {
		this.headingElement = document.querySelector(headingElement);
		this.contentElemenet = document.querySelector(contentElemenet);
	}

	render() {
		this.renderHeadingElement();
		this.renderContentElement();
	}

	renderHeadingElement() {
		this.handleDisableButtons();
		this.headingElement.innerHTML = "";

		this.headingElement.appendChild(
			this.createButton(
				"Wstecz",
				this.handlePrevStep.bind(this),
				FORM_APP_PREV_BUTTON_ID
			)
		);

		this.headingElement.appendChild(this.generateSteps());

		this.headingElement.appendChild(
			this.createButton(
				"Dalej",
				this.handleNextStep.bind(this),
				FORM_APP_NEXT_BUTTON_ID
			)
		);
	}

	renderContentElement() {
		const step =
			State.getProperty("steps")[State.getProperty("currentStep") - 1];
		step.callback(this.contentElemenet);
	}

	generateStep(step, index) {
		const stepNumber = index + 1;
		const stepContainer = document.createElement("div");
		stepContainer.classList.add(FORM_APP_STEP_CLASS);
		stepContainer.innerText = `${stepNumber}. ${step.label}`;
		stepContainer.classList.remove(FORM_APP_STEP_ACTIVE_CLASS);

		if (stepNumber === State.getProperty("currentStep")) {
			stepContainer.classList.add(FORM_APP_STEP_ACTIVE_CLASS);
		}

		return stepContainer;
	}

	generateSteps() {
		const stepsContainer = document.createElement("div");
		stepsContainer.classList.add("formApp__stepsContainer");
		State.getProperty("steps").forEach((step, index) => {
			stepsContainer.appendChild(this.generateStep(step, index));
		});

		return stepsContainer;
	}

	createButton(innerText, callback, buttonType) {
		const button = document.createElement("button");
		button.classList.add("button");
		button.innerText = innerText;
		button.addEventListener("click", () => callback(button));

		switch (buttonType) {
			case FORM_APP_PREV_BUTTON_ID:
				button.disabled = State.getProperty("disablePrevButton");
				break;
			case FORM_APP_NEXT_BUTTON_ID:
				button.disabled = State.getProperty("disableNextButton");
				break;
		}

		return button;
	}

	handlePrevStep() {
		State.setProperty((prevState) => ({
			...prevState,
			currentStep: prevState.currentStep - 1,
		}));
	}

	handleNextStep() {
		State.setProperty((prevState) => ({
			...prevState,
			currentStep: prevState.currentStep + 1,
		}));
	}

	handleDisableButtons() {
		State.setProperty((prevState) => ({
			...prevState,
			disablePrevButton: State.getProperty("currentStep") === 1,
		}));

		if (State.getProperty("currentStep") >= State.getProperty("steps").length) {
			State.setProperty((prevState) => ({
				...prevState,
				disableNextButton: true,
			}));
		}
	}
}

export default StepsUI;
