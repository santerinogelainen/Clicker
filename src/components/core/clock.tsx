export class Clock {
	
	date: Date;
	interval;
	nextDayEvents: Array<(...args) => any> = [];
	
	constructor() {
		this.date = new Date();
	}

	/**
	 * Adds a new event to the clock that triggers everytime day changes
	 */
	set onNextDay(func: (...args) => any) {
		this.nextDayEvents.push(func);
	}

	/**
	 * Starts the dayclock
	 */
	start() {
		this.interval = setInterval(() => {
			this.nextDay();
		}, 1000);
	}

	/**
	 * Pauses the dayclock
	 */
	pause() {
		clearInterval(this.interval);
	}

	/**
	 * Goes to the next day
	 */
	nextDay = () => {
		this.date.setDate(this.date.getDate() + 1);
		this.nextDayEvents.forEach(func => {
			func();
		});
	}

}