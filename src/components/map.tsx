import * as React from "react";
import {City} from "./city";
import * as $ from "jquery";
import * as CityJSON from "../json/cities.json";

export class Map {

    cities: Array<City> = new Array<City>();
    selected: City;

    constructor() {
        this.initCities();
        // sort cities
        this.cities.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        this.selected = this.cities[0];
    }

    /**
     * Adds a city to the map
     * @param city the city to add
     */
    public addCity(city: City) {
        this.cities.push(city);
    }

    /**
     * Initializes the map with cities
     */
    private initCities() {
        let data = CityJSON as any;
        $.each(data, (key, value) => {
            this.addCity(new City(key, value));
        });
    }
}