import { Outlet, Company } from "./company";
import {Stats} from "./stats";
import {Dictionary} from "../helpers/dictionary";
import * as React from "react";

interface CityProps {
    key: string;
    name: string;
    icon: string;
}

export class City {

    key: string;
    name: string;
    icon: string;
    outlets: Dictionary<Outlet>;
    citymodifier: number = 2;

    constructor(props: CityProps) {
        this.key = props.key;
        this.name = props.name;
        this.icon = props.icon;
        this.outlets = new Dictionary<Outlet>();
    }

    /**
     * Update the cost of this city when you create a new outlet in a new city
     */
    /*updateCostOnNewCity() {
        this.cost = Math.floor(Math.pow(this.citymodifier, Stats.citiesWithOutlets) * this.basecost);
    }*/

    /**
     * checks if the company already has an outlet in the city
     * @param company company that is being checked
     * @returns true is outlet exists
     */
    hasOutletFor(company: Company): boolean {
        return this.outlets.hasKey(company.key);
    }

    /**
     * Checks if this city has all outlets for all companies
     * @param companies list of companies
     * @returns true if this city has all outlets
     */
    hasAllOutlets(companies: Dictionary<Company>): boolean {
        for (let i = 0; i < companies.length; i++) {
            if (!this.hasOutletFor(companies.get(i))) {
                return false;
            }
        }
        return true;
    }

    /**
     * adds a new outlet to the city if it doesn't exist yet
     * @param company companies' props
     * @returns outlet added or not
     */
    newOutlet(company: Company): boolean {
        if (!this.hasOutletFor(company)) {
            this.outlets.set(company.key, new Outlet(company));
            Stats.totalOutlets++;
            return true;
        }
        return false;
    }

}