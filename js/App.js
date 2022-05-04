import State from "@/js/State";

class App {
	constructor(stepsUI, previewUI, currentPriceUI) {
		this.stepsUI = stepsUI;
		this.previewUI = previewUI;
		this.currentPriceUI = currentPriceUI;
	}

	addStep(step) {
		State.setProperty((prevState) => ({
			...prevState,
			steps: [...prevState.steps, step],
		}));
	}

	start() {
		this.stepsUI.render();

		State.subscribe((state, oldState) => {
			if (state.currentStep !== oldState.currentStep) {
				this.stepsUI.handleDisableButtons();
				this.stepsUI.render(true);
				this.currentPriceUI.render();
			}
		});

		State.subscribe((state, oldState) => {
			if (state.disableNextButton !== oldState.disableNextButton) {
				this.stepsUI.renderHeadingElement();
			}
		});

		State.subscribe((state, oldState) => {
			if (state.product !== oldState.product) {
				this.previewUI.render();
				this.stepsUI.render();
			}
		});
	}
}

export default App;
