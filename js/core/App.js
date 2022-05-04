import State from "@/js/core/State";
import FetchImage from "@/js/core/FetchImage";
import ThankYouUI from "@/js/core/ThankYouUI";

class App {
	constructor(stepsUI, previewUI, currentPriceUI) {
		this.stepsUI = stepsUI;
		this.previewUI = previewUI;
		this.currentPriceUI = currentPriceUI;
		this.rootElement = document.querySelector(".formApp");
	}

	addStep(step) {
		State.setProperty((prevState) => ({
			...prevState,
			steps: [...prevState.steps, step],
		}));
	}

	start() {
		this.stepsUI.render();
		FetchImage.generateImage();

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

		State.subscribe((state, oldState) => {
			if (state.isFinalized !== oldState.isFinalized) {
				this.rootElement.innerHTML = "";
				const thankYou = new ThankYouUI(this.rootElement);

				thankYou.render();
			}
		});
	}
}

export default App;
