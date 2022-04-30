import { initialState } from "@/js/config";

class State {
	static #state = initialState;

	static subscribers = [];

	static setProperty(callback) {
		const newState = callback(this.#state);
		this.#state = newState;

		this.subscribers.forEach((s) => {
			s(newState);
		});
	}

	static subscribe(subscriber) {
		this.subscribers.push(subscriber);
	}

	static getState() {
		return this.#state;
	}

	static getProperty(propertyName) {
		return this.#state[propertyName];
	}
}

export default State;
