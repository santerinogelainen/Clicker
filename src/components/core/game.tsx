import {Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";
import { Achievements } from "./achievement";
import {Dictionary} from "../helpers/dictionary";

export class Game {

    clock: Clock;
    companies: Array<Company> = [];
    totalMoney: number;
    companycost: number = 50;
    costmodifier: number = 10;
    achievementmodifier: number = 0.1;
    perClick: number = 1;
    map: Map;
    
    constructor() {
        this.totalMoney = 0;
        this.clock = new Clock();
        this.clock.onNextDay = () => {
            let mpd = this.getTotalMpd();
            this.totalMoney += mpd;
            Stats.totalMoneyEarned += mpd;
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
        // boost with achievements
        let modifier = 1 + (Achievements.all.length * this.achievementmodifier);
        total *= modifier;
        return total;
    }

    /**
     * Checks if you have enough money for something
     * @param amount amount 
     */
    enoughMoneyFor(amount: number) {
        return this.totalMoney >= amount;
    }

    /**
     * Uses money
     * @param amount the amount to use
     */
    useMoney(amount: number) {
        this.totalMoney -= amount;
    }

    /**
     * "Work" (click) for money
     */
    work() {
        this.totalMoney += this.perClick;
        Stats.totalMoneyEarned += this.perClick;
        Stats.totalClicks++;
    }

    /**
     * adds a new company
     * @param company company that is added
     */
    public newCompany(company: Company){
        if (company.id == 0) {
            Achievements.new(Achievements.JSON.firstcompany);
        }
        if (company.id == 1) {
            Achievements.new(Achievements.JSON.secondcompany);
        }
        if (company.id == 2) {
            Achievements.new(Achievements.JSON.thirdcompany);
        }
        if (company.id == 3) {
            Achievements.new(Achievements.JSON.fourthcompany);
        }
        if (company.id == 4) {
            Achievements.new(Achievements.JSON.fifthcompany);
        }
        this.companies[company.id] = company;
        this.companycost = this.companycost * this.costmodifier;
        Stats.totalCompanies++;
    }

}