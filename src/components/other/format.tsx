import * as numeral from "numeral";

export default class Format {

	/**
	 * Abbriviates a number (1000 => 1k)
	 * Anything less than 1000 wont be abbriviated
	 * @param n number to be abbriviated
	 */
	static abbriviate(n: number): string {
		if (n < 1000) {
			return n.toString();
		}
		return numeral(n).format("0.0a");
	}
}