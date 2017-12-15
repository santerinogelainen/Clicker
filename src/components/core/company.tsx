export interface Company {
    id: number; //THIS HAS TO BE UNIQUE
    name: string;
}

export class Outlet {
    name: string;
    count: number;
    mpd: number = 0.1;
    basempd: number = 0.1;
    basecost: number = 15;
    cost: number = 15;
    costmodifier: number = 1.15;

    constructor(props: Company, nth: number = 0) {
        this.name = props.name;
        this.count = 1;
        this.adjustBaseMpd(nth);
    }

    /**
     * Adjust the base mpd of this outlet
     * @param nth the nth outlet in the city
     */
    adjustBaseMpd(nth: number) {
        this.basempd = this.basempd * Math.pow(10, nth);
        this.mpd = this.basempd;
    }

    /**
     * Calculate mpd of this outlet
     * Use this everytime you update something
     */
    calculateMpd() {
        this.mpd = this.basempd * this.count;
    }

    calculateCost() {
        this.cost = Math.floor(Math.pow(this.costmodifier, this.count) * this.basecost);
    }

    /**
     * Upgrade the outlet
     */
    upgrade() {
        this.count += 1;
        this.calculateCost();
        this.calculateMpd();
    }

}