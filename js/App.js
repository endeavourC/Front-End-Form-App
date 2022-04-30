import State from "@/js/State";

class App {
	addStep(step) {
		State.setProperty((prevState) => ({
			...prevState,
			steps: [...prevState.steps, step],
		}));
	}
}

export default App;
