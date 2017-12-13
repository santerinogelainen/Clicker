export interface Company {
    id: number; //THIS HAS TO BE UNIQUE
    name: string;
}

export class Outlet {
    name: string;
    count: number;
    mpd: number = 0.1;
    basempd: number = 0.1;
    cost: number = 15;
    costmodifier: number = 0.15;

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

    /**
     * Upgrade the outlet
     */
    upgrade() {
        this.count += 1;
        this.cost += Math.floor(this.cost * this.costmodifier);
        this.calculateMpd();
    }

}