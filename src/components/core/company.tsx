import * as CompanyTypeJSON from "../../json/companytypes.json";

export enum CompanyType {
    Store = "store",
    Restaurant = "restaurant",
    Farm = "farm",
    Factory = "factory",
    Bank = "bank"
}

export interface ICompany {
    nth: number; //THIS HAS TO BE UNIQUE
    name: string;
    type: CompanyType;
}

export class Company implements ICompany {

    static typeinfo = CompanyTypeJSON as any;

    nth: number;
    name: string;
    type: CompanyType;

    constructor(data: ICompany) {
        this.nth = data.nth;
        this.name = data.name;
        this.type = data.type;
    }

}

export class Outlet extends Company {

    count: number;
    mpd: number = 0.1;
    basempd: number = 0.1;
    basecost: number = 15;
    cost: number = 15;
    costmodifier: number = 1.15;

    constructor(data: ICompany) {
        super(data);
        this.setBaseMpd();
        this.count = 1;
    }

    setBaseMpd() {
        this.basempd = Company.typeinfo[this.type].basempd;
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