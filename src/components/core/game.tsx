import {Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";
import { Achievement } from "./achievement";
import * as AchievementsJSON from "../../json/achievements.json";

let Achievements = AchievementsJSON as any;

export class Game {

    clock: Clock;
    achievements: Array<Achievement> = [];
    companies: Array<Company> = [];
    totalMoney: number;
    companycost: number = 50;
    costmodifier: number = 10;
    perClick: number = 1;
    map: Map;

    //events
    onAchievementEvents: Array<(achievement?: Achievement) => any> = [];
    
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
    }

    /**
     * Create a new event that triggers when a new achievement is achieved
     */
    set onNewAchievement(func: (achievement?: Achievement, ...args) => any) {
        this.onAchievementEvents.push(func);
    }

    /**
     * Get new achievement
     * @param achievement achievement
     */
    newAchievement(achievement: Achievement) {
        this.achievements.push(achievement);
        // run through all onNewAchievement events
        this.onAchievementEvents.forEach(func => {
            func(achievement);
        });
    }

    /**
     * adds a new company
     * @param company company that is added
     */
    public newCompany(company: Company){
        if (company.id == 0) {
            this.newAchievement(Achievements.firstcompany);
        }
        if (company.id == 4) {
            this.newAchievement(Achievements.fifthcompany);
        }
        this.companies[company.id] = company;
        this.companycost = this.companycost * this.costmodifier;
        Stats.totalCompanies++;
    }

}