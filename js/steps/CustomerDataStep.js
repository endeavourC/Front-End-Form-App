import Step from "@/js/Step";
import State from "@/js/State";
import FormCreator from "@/js/FormCreator";
import {
	EmailRule,
	ZipCodeRule,
	RequiredRule,
	PhoneRule,
} from "@/js/validation-rules";

const customerDataView = (rootElement) => {
	const formCreator = new FormCreator();

	formCreator.subscribe((errors) => {
		State.setProperty((prevState) => ({
			...prevState,
			disableNextButton: errors.length,
		}));
	});

	const handleInputChange = (ev) => {
		const { name, value } = ev.target;
		State.setProperty((prevState) => {
			return {
				...prevState,
				customer: {
					...prevState.customer,
					[name]: value,
				},
			};
		});
	};

	formCreator.createField({
		fieldType: "text",
		fieldName: "name",
		fieldLabel: "Imię*",
		fieldValue: State.getProperty("customer").name,
		fieldID: "name",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule],
	});
	formCreator.createField({
		fieldType: "text",
		fieldName: "surname",
		fieldLabel: "Nazwisko*",
		fieldValue: State.getProperty("customer").surname,
		fieldID: "surname",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule],
	});

	formCreator.createField({
		fieldType: "email",
		fieldName: "email",
		fieldLabel: "E-mail*",
		fieldValue: State.getProperty("customer").email,
		fieldID: "email",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule, EmailRule],
	});

	formCreator.createField({
		fieldType: "text",
		fieldName: "phone",
		fieldLabel: "Numer telefonu*",
		fieldValue: State.getProperty("customer").phone,
		fieldID: "phone",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule, PhoneRule],
	});

	formCreator.createField({
		fieldType: "text",
		fieldName: "address",
		fieldLabel: "Ulica*",
		fieldValue: State.getProperty("customer").address,
		fieldID: "address",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule],
	});
	formCreator.createField({
		fieldType: "text",
		fieldName: "building_number",
		fieldLabel: "Numer budynku*",
		fieldValue: State.getProperty("customer").building_number,
		fieldID: "building_number",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule],
	});

	formCreator.createField({
		fieldType: "text",
		fieldName: "flat_number",
		fieldLabel: "Numer mieszkania",
		fieldValue: State.getProperty("customer").flat_number,
		fieldID: "flat_number",
		fieldCallback: handleInputChange,
	});

	formCreator.createField({
		fieldType: "text",
		fieldName: "city",
		fieldLabel: "Miasto*",
		fieldValue: State.getProperty("customer").city,
		fieldID: "city",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule],
	});

	formCreator.createField({
		fieldType: "text",
		fieldName: "zip_code",
		fieldLabel: "Kod pocztowy*",
		fieldValue: State.getProperty("customer").zip_code,
		fieldID: "zip_code",
		fieldCallback: handleInputChange,
		fieldValidationRules: [RequiredRule, ZipCodeRule],
	});

	formCreator.renderFields(rootElement);
};

const customerDataStep = new Step(
	"Dane klienta",
	"customer-data",
	customerDataView
);

export default customerDataStep;
