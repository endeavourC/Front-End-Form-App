import { PRINT_LOCATION_BACK } from "@/js/config";
import State from "@/js/State";
import * as backImageUrl from "@/images/shirt_back.png";
import * as frontImageUrl from "@/images/shirt_front.png";

class Preview {
	constructor(previewElement) {
		this.previewElement = document.querySelector(previewElement);
		this.render();
	}

	render() {
		this.previewElement.innerHTML = "";
		this.previewElement.appendChild(this.createBasicImage());
	}

	createBasicImage() {
		const image = document.createElement("img");
		image.src =
			State.getProperty("product").print_location === PRINT_LOCATION_BACK
				? backImageUrl.default
				: frontImageUrl.default;

		return image;
	}
}

export default Preview;
