import Rule from "@/js/validation-rules/Rule";

class RequiredRule extends Rule {
	static message = "To pole jest wymagane.";

	static isInvalid(value) {
		return value === undefined || value === null || value === "";
	}
}

export default RequiredRule;
