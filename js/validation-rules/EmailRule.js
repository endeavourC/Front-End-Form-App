import Rule from "@/js/validation-rules/Rule";

class EmailRule extends Rule {
	static message = "Niepoprawny adres email.";

	static isInvalid(email) {
		const re = /\S+@\S+\.\S+/;
		return !re.test(email);
	}
}

export default EmailRule;
