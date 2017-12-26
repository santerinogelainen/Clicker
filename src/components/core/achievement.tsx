
import {Dictionary} from "../helpers/dictionary";
import * as AchievementsJSON from "../../json/achievements.json";

export class Achievements {

	static JSON = AchievementsJSON as any;
	static all: Dictionary<Achievement> = new Dictionary<Achievement>();
	
	//events
	static onNewEvents: Array<(achievement?: Achievement) => any> = [];
	
	/**
     * Create a new event that triggers when a new achievement is achieved
     */
    static set onNewAchievement(func: (achievement?: Achievement, ...args) => any) {
        Achievements.onNewEvents.push(func);
	}
	
	/**
     * Set new achievement
     * @param achievement achievement
     */
    static new(achievement: Achievement) {
        Achievements.all.set(achievement.key, achievement);
        // run through all onNewAchievement events
        Achievements.onNewEvents.forEach(func => {
            func(achievement);
        });
	}
	
	/**
     * Check if player has the achievement
     * @param achievement achievement to check
     */
    static hasAchievement(achievement: Achievement): boolean {
        return Achievements.all.hasKey(achievement.key);
    }

}


export interface Achievement {
	key: string;
	title: string;
	description: string;
	icon: string;
}