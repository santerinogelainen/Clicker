import {ICompany, CompanyType, Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";
import { Achievements } from "./achievement";
import {Dictionary} from "../helpers/dictionary";

export class Game {

    clock: Clock;
    companies: Array<Company> = [];
    totalMoney: number;
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
     * Checks if the user has a company of a type
     * @param type type of the company
     */
    hasCompanyOfType(type: CompanyType) {
        for (let i = 0; i < this.companies.length; i++) {
            if (this.companies[i].type == type) {
                return true;
            }
        }
        return false;
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
     * @returns boolean true if new company is created
     */
    public newCompany(company: ICompany): boolean {
        if (this.enoughMoneyFor(Company.typeinfo[company.type].companycost)) {
            switch(company.type) {
                case CompanyType.Store:
                    Achievements.new(Achievements.JSON.storecompany);
                    break;
                case CompanyType.Restaurant:
                    Achievements.new(Achievements.JSON.restaurantcompany);
                    break;
                case CompanyType.Farm:
                    Achievements.new(Achievements.JSON.farmcompany);
                    break;
                case CompanyType.Factory:
                    Achievements.new(Achievements.JSON.factorycompany);
                    break;
                case CompanyType.Bank:
                    Achievements.new(Achievements.JSON.bankcompany);
                    break;
            }
            this.companies[company.nth] = new Company(company);
            Stats.totalCompanies++;
            return true;
        }
        return false;
    }

}