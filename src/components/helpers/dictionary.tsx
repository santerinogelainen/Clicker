export class Dictionary<T> {

	private items: Object = {};

	/**
	 * Create a new dictionary
	 * @param json copy dictionary from json
	 */
	constructor(json?: Object) {
		if (json != null) {
			this.items = json;
		}
	}

	/**
	 * Get the length of the dictionary
	 */
	get length() {
		return Object.keys(this.items).length;
	}

	/**
	 * Check if dictionary is empty
	 */
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
	 * Returns an object of the dictionary
	 */
	toObject() {
		return this.items;
	}

	/**
	 * Returns an array of the dictionary
	 */
	toArray() {
		let array = $.map(this.items, function(value, index) {
			return value;
		});
		return array;
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