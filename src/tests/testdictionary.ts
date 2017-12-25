import 'mocha';
import {expect, assert, should} from 'chai';
import { Dictionary } from '../components/helpers/dictionary';

describe('Dictionary', () => {

	let d = new Dictionary<string>();

	it('should add five items', () => {

		for (let i = 0; i < 5; i++) {
			d.set("key" + i, "item " + i);
			expect(d.get("key" + i)).to.equal("item " + i);
		}

		expect(d.length).to.equal(5);
		assert.ok(true);

	});

	it('should loop with foreach', () => {

		let looped = 0;
		d.forEach((value: string, key: string, index: number) => {
			expect(value).to.equal("item " + index);
			looped++;
		});

		expect(looped).to.equal(5);
		assert.ok(true);

	});

	it("should delete all the values", () => {

		expect(d.length).to.equal(5);

		for(let i = d.length-1; i >= 0; i--) {
			d.remove(d.keyAt(i));
		}

		expect(d.length).to.equal(0);
		expect(d.isEmpty).to.equal(true);
		assert.ok(true);
	});

});