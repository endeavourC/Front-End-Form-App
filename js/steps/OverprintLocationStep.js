import Step from "@/js/core/Step";
import State from "@/js/core/State";
import FormCreator from "@/js/core/FormCreator";

const overprintView = (rootElement) => {
	const formCreator = new FormCreator();

	const handleOverprintChange = (ev) => {
		State.setProperty((prevState) => ({
			...prevState,
			product: {
				...prevState.product,
				print_location: ev.target.value,
			},
		}));
	};

	formCreator.createField({
		fieldType: "radio",
		fieldName: "overprint-location",
		fieldLabel: "Przód koszulki",
		fieldValue: "front",
		fieldID: "front",
		fieldIsChecked: State.getProperty("product").print_location === "front",
		fieldCallback: handleOverprintChange,
	});

	formCreator.createField({
		fieldType: "radio",
		fieldName: "overprint-location",
		fieldLabel: "Tył koszulki",
		fieldValue: "back",
		fieldID: "back",
		fieldIsChecked: State.getProperty("product").print_location === "back",
		fieldCallback: handleOverprintChange,
	});

	formCreator.renderFields(rootElement);
};

const overprintLocationStep = new Step(
	"Miejsce Nadruku",
	"overprint-location",
	overprintView
);

export default overprintLocationStep;
