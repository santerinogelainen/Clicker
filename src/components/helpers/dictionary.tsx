export class Dictionary<T> {

	private items: Object = {};

	constructor() {}

	get length() {
		return Object.keys(this.items).length;
	}

	get isEmpty(): boolean {
		return this.length == 0;
	}

	/**
	 * Set a new value to the dictionary
	 * @param key key of the value
	 * @param item item
	 */
	set(key: string, item: T) {
		this.items[key] = item;
	}

	/**
	 * Removes an item from the dictionary
	 * @param key key of the item
	 */
	remove(key: string) {
		if (this.hasKey(key)) {
			delete this.items[key];
		}
	}

	/**
	 * Checks if dictionary has key
	 * @param key key to be checked
	 */
	hasKey(key: string): boolean {
		return this.items.hasOwnProperty(key);
	}

	/**
	 * Get the key at index
	 * @param index index
	 */
	keyAt(index: number) {
		return Object.keys(this.items)[index];
	}

	/**
	 * Returns the index of a key
	 * @param key key
	 */
	indexOf(key: string): number {
		return Object.keys(this.items).indexOf(key);
	}

	/**
	 * Returns the value at index
	 * @param index index of the value
	 */
	get(index: number): T;
	/**
	 * Returns the value at key
	 * @param key key of the value
	 */
	get(key: string): T;
	get(key) {
		if (typeof(key) == "number") {
			return this.items[this.keyAt(key)];
		}
		return this.items[key];
	}

	forEach(item: (value: T, key?: string, index?: number) => boolean | void) {
		for (let i = 0; i < this.length; i++) {

			if (item(this.get(i), this.keyAt(i), i) === true) {
				return;
			}
		}
	}

}