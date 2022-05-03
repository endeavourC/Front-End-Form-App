import Rule from "@/js/validation-rules/Rule";

class ZipCodeRule extends Rule {
	static message = "Niepoprawny kod pocztowy";

	static isInvalid(zipcode) {
		return !zipcode.match(/^[0-9]{2}-[0-9]{3}$/);
	}
}

export default ZipCodeRule;
