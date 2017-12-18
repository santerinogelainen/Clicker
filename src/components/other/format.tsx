import * as numeral from "numeral";

export class Format {

	/**
	 * Abbriviates a number (1000 => 1k)
	 * Anything less than 1000 wont be abbriviated
	 * @param n number to be abbriviated
	 */
	static abbriviate(n: number): string {
		let num = numeral(n);
		if (n < 1000) {
			if (Format.isInteger(n)) {
				return num.format("0");
			}
			return num.format("0.0");
		}
		return num.format("0.0a");
	}

	/**
	 * Check if a number is an integer
	 * @param value value to be checked
	 */
	private static isInteger(value): boolean {
		return typeof value === 'number' && 
		  isFinite(value) && 
		  Math.floor(value) === value;
	}
}