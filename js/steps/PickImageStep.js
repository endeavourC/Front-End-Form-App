import Step from "@/js/Step";
import FetchImage from "@/js/FetchImage";
import State from "@/js/State";

const pickImageView = (rootElement) => {
	const handleNextImage = (ev) => {
		ev.preventDefault();
		FetchImage.setNextImage();
	};

	const handlePrevImage = (ev) => {
		ev.preventDefault();
		FetchImage.setPreviousImage();
	};

	const headline = document.createElement("h2");
	headline.innerText = "Wybierz zdjęcie";
	headline.classList.add("headline", "headline--small");

	const currentImage = document.createElement("img");
	currentImage.src = State.getProperty("product").image_src;
	currentImage.width = "250";
	currentImage.height = "250";

	const buttonsContainer = document.createElement("div");
	buttonsContainer.classList.add("buttonsContainer");

	const previousButton = document.createElement("button");
	previousButton.innerText = "Poprzednie zdjęcie";
	previousButton.classList.add("button");
	previousButton.addEventListener("click", handlePrevImage);

	const nextButton = document.createElement("button");
	nextButton.innerText = "Następne zdjęcie";
	nextButton.classList.add("button");
	nextButton.addEventListener("click", handleNextImage);

	buttonsContainer.appendChild(previousButton);
	buttonsContainer.appendChild(nextButton);

	rootElement.appendChild(headline);
	rootElement.appendChild(currentImage);
	rootElement.appendChild(buttonsContainer);
};

const pickImageStep = new Step(
	"Wybierz grafikę",
	"choose-graphic",
	pickImageView
);

export default pickImageStep;
