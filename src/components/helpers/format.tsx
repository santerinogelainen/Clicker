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
				n = this.toFixed(number, 1);
			}
			return n;
		}

		let pow = 3;
		for (let i = 0; i < Format.largenumberabbr.length; i++) {
			if (number >= Math.pow(10, pow) && number < Math.pow(10, pow + 3)) {
				number /= Math.pow(10, pow);
				n = this.toFixed(number, 1);
				n += Format.largenumberabbr[i];
				return n;
			}
			pow += 3;
		}

		
		number /= Math.pow(10, (Format.largenumberabbr.length * 3));
		n = this.toFixed(number, 1).toString();
		return n + Format.largenumberabbr[Format.largenumberabbr.length-1];

	}

	/**
	 * Fuck js https://stackoverflow.com/questions/4187146/display-two-decimal-places-no-rounding
	 * @param num number to be cut
	 * @param fixed round or no round
	 */
	private static toFixed(num, fixed) {
		let re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
		return num.toString().match(re)[0];
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