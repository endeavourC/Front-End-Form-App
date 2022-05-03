import Rule from "@/js/validation-rules/Rule";

class ZipCodeRule extends Rule {
	static message = "Niepoprawny kod pocztowy";

	static isInvalid(zipcode) {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return !re.test(zipcode);
	}
}

export default ZipCodeRule;
