import {Company} from "./company";
import Stats from "./stats";
import {Map} from "./map";

export class Game {

    companies: Array<Company> = [];
    totalMoney: number;
    mpd: number;
    perClick: number = 1;
    map: Map;
    
    constructor() {
        this.mpd = 0;
        this.totalMoney = 0;
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
        Stats.totalCompanies++;
    }

}