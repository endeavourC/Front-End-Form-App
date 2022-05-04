import { API_URL } from "@/js/config";
import State from "@/js/State";

class FetchImage {
	static currentImageID = Math.floor(Math.random() * 100);

	static imageSize = 530;

	static async generateImage() {
		const request = await fetch(
			`${API_URL}/id/${this.currentImageID}/${this.imageSize}`
		);
		const getBlob = await request.blob();

		State.setProperty((prevState) => ({
			...prevState,
			product: {
				...prevState.product,
				image_src: URL.createObjectURL(getBlob),
			},
		}));
	}

	static setNextImage() {
		this.currentImageID++;
		return this.generateImage();
	}

	static setPreviousImage() {
		if (this.currentImageID === 1) return;

		this.currentImageID--;
		return this.generateImage();
	}
}

export default FetchImage;
