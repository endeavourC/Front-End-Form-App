export const API_URL = `https://picsum.photos/`;

export const FORM_APP_STEP_CLASS = `formApp__step`;
export const FORM_APP_STEP_ACTIVE_CLASS = `formApp__step--active`;
export const FORM_APP_PREV_BUTTON_ID = "prev";
export const FORM_APP_NEXT_BUTTON_ID = "next";

export const initialState = {
	currentStep: 1,
	steps: [],
	customer: {
		name: "",
		surname: "",
		phone: "",
		email: "",
		address: "",
		city: "",
		zip_code: "",
		building_number: "",
		flat_number: "",
	},
};
