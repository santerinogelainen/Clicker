import * as React from "react";
import {City} from "./city";
import * as $ from "jquery";
import {Dictionary} from "../helpers/dictionary";
import * as CityJSON from "../../json/cities.json";
import { Company } from "./company";
import {Stats} from "./stats";
import {Achievements} from "./achievement";

export class Map {

    cities: Dictionary<City>;
    totalCities: number = 0;
    selected: City;

    constructor() {
        this.cities = new Dictionary<City>();
        this.initCities();
        this.setSelected(0);
    }

    /**
     * set selected city by it's key
     * @param key city's key
     */
    public setSelected(key: string);
    /**
     * set selected city by it's index
     * @param index city's index
     */
    public setSelected(index: number);
    public setSelected(x) {
        this.selected = this.cities.get(x);
    }

    /**
     * Creates a new outlet to a city
     * @param company company of the outlet
     * @param city city where to create the outlet, default = this.selected
     */
    newOutlet(company: Company, city: City = this.selected) {
        let outlets = city.outlets.length;
        city.newOutlet(company);
        if (outlets == 0) {
            Stats.citiesWithOutlets++;
            if (Stats.citiesWithOutlets == this.totalCities) {
                Achievements.new(Achievements.all.get('outletinallcities'));
            }
            // recalculate cities without outlets cost
            for(let i = 0; i < this.cities.length; i++) {
                if (this.cities[i].outletCount() == 0) {
                    this.cities[i].updateCostOnNewCity();
                }
            }
        }
    }

    /**
     * Adds a city to the map
     * @param city the city to add
     */
    public addCity(city: City) {
        this.cities.set(city.key, city);
    }

    /**
     * Initializes the map with cities
     */
    private initCities() {
        let data = CityJSON as any;
        $.each(data, (key, value) => {
            this.totalCities++;
            this.addCity(new City(value));
        });
    }
}