import Step from "@/js/Step";
import State from "@/js/State";
import { getProductLocationLabel, createTextField } from "@/js/helpers";

const summaryView = (rootElement) => {
	const product = State.getProperty("product");
	const customer = State.getProperty("customer");

	const headline = document.createElement("h3");
	headline.innerText = "Podsumowanie zamówienia";
	headline.classList.add("headline", "headline--small");

	const summary = document.createElement("div");

	summary.appendChild(
		createTextField({
			text: `Strona koszulki: ${getProductLocationLabel(
				product.print_location
			)}`,
		})
	);

	summary.appendChild(
		createTextField({
			text: `Imię i nazwisko: ${customer.name} ${customer.surname}`,
		})
	);

	summary.appendChild(
		createTextField({
			text: `Numer telefonu: ${customer.phone}`,
		})
	);

	summary.appendChild(
		createTextField({
			text: `E-mail: ${customer.email}`,
		})
	);

	summary.appendChild(
		createTextField({
			text: `Adres: ${customer.address} ${customer.building_number} ${customer.flat_number}, <br> ${customer.zip_code}, <br> ${customer.city}`,
		})
	);

	const submitButton = document.createElement("button");
	submitButton.classList.add("button");
	submitButton.innerText = "Złóż zamówienie";
	submitButton.addEventListener("click", () => {
		State.setProperty((prevState) => ({ ...prevState, isFinalized: true }));
	});

	rootElement.appendChild(headline);
	rootElement.appendChild(summary);
	rootElement.appendChild(submitButton);
};

const summaryStep = new Step("Podsumowanie", "summary", summaryView);

export default summaryStep;
