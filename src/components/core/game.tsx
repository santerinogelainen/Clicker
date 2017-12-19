import {Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";

export class Game {

    clock: Clock;
    companies: Array<Company> = [];
    totalMoney: number;
    companycost: number = 50;
    costmodifier: number = 10;
    perClick: number = 1;
    map: Map;
    
    constructor() {
        this.totalMoney = 0;
        this.clock = new Clock();
        this.clock.onNextDay = () => {
            this.totalMoney += this.getTotalMpd();
        }
        this.map = new Map();
    }

    /**
     * Returns the total mpd
     */
    getTotalMpd() {
        let total: number = 0;
        this.map.cities.forEach(city => {
            city.outlets.forEach(outlet => {
                total += outlet.mpd;
            });
        });
        return total;
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