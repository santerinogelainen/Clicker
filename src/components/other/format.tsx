export class Format {

	static largenumberabbr: Array<string> = [
		"k", "m", "b", "t", "q", "Q", "s", "S", "o", "n", "d", "u", "X"
	];

	/**
	 * Abbriviates a number (1000 => 1k)
	 * Anything less than 1000 wont be abbriviated
	 * @param number number to be abbriviated
	 */
	static abbriviate(number: number): string {
		let n: string;
		if (number < Math.pow(10, 3)) {
			if (Format.isInteger(number)) {
				n = Math.floor(number).toString();
			} else {
				n = number.toFixed(1).toString();
			}
			return n;
		}

		let pow = 3;
		for (let i = 0; i < Format.largenumberabbr.length; i++) {
			if (number >= Math.pow(10, pow) && number < Math.pow(10, pow + 3)) {
				number /= Math.pow(10, pow);
				n = number.toFixed(1).toString();
				n += Format.largenumberabbr[i];
				return n;
			}
			pow += 3;
		}

		
		number /= Math.pow(10, (Format.largenumberabbr.length * 3));
		n = number.toFixed(1).toString();
		return n + Format.largenumberabbr[Format.largenumberabbr.length-1];

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