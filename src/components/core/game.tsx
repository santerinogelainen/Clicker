import {Company} from "./company";
import {Stats} from "./stats";
import {Map} from "./map";
import {Clock} from "./clock";
import { Achievement } from "./achievement";
import {Dictionary} from "../helpers/dictionary";
import * as AchievementsJSON from "../../json/achievements.json";

let Achievements = AchievementsJSON as any;

export class Game {

    clock: Clock;
    achievements: Dictionary<Achievement>;
    companies: Array<Company> = [];
    totalMoney: number;
    companycost: number = 50;
    costmodifier: number = 10;
    achievementmodifier: number = 0.1;
    perClick: number = 1;
    map: Map;

    //events
    onAchievementEvents: Array<(achievement?: Achievement) => any> = [];
    
    constructor() {
        this.totalMoney = 0;
        this.clock = new Clock();
        this.achievements = new Dictionary<Achievement>();
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
        let modifier = 1 + (this.achievements.length * this.achievementmodifier);
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
        this.achievements.set(achievement.key, achievement);
        // run through all onNewAchievement events
        this.onAchievementEvents.forEach(func => {
            func(achievement);
        });
    }

    /**
     * Check if player has the achievement
     * @param achievement achievement to check
     */
    hasAchievement(achievement: Achievement): boolean {
        return this.achievements.hasKey(achievement.key);
    }

    /**
     * adds a new company
     * @param company company that is added
     */
    public newCompany(company: Company){
        if (company.id == 0) {
            this.newAchievement(Achievements.firstcompany);
        }
        if (company.id == 1) {
            this.newAchievement(Achievements.secondcompany);
        }
        if (company.id == 2) {
            this.newAchievement(Achievements.thirdcompany);
        }
        if (company.id == 3) {
            this.newAchievement(Achievements.fourthcompany);
        }
        if (company.id == 4) {
            this.newAchievement(Achievements.fifthcompany);
        }
        this.companies[company.id] = company;
        this.companycost = this.companycost * this.costmodifier;
        Stats.totalCompanies++;
    }

}