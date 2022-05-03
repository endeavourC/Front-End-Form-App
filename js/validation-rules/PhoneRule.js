import Rule from "@/js/validation-rules/Rule";

class PhoneRule extends Rule {
	static message = "Niepoprawny numer telefonu";

	static isInvalid(phone) {
		const re = /^\d{9}$/;
		return !re.test(phone);
	}
}

export default PhoneRule;
