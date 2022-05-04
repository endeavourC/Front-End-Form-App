import State from "@/js/core/State";

class CurrentPriceUI {
	constructor(priceElement) {
		this.priceElement = document.querySelector(priceElement);

		this.render();
	}

	render() {
		this.priceElement.innerHTML = "";
		this.priceElement.appendChild(this.createPriceField());
	}

	createPriceField() {
		const currentPrice = State.getProperty("product").price;
		const priceField = document.createElement("p");
		priceField.classList.add("formApp__price");
		priceField.innerText = `Aktualna Cena: ${currentPrice} jednostek`;

		return priceField;
	}
}

export default CurrentPriceUI;
