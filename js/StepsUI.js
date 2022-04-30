import State from "@/js/State";

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
		this.headingElement.innerHTML = "";
		this.headingElement.appendChild(
			this.createButton("Wstecz", this.handlePrevStep.bind(this))
		);

		this.headingElement.appendChild(this.generateSteps());

		this.headingElement.appendChild(
			this.createButton("Dalej", this.handleNextStep.bind(this))
		);
	}

	renderContentElement() {
		const step =
			State.getProperty("steps")[State.getProperty("currentStep") - 1];
		this.contentElemenet.innerHTML = step.callback();
	}

	generateStep(step, index) {
		const stepNumber = index + 1;
		const stepContainer = document.createElement("div");
		stepContainer.classList.add("formApp__step");
		stepContainer.innerText = `${stepNumber}. ${step.label}`;
		stepContainer.classList.remove("formApp__step--active");

		if (index === State.getProperty("currentStep") - 1) {
			stepContainer.classList.add("formApp__step--active");
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

	createButton(innerText, callback) {
		const button = document.createElement("button");
		button.classList.add("button");
		button.innerText = innerText;
		button.addEventListener("click", callback);
		return button;
	}

	handlePrevStep() {
		if (State.getProperty("currentStep") === 1) {
			return;
		}

		State.setProperty((prevState) => ({
			...prevState,
			currentStep: prevState.currentStep - 1,
		}));
	}

	handleNextStep() {
		if (State.getProperty("currentStep") >= State.getProperty("steps").length) {
			return;
		}

		State.setProperty((prevState) => ({
			...prevState,
			currentStep: prevState.currentStep + 1,
		}));
	}
}

export default StepsUI;
