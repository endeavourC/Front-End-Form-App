import { PRINT_LOCATION_FRONT, PRINT_LOCATION_BACK } from "@/js/config";

export const getProductLocationLabel = (location) => {
	switch (location) {
		case PRINT_LOCATION_FRONT:
			return "Przód koszulki";
		case PRINT_LOCATION_BACK:
			return "Tył koszulki";
	}
};

export const createTextField = ({ text = "" }) => {
	const textField = document.createElement("p");
	textField.classList.add("text");
	textField.innerHTML = text;

	return textField;
};
