import { PRINT_LOCATION_BACK } from "@/js/config";
import State from "@/js/core/State";
import * as backImageUrl from "@/images/shirt_back.png";
import * as frontImageUrl from "@/images/shirt_front.png";

class Preview {
	constructor(previewElement) {
		this.previewElement = document.querySelector(previewElement);
		this.render();
	}

	render() {
		this.previewElement.innerHTML = "";
		this.previewElement.appendChild(this.createShirtImage());
		this.previewElement.appendChild(this.createPickedImagePreview());
	}

	createShirtImage() {
		const image = document.createElement("img");
		image.width = "218";
		image.height = "236";
		image.src =
			State.getProperty("product").print_location === PRINT_LOCATION_BACK
				? backImageUrl.default
				: frontImageUrl.default;

		return image;
	}

	createPickedImagePreview() {
		const image = document.createElement("img");
		image.classList.add("formApp__previewPickedImage");

		image.src = State.getProperty("product").image_src;

		return image;
	}
}

export default Preview;
