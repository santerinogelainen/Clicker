import {Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";

export class Game {

    clock: Clock;
    companies: Array<Company> = [];
    totalMoney: number;
    companycost: number = 100000;
    costmodifier: number = 10;
    mpd: number;
    perClick: number = 1;
    map: Map;
    
    constructor() {
        this.mpd = 0;
        this.totalMoney = 0;
        this.clock = new Clock();
        this.map = new Map();
    }

    /**
     * "Work" (click) for money
     */
    work() {
        this.totalMoney += this.perClick;
    }

    /**
     * adds a new company
     * @param company company that is added
     */
    public newCompany(company: Company){
        this.companies[company.id] = company;
        if (this.companies.length > 1) {
            this.companycost = this.companycost * this.costmodifier;
        }
        Stats.totalCompanies++;
    }

}