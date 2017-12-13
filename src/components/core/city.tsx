import { Outlet, Company } from "./company";
import Stats from "./stats";
import * as React from "react";

interface CityProps {
    name: string;
    icon: string;
}

export class City {

    id: string;
    name: string;
    icon: JSX.Element;
    outlets: Array<Outlet> = [];
    basecost: number = 15;
    cost: number = 15;
    costmodifier: number = 1.5;

    constructor(id: string, props: CityProps) {
        this.id = id;
        this.name = props.name;
        this.icon = <img className="city-icon" src={props.icon}/>;
    }

    adjustBaseCost() {
        // TODO: change cost so they are not relative and can be calculated later
        this.cost += Math.floor(this.cost * this.costmodifier);
    }

    /**
     * checks if the company already has an outlet in the city
     * @param company company that is being checked
     * @returns true is outlet exists
     */
    hasOutletFor(company: Company): boolean {
        return company.id in this.outlets;
    }

    /**
     * Returns the number of outlets in this city
     */
    outletCount() {
        let count = 0;
        for (let i = 0; i < this.outlets.length; i++) {
            if (this.outlets[i] != null) {
                count++;
            }
        }
        return count;
    }

    /**
     * Checks if this city has all outlets for all companies
     * @param companies list of companies
     * @returns true if this city has all outlets
     */
    hasAllOutlets(companies: Array<Company>): boolean {
        for (let i = 0; i < companies.length; i++) {
            if (!this.hasOutletFor(companies[i])) {
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
            if (this.outletCount() == 0) {
                Stats.citiesWithOutlets++;
            }
            this.outlets[company.id] = new Outlet(company, this.outletCount());
            Stats.totalOutlets++;
            console.log(this);
            this.cost = Math.floor(this.cost * this.costmodifier);
            return true;
        }
        return false;
    }

}