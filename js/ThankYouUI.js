import State from "@/js/State";
import { createTextField, getProductLocationLabel } from "@/js/helpers";

class ThankYouUI {
	constructor(rootElement) {
		this.rootElement = rootElement;
	}

	render() {
		const product = State.getProperty("product");
		const customer = State.getProperty("customer");
		const dataToSend = {
			...product,
			...customer,
		};

		const thankYouGrid = document.createElement("div");
		thankYouGrid.classList.add("thankYou__grid");

		const thankYouImageContainer = document.createElement("div");
		thankYouImageContainer.classList.add("thankYou__imageContainer");
		thankYouImageContainer.innerHTML = `<img src="${product.image_src}" alt="Selected Image" class="thankYou__image">`;

		const thankYouContainer = document.createElement("div");
		thankYouContainer.classList.add("thankYou");

		const headline = document.createElement("h3");
		headline.innerText = "Dziękujemy za złożenie zamówienia";
		headline.classList.add("headline", "headline--small", "headline--center");

		const thankYouData = document.createElement("div");
		thankYouData.classList.add("thankYou__data");

		thankYouData.appendChild(
			createTextField({
				text: `Strona koszulki: ${getProductLocationLabel(
					product.print_location
				)}`,
			})
		);

		thankYouData.appendChild(
			createTextField({
				text: `Cena: ${product.price} jednostek`,
			})
		);

		thankYouData.appendChild(
			createTextField({
				text: `Imię i nazwisko: ${customer.name} ${customer.surname}`,
			})
		);

		thankYouData.appendChild(
			createTextField({
				text: `Numer telefonu: ${customer.phone}`,
			})
		);

		thankYouData.appendChild(
			createTextField({
				text: `E-mail: ${customer.email}`,
			})
		);

		thankYouData.appendChild(
			createTextField({
				text: `Adres: ${customer.address} ${customer.building_number} ${customer.flat_number}, <br> ${customer.zip_code}, <br> ${customer.city}`,
			})
		);

		thankYouGrid.appendChild(thankYouData);
		thankYouGrid.appendChild(thankYouImageContainer);

		thankYouContainer.appendChild(headline);
		thankYouContainer.appendChild(thankYouGrid);

		this.rootElement.appendChild(thankYouContainer);
		console.log(dataToSend);
	}
}

export default ThankYouUI;
